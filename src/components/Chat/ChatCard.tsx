// import React from "react";
// import Image from "next/image";
// import { Chat } from "@/types/chat";



// const ChatCard = () => {
//   return (
//     <div className="rounded-xl bg-white border border-stroke py-5 shadow-default dark:border-strokedark dark:bg-boxdark">
//       <h4 className="mb-2 px-7.5 text-xl font-semibold text-black dark:text-white">
//         Leaderboard
//       </h4>

//       <div className="flex divide-y divide-solid flex-col gap-2">
//         {chatData.map((chat, key) => (
//           <div
//             className="flex flex-row items-center justify-center gap-10 px-7.5 py-1 hover:bg-gray-3 dark:hover:bg-meta-4 rounded-lg shadow-md"
//             key={key}
//           >
//             <div className="relative rounded-full">
//               <Image
//                 width={30}
//                 height={30}
//                 src={chat.avatar}
//                 alt="User"
//                 style={{
//                   width: "auto",
//                   height: "auto",
//                 }}
//               />
//             </div>

//             <h5 className="flex flex-1 font-medium text-black dark:text-white">
//               {chat.name}
//             </h5>
//             <h5 className="font-medium text-black dark:text-white">
//               {chat.points}
//             </h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatCard;


import React from "react";
import Image from "next/image";
import { Chat } from "@/types/chat";

const chatData: Chat[] = [
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
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    points:1000
  },
];

const ChatCard = () => {
  return (
    <div className="rounded-xl drop-shadow-2xl shadow-slate-50 py-5 ">
      <h4 className="mb-2 px-7.5 text-xl font-semibold text-black dark:text-white">
        Leaderboard
      </h4>

      <div className="flex flex-col gap-2">
        {chatData.map((chat, key) => (
          <div
            className="flex flex-row items-center justify-center gap-10 px-7.5 py-1 hover:bg-gray-3 dark:hover:bg-meta-4 rounded-lg shadow-md"
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

export default ChatCard;
