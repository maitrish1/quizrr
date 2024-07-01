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
    <Link href='' className="h-80 w-full bg-white flex flex-col justify-evenly items-start rounded-xl border border-stroke px-5 py-2 dark:border-strokedark dark:bg-boxdark">
        {children}
    </Link>
  );
};

export default Secondarycard;
