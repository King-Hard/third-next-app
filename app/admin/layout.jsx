import { assets } from "@/assets/assets";
import SideBar from "@/components/admin_components/SideBar";
import Image from "next/image";

export default function Layout({children}) {
  return (
    <>
    <div className="flex">
      <SideBar/>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border border-black">
          <h1 className="font-medium">Admin Panel</h1>
          <Image
            src={assets.profile_icon}
            width={40}
            alt=""
          />
        </div>
      </div>
    </div>    
    {children}
    </>
  );
};