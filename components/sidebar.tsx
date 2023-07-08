import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { IoPawOutline } from "react-icons/io5";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { RiFunctionLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
type Props = {
  showNav: boolean;
};

const MENU_ITEMS = [
  {
    name: "Dashboard",
    icon: AiOutlineHome,
    path: "/",
    Notification: 0,
  },
  {
    name: "Teams",
    icon: RiTeamLine,
    path: "/Teams",
    Notification: 0,
  },
  {
    name: "Desposit",
    icon: HiOutlineArchiveBoxArrowDown,
    path: "/Desposit",
    Notification: 9,
  },
  {
    name: "WithDraw",
    icon: HiOutlineArchiveBoxXMark,
    path: "/WithDraw",
    Notification: 0,
  },
  {
    name: "Annimal Database",
    icon: IoPawOutline,
    path: "/Annimal_Database",
    Notification: 0,
  },
  {
    name: "Storage",
    icon: HiOutlineArchiveBox,
    path: "/Storage",
    Notification: 0,
  },
  {
    name: "Storage Template",
    icon: RiFunctionLine,
    path: "/Storage_Template",
    Notification: 0,
  },
  {
    name: "Settings",
    icon: FiSettings,
    path: "/Settings",
    Notification: 0,
  },
];

export const Sidebar = () => {
  const router = useRouter();

  return (
    <div
      className={
        "fixed w-[15%] h-full bg-neutral-100 shadow-sm sm:w-[15%] xs:w-auto"
      }
    >
      <div className="flex justify-center mt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="images/logo.svg" alt="Logo" width={100} height={100} />
      </div>

      <ul className={"flex flex-col gap-2 mt-[5rem] px-3"}>
        {MENU_ITEMS.map(({ name, icon: Icon, path, Notification }) => (
          <div
            className={`flex justify-between duration-150 hover:bg-gray-200 cursor-pointer hover:text-gray-600 text-gray-500`}
            key={path}
          >
            <li key={path}>
              <Link
                href={"/"}
                onClick={() => router.push(path)}
                className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center gap-2 transition-colors ease-in-out `}
              >
                <Icon size={20} />
                {name}
              </Link>
            </li>
            {Notification > 0 && (
              <div
                className="flex justify-between duration-150 p-4 hover:bg-gray-200 hover:text-gray-600 text-gray-500"
                key={name.toLowerCase().replace(" ", "-")}
              >
                <div className="gap-2 rounded-full w-5 h-5  bg-slate-600 text-white flex items-center justify-center">
                  <span className="text-sm">{Notification}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>

      <ul className={"absolute inset-x-0 bottom-0 h-16"}>
        <li>
          <Link
            href={"/"}
            className={`pl-6 py-3 rounded text-center cursor-pointer flex items-center gap-2 transition-colors ease-in-out duration-150 hover:bg-gray-200 hover:text-gray-500`}
          >
            <FaUserCircle size={20} />
            User1
          </Link>
        </li>
      </ul>
    </div>
  );
};
