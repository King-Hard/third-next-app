import { assets } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-3 sm:pl-14 py-3 border border-black">
        <Image
          src={assets.logo}
          alt=""
          width={120}
          priority
        />
      </div>
      <div className="w-45 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[90%] sm:w-[80%] absolute right-0">
          <Link 
            className="mt-1 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
            href="/admin/addBlog"
          >
            <Image
              src={assets.add_icon}
              width={28}
              alt=""
            />
            <p>Add Blog</p>
          </Link>
          <Link 
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
            href="/admin/blogList"
          >
            <Image
              src={assets.blog_icon}
              width={28}
              alt=""
            />
            <p>Blog List</p>
          </Link>
          <Link 
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
            href="/admin/subscription"
          >
            <Image
              src={assets.email_icon}
              width={28}
              alt=""
            />
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar  