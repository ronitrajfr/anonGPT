"use client";
import React, { useEffect, useRef } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useChat } from "ai/react";
import { Input } from "./ui/input";
import { ArrowUp } from "lucide-react";
import ReactMarkdown from "react-markdown";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scroll to the bottom of the chat whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className="md:pl-[200px]">
      <div className="flex min-h-screen w-full items-center justify-center bg-[#070606]">
        <div>
          {messages.length === 0 ? (
            <form
              onSubmit={handleSubmit}
              className="relative flex w-[700px] flex-col max-md:w-[600px] max-sm:w-[360px]"
            >
              <Textarea
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="box-shadow-md text-md w-full rounded-2xl border-black bg-[#141212] pl-5 pr-14 pt-4 text-white placeholder:text-gray-200"
                placeholder="Type your message here..."
                rows={4}
              />
              <button
                type="submit"
                className="absolute bottom-9 right-4 rounded-full bg-slate-200 p-3 text-[#141212]"
              >
                <ArrowUp className="h-6 w-6" />
              </button>
            </form>
          ) : (
            <div className="fixed bottom-2 left-1/2 w-full max-w-[800px] -translate-x-1/2 transform p-4 max-md:bottom-20 max-md:max-w-[600px] max-sm:max-w-[360px]">
              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col items-center"
              >
                <Input
                  onKeyDown={handleKeyDown}
                  value={input}
                  onChange={handleInputChange}
                  className="box-shadow-md h-14 w-full rounded-full border-black bg-[#141212] pl-7 text-sm text-white placeholder:text-gray-200"
                  placeholder="Message anonGPT"
                />
                <button
                  type="submit"
                  className="absolute bottom-3 right-4 rounded-full bg-slate-200 p-1 text-[#141212]"
                >
                  <ArrowUp className="h-6 w-6" />
                </button>
              </form>
            </div>
          )}
          <div className="mb-28 mt-4 flex max-w-[800px] flex-col justify-center gap-4 rounded-xl p-4 text-white">
            <div>
              {messages &&
                messages.map((message, index) => (
                  <React.Fragment key={message.id}>
                    <div
                      className={`mb-2 text-left ${message.role === "user" ? "text-3xl font-medium" : ""}`}
                    >
                      <p
                        className={`rounded p-2 ${message.role === "user" ? "text-white" : "text-slate-200"}`}
                      >
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </p>
                    </div>
                    {message.role === "assistant" &&
                      index < messages.length - 1 && (
                        <hr className="my-4 border-gray-600" />
                      )}
                  </React.Fragment>
                ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
