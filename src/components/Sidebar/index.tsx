"use client";

import React from "react";
import { usePathname } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";
import Image from "next/image";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
const Sidebar = () => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-[#1f1e30] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 `}
    >
      <div className="no-scrollbar flex w-full flex-col overflow-y-auto duration-300 ease-linear">
        <div className="flex items-center justify-center py-6">
          <Image src="https://app.quizrr.in/assets/img/brand-icon-dark.svg" alt="Logo" width='50' height='50' />
          
        </div>
        <nav className=" w-full px-4 py-4  lg:px-6">
          <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
            MENU
          </h3>
          <ul className="mb-6 flex w-full flex-col gap-1.5 rounded-xl py-2">
            <li>
           
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-[#d8f275] text-black font-bold" : "bg-white"
                } block rounded-xl px-4 py-3 duration-200`}
              >
                 <DashboardOutlinedIcon/>
                 <span className="pl-4">Dashboard</span>
                
              </Link>
            </li>
            {/* Add more menu items here */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
