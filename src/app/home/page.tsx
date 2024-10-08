"use client";
import React from "react";
import Chat from "~/components/Chat";
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
      <Chat />
    </div>
  );
};

export default page;
