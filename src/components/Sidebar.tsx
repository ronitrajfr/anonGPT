"use client";
import React from "react";
import { useSession } from "next-auth/react";
import {
  Settings,
  Search,
  Earth,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

const Sidebar = () => {
  const { data } = useSession();
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between bg-[#141212] py-4 text-white max-md:px-6 md:left-0 md:top-0 md:h-[100%] md:w-[200px] md:flex-col">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 max-md:gap-2">
          <img src="/logo.svg" alt="logo" className="h-[48px] w-[48px]" />
          <h1 className="text-2xl font-medium text-white">AnonGPT</h1>
        </div>
        <hr className="w-full border-gray-500 max-md:hidden" />

        <div className="items-center justify-center max-md:hidden">
          <div className="flex items-center gap-2 pl-2 font-medium md:mt-10 md:hover:cursor-pointer md:hover:text-gray-200">
            <Search className="h-[20px] w-[20px] text-gray-300" />
            <h1 className="text-md font-medium text-gray-300 max-md:hidden sm:mr-4">
              Home
            </h1>
          </div>
          <div className="flex items-center gap-2 pl-2 font-medium md:mt-3 md:hover:cursor-pointer md:hover:text-gray-200">
            <Earth className="h-[20px] w-[20px] text-gray-300" />
            <h1 className="text-md font-medium text-gray-300 max-md:hidden sm:mr-4">
              Discover
            </h1>
          </div>
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
            <Settings className="h-[20px] w-[20px] text-gray-300 max-md:hidden md:hover:cursor-pointer md:hover:text-gray-200" />
            <div className="items-center gap-4 max-md:flex md:hidden">
              <Search className="h-[25px] w-[25px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
              <Earth className="h-[25px] w-[25px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
              <Settings className="h-[25px] w-[25px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </div>
          </div>
        )}
        <hr className="mt-2 w-full border-gray-500 max-md:hidden" />
        <div className="max-md:hidden">
          <div className="mt-4 flex items-center justify-center gap-4">
            <a href="https://ronitt.xyz">
              <Earth className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
            <a href="/">
              <Linkedin className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
            <a href="https://github.com/ronitrajfr">
              <Github className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
            <a href="https://x.com/ronitrajfr">
              <Twitter className="h-[20px] w-[20px] text-gray-300 md:hover:cursor-pointer md:hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
