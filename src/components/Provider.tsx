"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children, session }: any) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
