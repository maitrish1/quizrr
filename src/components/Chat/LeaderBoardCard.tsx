import React from "react";
import Image from "next/image";
import { Chat } from "@/types/chat";

const leaderBoardData: Chat[] = [
  {
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    points:1000
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    points:1000
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Jhon Doe",
    points:1000
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    points:1000  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    points:1000
  },
];

const LeaderBoardCard = () => {
  return (
    <div className="p-3 overflow-y-scroll no-scrollbar rounded-xl bg-green-200  shadow-[rgba(0,0,15,0.5)_0px_0px_10px_1.5px] py-5 ">
      <h4 className="mb-2 px-7.5 text-xl font-semibold text-black dark:text-white">
        Leaderboard
      </h4>

      <div className="flex flex-col gap-2 h-full">
        {leaderBoardData.map((chat, key) => (
          <div
            className="flex flex-row items-center justify-center gap-10 px-7.5 py-1 h-1/5 hover:bg-gray-3 dark:hover:bg-meta-4 rounded-lg shadow-md bg-white"
            key={key}
          >
            <div className="relative rounded-full">
              <Image
                width={30}
                height={30}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>

            <h5 className="flex flex-1 font-medium text-black dark:text-white">
              {chat.name}
            </h5>
            <h5 className="font-medium text-black dark:text-white">
              {chat.points}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoardCard;
