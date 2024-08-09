import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Convert messages from the Vercel AI SDK format to the format
// expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(
      (message) => message.role === "user" || message.role === "assistant",
    )
    .map((message) => ({
      role: message.role === "user" ? "user" : "model",
      parts: [{ text: message.content }],
    })),
});

export async function POST(req: Request) {
  try {
    // Extract the `query` from the body of the request
    const { messages } = await req.json();

    // Fetch data from Google Custom Search API
    const url = new URL("https://www.googleapis.com/customsearch/v1");
    url.searchParams.append("q", messages!);
    url.searchParams.append("key", process.env.GOOGLE_API_KEY!);
    url.searchParams.append("cx", process.env.SEARCH_ENGINE_ID!);

    const response = await fetch(url.toString(), {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error getting response from Google API`);
    }

    const data = await response.json();
    //@ts-ignore
    const results = data.items?.map((item) => ({
      link: item.link,
      title: item.title,
      snippet: item.snippet,
      image: item.pagemap?.cse_image?.[0]?.src || "", // Extract image URL if available
    }));

    const prompt = `You are an intelligent search assistant. Based on the following search results, provide a detailed and concise answer to the user’s query in markdown format. Include the title, snippet, and, if available, an image for each result. The search results are as follows:

    
    ${results
      .map((result: any) => {
        return `### ${result.title}
    - **Snippet**: ${result.snippet}
    - **Link**: ${result.link}
    - **Image**: ${result.image}
  
    `;
      })
      .join("\n")}
    
    Provide a clear and informative summary based on the above information.`;

    // Generate the content using Google Generative AI
    const resp = await genAI
      .getGenerativeModel({ model: "gemini-pro" })
      .generateContentStream({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      });

    // Convert the response into a friendly text-stream
    const stream = GoogleGenerativeAIStream(resp);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    // Log the error for debugging
    console.error("Error in POST handler:", error);

    // Return an error response
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
