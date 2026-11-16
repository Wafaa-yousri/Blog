import React from 'react'
import { Card } from "flowbite-react";
import posts from '../Data/posts.json'
import { Avatar } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button } from "flowbite-react";


export default function cardHome() {

  console.log(posts)
  return <>
  <div className='conntainer '>

  <div className="flex items-center justify-between">

    {/* Title & Description */}
    <div>
      <h1 className="text-mist-300 text-[50px] font-bold">
        مقالات مختارة
      </h1>

      <span className="text-gray-400 text-lg leading-relaxed mr-6">
        محتوى منتقى لبدء رحلة تعلمك
      </span>
    </div>

    {/* Button */}
    <Button
      size="xl"
      className="bg-linear-to-bl from-orange-500 to-amber-600
      py-4 px-8 font-semibold text-mist-100 text-xl
      transition duration-200 ease-in-out
      hover:-translate-y-1"
    >
      عرض الكل
    </Button>

  </div>
    

    {posts.posts.slice(0, 3).map((post) => (
<div className="w-[82%] max-w-[1520px] mx-auto my-10 ">

  <Card
    className="!w-full !max-w-none !p-0  overflow-hidden !bg-[#080b10] group !border-0 "
  >

    <div className="flex flex-row w-full h-[500px] 
      border-2 border-zinc-600 rounded-[28px] 
      overflow-hidden transition-colors duration-300 
      group-hover:border-orange-500">

      {/* Image Section */}
      <div className="w-1/2 h-full shrink-0 overflow-hidden">

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover 
          transition-transform duration-700 ease-in-out 
          group-hover:scale-105"
        />

      </div>

      {/* Content Section */}
      <div className="w-1/2 h-full p-10 md:p-12 
        flex flex-col justify-between bg-[#151515] text-right
        rounded-tl-[28px] rounded-bl-[28px]">

        {/* Category & Title */}
        <div>

          <div className="flex items-center gap-3 mb-6">

            <span className="text-orange-500 bg-orange-950 px-4 py-2 rounded-full">
              {post.category}
            </span>

            <span className="text-gray-500">
           {post.readTime}
            </span>

          </div>

          <h5 className="text-3xl font-bold text-mist-100 
            leading-relaxed transition-colors duration-300 
            group-hover:text-orange-500">

            {post.title}

          </h5>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed
            transition-colors duration-300 
           ">

            {post.excerpt}

          </p>

        </div>

        {/* Author & Button */}
        <div className="flex items-center justify-between">

          <Avatar img={post.author.avatar} rounded>

            <div className="space-y-1">
              <div className="text-white font-bold 
                transition-colors duration-300 
                group-hover:text-orange-500">

                {post.author.name}

              </div>

              <div className="text-gray-500 text-sm">
                {post.date}
              </div>
            </div>

          </Avatar>

          <Button
            color="warning"
            outline
            pill
            className="!text-orange-500"
          >
            اقراء المقال

            <HiOutlineArrowRight
              className="h-6 mr-4 w-6 text-orange-500 
              transition-transform duration-300 
              group-hover:-translate-x-2"
            />

          </Button>

        </div>

      </div>

    </div>

  </Card>

</div>


    ))}



  </div>
  

  </>
}
