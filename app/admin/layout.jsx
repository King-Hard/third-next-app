import { assets } from "@/assets/assets";
import SideBar from "@/components/admin_components/SideBar";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({children}) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark"/>
        <SideBar/>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-6 sm:px-12 border border-black">
            <h1 className="font-medium text-base sm:text-xl">Admin Panel</h1>
            <Image
              src={assets.profile_icon}
              width={40}
              alt=""
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};