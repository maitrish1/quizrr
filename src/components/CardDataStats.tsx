import React, { ReactNode } from "react";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import Link from "next/link";
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
    <div className="h-80 w-1/3 flex flex-col items-center rounded-xl border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-auto w-52 items-center justify-center">
        {children}
      </div>

      <div className="mt-4 w-full flex flex-col items-start h-fit gap-2">
        <h4 className="flex gap-2 text-title-md font-bold text-black dark:text-white">
          <MenuBookOutlinedIcon />
          <span> {tests} Tests</span>
        </h4>
        <div className="text-md flex gap-2 font-medium">
          <LibraryBooksOutlinedIcon />
          <span>{title}</span>
        </div>
        <Link href={`/${title.toLowerCase()}`}>
          <div className="flex gap-2">
            <AccessAlarmsOutlinedIcon />
            <span>{title} this year</span>
          </div>
        </Link>
        <Link href={`/${title.toLowerCase()}`}>
          <div className="flex gap-2">
            <CardTravelOutlinedIcon />
            <span>{title} previous year</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardDataStats;
