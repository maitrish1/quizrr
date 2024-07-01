import React, { ReactNode } from "react";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import Link from "next/link";

interface SecondarycardProps {
  title: string;
  children: ReactNode;
}

const Secondarycard: React.FC<SecondarycardProps> = ({
  title,
  children,
}) => {
  return (
    <div className="h-80 w-full flex flex-col justify-evenly bg-slate-300 items-start rounded-xl border border-stroke px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        {children}
    </div>
  );
};

export default Secondarycard;
