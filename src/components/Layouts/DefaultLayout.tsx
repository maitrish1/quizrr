"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/react"
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex bg-[#f0ede3] h-screen overflow-y-scroll no-scrollbar">
        <Sidebar/>

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden no-scrollbar">

          <main>
            <div className="mx-auto max-w-screen-2xl p-2 md:p-2 2xl:p-8">
              {children}
              <Analytics/>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
