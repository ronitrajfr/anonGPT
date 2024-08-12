"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Settings,
  Search,
  Earth,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useToast } from "./ui/use-toast";

const Sidebar = () => {
  const { data } = useSession();
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState("");

  const handleSaveChanges = () => {
    if (apiKey) {
      localStorage.setItem("geminiApiKey", apiKey);
      toast({
        title: "API key saved",
      });
    } else {
      toast({
        title: "API key is required",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between bg-[#141212] py-4 text-white max-md:px-6 md:left-0 md:top-0 md:h-[100%] md:w-[200px] md:flex-col">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 max-md:gap-2">
          <img src="/logo.svg" alt="logo" className="h-[48px] w-[48px]" />
          <h1 className="text-2xl font-medium text-white">AnonGPT</h1>
        </div>
        <hr className="w-full border-gray-500 max-md:hidden" />

        <div className="items-center justify-center max-md:hidden">
          <Link
            href={"/home"}
            className="flex cursor-pointer items-center gap-2 pl-2 font-medium text-gray-200 md:mt-10"
          >
            <Search className="h-[20px] w-[20px] text-gray-300" />
            <h1 className="text-md font-medium text-gray-300 max-md:hidden sm:mr-4">
              Home
            </h1>
          </Link>
          <Link
            href={"/discover"}
            className="cursor-pointertext-gray-200 flex items-center gap-2 pl-2 font-medium md:mt-3"
          >
            <Earth className="h-[20px] w-[20px] text-gray-300" />
            <h1 className="text-md font-medium text-gray-300 max-md:hidden sm:mr-4">
              Discover
            </h1>
          </Link>
        </div>
      </div>

      <div>
        {data?.user?.name && (
          <div className="flex items-center gap-2 font-medium">
            <img
              src={data.user.image as string}
              alt="user"
              className="h-[32px] w-[32px] rounded-full max-md:hidden"
            />
            <h1 className="text-gray-300 max-md:hidden sm:mr-4">
              {data.user.name}
            </h1>
            <Dialog.Root>
              <Dialog.Trigger
                asChild
                className="h-[20px] w-[20px] cursor-pointer text-gray-300 max-md:hidden md:hover:cursor-pointer md:hover:text-gray-200"
              >
                <Settings className="" />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                  <Dialog.Title className="DialogTitle">
                    Enter your API key
                  </Dialog.Title>
                  <Dialog.Description className="DialogDescription">
                    Enter your gemini API key to use this amazing app.
                    Don&apos;t worry, it is stored in your own computer.
                  </Dialog.Description>
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="API">
                      Your API
                    </label>
                    <input
                      className="Input"
                      id="API"
                      placeholder="Enter your API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                  </fieldset>

                  <div
                    style={{
                      display: "flex",
                      marginTop: 25,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Dialog.Close asChild>
                      <button
                        className="Button green"
                        onClick={handleSaveChanges}
                      >
                        Save changes
                      </button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                      <p>x</p>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <div className="items-center gap-4 max-md:flex md:hidden">
              <Search className="h-[25px] w-[25px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
              <Earth className="h-[25px] w-[25px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
              <Dialog.Root>
                <Dialog.Trigger
                  asChild
                  className="h-[25px] w-[25px] cursor-pointer text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200"
                >
                  <Settings />
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="DialogOverlay" />
                  <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">
                      Enter your API key
                    </Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                      Enter your gemini API key to use this amazing app.
                      Don&apos;t worry, it is stored in your own computer.
                    </Dialog.Description>
                    <fieldset className="Fieldset">
                      <label className="Label" htmlFor="API">
                        Your API
                      </label>
                      <input
                        className="Input"
                        id="API"
                        placeholder="Enter your API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                    </fieldset>

                    <div
                      style={{
                        display: "flex",
                        marginTop: 25,
                        justifyContent: "flex-end",
                      }}
                    >
                      <Dialog.Close asChild>
                        <button
                          className="Button green"
                          onClick={handleSaveChanges}
                        >
                          Save changes
                        </button>
                      </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                      <button className="IconButton" aria-label="Close">
                        <p>x</p>
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        )}
        <hr className="mt-2 w-full border-gray-500 max-md:hidden" />
        <div className="max-md:hidden">
          <div className="mt-4 flex items-center justify-center gap-4">
            <a href="https://ronitt.xyz" target="_blank">
              <Earth className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/ronit-raj-5a80b62b4/"
              target="_blank"
            >
              <Linkedin className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
            <a href="https://github.com/ronitrajfr/anonGPT" target="_blank">
              <Github className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
            <a href="https://x.com/ronitrajfr" target="_blank">
              <Twitter className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
