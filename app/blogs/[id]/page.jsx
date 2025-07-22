"use client";

import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

const page = ({params}) => {
  const [data, setData] = useState(null);
  const  fetchBlogData = () => {
    for(let i = 0; i < blog_data.length; i++) {
      if(Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      };
    };
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (data ? <>
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image 
            src={assets.logo} 
            alt=""
            priority
            className="w-[140px] sm:w-[170px] object-contain h-auto"
        />
        </Link>
        <button
          className="flex items-center gap-2 font-medium px-3 py-1 sm:px-6 sm:py-3
          border border-solid border-black shadow-[-7px_7px_0px_#000000]"
        >
          Get Started
            <Image alt="" src={assets.arrow}/>
        </button>
      </div>
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
          {data.title}
        </h1>
        <div><p><h1></h1></p></div>
        <Image
          src={data.author_img}
          alt=""
          width={60}
          height={60}
          className="mx-auto mt-6 border-2 border-white rounded-full"
        />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
          {data.author}
        </p>
      </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image
        src={data.image}
        alt=""
        width={1280}
        height={720}
        className="border-4 border-white "
      />
      <h1 className="my-8 text-[26px] font-semibold">
        Introduction:
      </h1>
      <p>
        {data.description}
      </p>

      <h2 className="my-5 text-[18px] font-semibold">
        Step 1: Self-Reflection and Goal Setting
      </h2>
      <p>
        Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals. 
      </p>

      <h1 className="my-5 text-[18px] font-semibold">
        Strp 2: Self-Reflection and Goal Setting
      </h1>
      <p>
        Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals. 
      </p>
 
      <h1 className="my-5 text-[18px] font-semibold">
        Conclusion:
      </h1>
      <p>
        Managing your lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step guide, you can take control of your life and make meaningful changes that lead to a more balanced and fulfilling lifestyle. Remember that it's okay to seek support and guidance from professionals or mentors along the way. Your well-being and happiness are worth the effort.      
      </p>

      <div className="mt-18">
        <p className="text-black text-lg font-semibold my-4">
          Share this articel on social media:
        </p>
        <div className="flex">
          <Image
            src={assets.facebook_icon}
            alt=""
            width={50}
          />
          <Image
            src={assets.twitter_icon}
            alt=""
            width={50}
          />
          <Image
            src={assets.googleplus_icon}
            alt=""
            width={50}
          />
        </div>
      </div>
    </div>
    <Footer/>
  </> : <> </>
  );
};

export default page