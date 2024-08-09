"use client";
import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useChat } from "ai/react";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  console.log(messages);

  return (
    <div className="md:pl-[200px]">
      <div className="flex min-h-screen w-full items-center justify-center bg-[#070606]">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <Textarea
              value={input}
              onChange={handleInputChange}
              className="box-shadow-md text-md w-[700px] rounded-2xl border-black bg-[#141212] text-white placeholder:text-gray-200"
              placeholder="Type your message here..."
            />
            <Button type="submit" className="mt-2">
              Submit
            </Button>
          </form>
          <div className="mt-4 rounded-xl bg-[#141212] p-4 text-white">
            <div>
              {messages &&
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}
                  >
                    <p
                      className={`rounded p-2 ${message.role === "user" ? "bg-slate-300 text-slate-800" : "bg-slate-100 text-slate-600"}`}
                    >
                      {message.content}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
