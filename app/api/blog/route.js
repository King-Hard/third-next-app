import { connectDB } from "@/lib/configs/db";
import BlogModel from "@/lib/models/blog_model";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

const loadDB = async () => {
  await connectDB();
};

loadDB();

export async function GET(request) {
  return NextResponse.json({message: "API Working"});
};

export async function POST(request) {
  const formData = await request.formData();
  const timeStamp = Date.now();

  const image = formData.get("image");
  const buffer = Buffer.from(await image.arrayBuffer());
  const path = `./public/${timeStamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgURl = `/${timeStamp}_${image.name}`

  // creating folder for our files
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgURl}`,
    author_img: `${formData.get("author_img")}`,
    description: `${formData.get("description")}`,
  };

  // connecting the folder we create earlier and connect to the database
  await BlogModel.create(blogData);
  console.log("Blog Saved!");

  return NextResponse.json({sucess : true, message: "Blog Added!"});
};

<div></div>