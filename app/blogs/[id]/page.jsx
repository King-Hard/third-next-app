"use client";

import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (params && params.id) {
      const id = parseInt(params.id);
      const foundData = blog_data.find((item) => item.id === id);
      setData(foundData || null);
    }
  }, [params]);
  
  return (data ? (
    <>
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
          priority
          className="border-4 border-white "
        />
        <div className="my-5">
          <h1 className="text-2xl sm:text-3xl font-medium">
            Introduction:
          </h1>
          <p className="text-base sm:text-xl">{data.description}</p>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-medium">
            {`Step 1: ${data.title_1}`}
          </h1>
          <p className="text-base sm:text-xl">{data.step_1}</p>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-medium">
            {`Step 2: ${data.title_2}`}
          </h1>
          <p className="text-base sm:text-xl">{data.step_2}</p>
        </div>
        <div className="my-5">
          <h1 className="text-2xl sm:text-3xl font-medium">
            Conclusion:
          </h1>
          <p className="text-base sm:text-xl">{data.conclusion}</p>  
        </div>
        <div className="mt-12">
          <p className="text-black text-xl font-medium my-4">
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
    </>) : (
      <>Loading...</>
    )
  );
};

export default Page