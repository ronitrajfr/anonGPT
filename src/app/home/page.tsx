import React from "react";
import Chat from "~/components/Chat";
import Sidebar from "~/components/Sidebar";
const page = () => {
  return (
    <div>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default page;
