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
    <div className=" h-80 w-1/3 flex flex-col items-center rounded-xl border border-stroke bg-white px-5 py-4 dark:border-strokedark dark:bg-boxdark ">
      <div className="flex h-auto w-56 items-center justify-center">
        {children}
      </div>

      <div className="mt-2 w-full flex flex-col items-start justify-evenly h-full  text-black">
        <h5 className="flex gap-2 text-title-md font-bold  dark:text-white">
          <MenuBookOutlinedIcon />
          <span > {tests} Tests  </span>
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
