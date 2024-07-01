import React, { ReactNode } from "react";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import Link from "next/link";
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

interface CardDataStatsProps {
  title: string;
  tests: number;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  tests,
  children,
}) => {
  return (
    <div className="h-80 w-1/3 flex flex-col items-center rounded-xl border border-stroke bg-white px-3 py-6 dark:border-strokedark dark:bg-boxdark shadow-[rgba(0,0,15,0.5)_0px_0px_10px_1.5px]">
      <div className="flex h-auto w-56 items-center justify-center">
        {children}
      </div>

      <div className="mt-4 w-full flex flex-col items-start h-fit">
        <h5 className="flex gap-2 text-title-md font-bold text-black dark:text-white">
          <MenuBookOutlinedIcon />
          <span> {tests} Tests  </span>
        </h5>
        <div className="text-md flex gap-2 font-medium">
          <LibraryBooksOutlinedIcon />
          <span>{title}</span>
        </div>
        <Link href={`/physics`}>
          <div className="flex gap-2">
            <AccessAlarmsOutlinedIcon />
            <span>Take {title} tests <NorthEastOutlinedIcon fontSize="small"/></span>
          </div>
        </Link>
        <Link href={`/physics`}>
          <div className="flex gap-2">
            <CardTravelOutlinedIcon />
            <span>Take {title} PY tests <NorthEastOutlinedIcon fontSize="small"/></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardDataStats;
