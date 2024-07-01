"use client";

import React from "react";
import { usePathname } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-35 flex-col overflow-y-hidden bg-[#1f1e30] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 `}
    >
      <div className="no-scrollbar w-full flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6 w-full">
          <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
            MENU
          </h3>
          <ul className={`${pathname==='/'?'bg-[#d8f275]':'bg-white'} mb-6 py-2 flex flex-col gap-1.5 rounded-xl w-full `}>
            <li>
              <Link href="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
