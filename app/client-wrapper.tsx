"use client";

import { Navbar } from "@/components/navbar";
import { LoaderScreen } from "@/components/LoaderScreen";
import { ChatBot } from "@/components/ChatBot";
export default function ClientWrapper() {
  return (
    <>
      <LoaderScreen />
      <Navbar />
      <ChatBot />
    </>
  );
}
