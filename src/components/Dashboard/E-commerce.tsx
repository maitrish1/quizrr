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

const ECommerce: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-10">
        <div className="flex w-2/3 flex-col items-stretch justify-between">
          <div className="flex flex-row gap-10">
            <CardDataStats title="Physics" tests={40}>
              <Image src={physics} alt="physics" />
            </CardDataStats>
            <CardDataStats title="Chemistry" tests={50}>
              <Image src={chem} alt="chemistry" />
            </CardDataStats>
            <CardDataStats title="Maths" tests={60}>
              <Image src={maths} alt="maths" />
            </CardDataStats>
          </div>
        </div>

        <div className="w-1/3">
          <div className="flex flex-row gap-10">
            <Secondarycard title="Resources">
              <Link className="w-full" href="/Progress">
                <TimelineOutlinedIcon /> Progress
              </Link>
              <Link href="/Schedule">
                <CalendarMonthOutlinedIcon /> Schedule
              </Link>
              <Link href="/recordings">
                <OndemandVideoOutlinedIcon /> Recordings
              </Link>
              <Link href="/formula-sheet">
                <FunctionsOutlinedIcon /> Formula Sheet
              </Link>
              <Link href="/revision-notes">
                <ChecklistOutlinedIcon /> Revision Notes
              </Link>
            </Secondarycard>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <MarksOverTimeChart/>
        <ChatCard/>
      </div>
      
    </div>
  );
};

export default ECommerce;
