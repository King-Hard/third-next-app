import { assets } from "@/assets/assets"
import Image from "next/image"

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image 
          src={assets.logo} 
          alt=""
          priority
          className="w-[140px] sm:w-[170px] object-contain h-auto"
        />
        <button
          className="flex items-center gap-2 font-medium px-3 py-1 sm:px-6 sm:py-3
          border border-solid border-black shadow-[-7px_7px_0px_#000000]"
        >
          Get Started
            <Image alt="" src={assets.arrow}/>
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">
          Latest Blogs
        </h1>
        <p className="mt-2 max-w-[740px] m-auto text-base sm:text-lg">
          Take a moment. This might be the story you didn't know you needed today.
        </p>
        <form 
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 
          border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input 
            type="email" 
            placeholder="Enter your email"
            className="pl-4 text-lg outline-none w-full"
          />
          <button 
            type="submit"
            className="border-1 border-black p-4 sm:px-8 active:bg-gray-700 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header