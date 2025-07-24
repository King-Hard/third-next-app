"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "startup",
    author: "Alex Bannett",
    author_img: "/author_img.png",
  }); 
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]: value}))

  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        title: "",
        description: "",
        category: "startup",
        author: "Alex Bannett",
        author_img: "/author_img.png",
      });
      setImage(false);
    } else {
      toast.error("Failed to submit blog post");
    }
  };

  return (
    <div>
      <form 
        onSubmit={onSubmitHandler}
        className="pt-12 pl-6 sm:pl-12"
      >
        <div>
          <p className="text-base sm:text-xl">Upload Thumbnail</p>
          <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
          />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            required
            hidden
            type="file"
            id="image"
          />
        </div>
        <div>
          <p className="text-base sm:text-xl mt-4">Blog Title</p>
          <input
            className="w-[250px] sm:w-[500px] mt-4 px-4 py-3 border"
            onChange={onChangeHandler}
            value={data.title}
            name="title"
            type="text"
            placeholder="Type here"
            required
          />
        </div>
        <div>
          <p className="text-base sm:text-xl mt-4">Blog Description</p>
          <textarea
            className="w-[250px] sm:w-[500px] mt-4 px-4 py-3 border"
            rows={6}
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            placeholder="Write content here"
            required
          /> 
        </div>
        <div>
          <p className="text-base sm:text-xl mt-4">Blog Category</p>
          <select 
            name="category"
            onChange={onChangeHandler}
            value={data.category}
            className="w-35 sm:w-40 mt-4 px-4 py-3 border text-base sm:text-lg"
          >
            <option value="technology">Technology</option>
            <option value="startup">Startup</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
        </div>
        <div>
          <button 
            className="mt-8 w-35 sm:w-40 shadow-sm h-12 bg-black text-white text-base sm:text-lg"
            type="submit"
          >
            DONE
          </button>
        </div>
      </form>
    </div>
  );
};
<div>
  <div>
    <p>
      <h1>
        
      </h1>
    </p>
  </div>
</div>
export default page