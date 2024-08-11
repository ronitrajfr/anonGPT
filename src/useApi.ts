"use client";
import { useEffect, useState } from "react";

const useApi = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const storedApiKey = localStorage.getItem("geminiApiKey");
    setApiKey(storedApiKey);
  }, []);

  return apiKey;
};

const fetchData = async () => {
  const apiKey = useApi();

  if (apiKey) {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Include API key in headers
      },
      body: JSON.stringify({
        /* Your request data */
      }),
    });

    const data = await response.json();
    console.log(data);
  }
};
