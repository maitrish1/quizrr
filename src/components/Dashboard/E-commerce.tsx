"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import Image from "next/image";
import maths from "@/../public/maths.jpg";

import physics from "@/../public/prism.jpg";
import chem from "@/../public/chemistry.jpg";
import Secondarycard from "../SecondaryCard";
import Link from "next/link";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import MarksOverTimeChart from "../Charts/MarksOverTimeChart";
import ChatCard from "../Chat/ChatCard";
import DateCalendarServerRequest from "../Calender/HighlightCalender";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const ECommerce: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-8">
        <div className="flex w-2/3 flex-col items-stretch justify-between">
          <div className="flex flex-row gap-8">
            <CardDataStats title="Physics" tests={40}>
              <Image className="rounded-xl" src={physics} alt="physics" />
            </CardDataStats>
            <CardDataStats title="Chemistry" tests={50}>
              <Image className="rounded-xl" src={chem} alt="chemistry" />
            </CardDataStats>
            <CardDataStats title="Maths" tests={60}>
              <Image className="rounded-xl" src={maths} alt="maths" />
            </CardDataStats>
          </div>
        </div>

        <div className="w-1/3">
          <div className="flex flex-row gap-10">
            <Secondarycard title="Resources">
              <div className="flex flex-col w-full space-y-1">
                <div className="flex items-center justify-between rounded-lg bg-blue-200 p-4">
                  <div className="flex items-center space-x-2">
                    <TimelineOutlinedIcon />
                    <Link className="w-full" href="/Progress">
                      Progress Tracker
                    </Link>
                  </div>
                  <span className="text-red-500 font-bold">NEW</span>
                </div>
                <div className="flex items-center rounded-lg bg-green-200 p-4">
                  <CalendarMonthOutlinedIcon />
                  <Link href="/Schedule">Schedule</Link>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-yellow-200 p-4">
                  <div className="flex items-center space-x-2">
                    <OndemandVideoOutlinedIcon />
                    <Link href="/recordings">Recordings</Link>
                  </div>
                  <LockOutlinedIcon />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-purple-200 p-4">
                  <div className="flex items-center space-x-2">
                    <FunctionsOutlinedIcon />
                    <Link href="/formula-sheet">Formula Sheet</Link>
                  </div>
                  <span className="text-red-500 font-bold">NEW</span>
                  <LockOutlinedIcon />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-pink-200 p-4">
                  <div className="flex items-center space-x-2">
                    <ChecklistOutlinedIcon />
                    <Link href="/revision-notes">Revision Notes</Link>
                  </div>
                  <span className="text-red-500 font-bold">NEW</span>
                  <LockOutlinedIcon />
                </div>
              </div>
            </Secondarycard>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <MarksOverTimeChart />

        <DateCalendarServerRequest />
        <ChatCard />
      </div>
    </div>
  );
};

export default ECommerce;
