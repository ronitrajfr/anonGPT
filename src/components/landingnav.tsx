"use client";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const NavbarLanding = ({ duration = 1 }) => {
  const router = useRouter();
  const { data, status } = useSession();
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = defaultVariants;

  async function handleClick() {
    if (status === "unauthenticated") {
      await signIn("google", { callbackUrl: "/home" });
    } else {
      router.push("/home");
    }
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className="sticky top-7 z-50 mx-10 flex items-center justify-between rounded-full border-2 border-white/5 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent px-7 py-3 text-gray-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-filter max-sm:mx-6 sm:mx-10 sm:px-7 md:mx-24 lg:mx-64"
    >
      <div className="flex items-center gap-3 max-sm:gap-2">
        <img
          src={"/logo.svg"}
          className="h-[50px] w-[50px] max-sm:h-[25px] max-sm:w-[25px]"
          alt="logo"
        />
        <h1 className="text-2xl font-medium text-white max-sm:text-lg">
          anonGPT
        </h1>
      </div>

      <div>
        <button
          onClick={handleClick}
          className="bg-page-gradient font-geistSans group inline-flex w-[100%] cursor-pointer items-center justify-start gap-x-1 rounded-3xl border border-zinc-600 px-4 py-3 text-lg font-semibold duration-200 hover:border-white hover:bg-transparent/10 hover:text-zinc-100 max-md:text-sm"
        >
          Get Started
          <div className="relative ml-1 flex h-5 w-5 items-center justify-center overflow-hidden">
            <ArrowUpRight className="absolute transition-all duration-500 group-hover:-translate-y-5 group-hover:translate-x-4" />
            <ArrowUpRight className="absolute -translate-x-4 -translate-y-5 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default NavbarLanding;
