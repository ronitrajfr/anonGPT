"use client";
import React from "react";
import Discover from "~/components/discover";
import Sidebar from "~/components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { status } = useSession();
  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div>
      <Sidebar />
      <Discover />
    </div>
  );
};

export default page;
