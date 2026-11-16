
"use client";
import React from 'react'
import { Card } from "flowbite-react";
import posts from '../Data/posts.json'
import { TabItem, Tabs } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


export default function Essay() {
  return <>
    <div className='conntainer  mt-5 pt-5' >


      <div>
        <Tabs aria-label="Pills"
        
        className="
      [&_button]:!text-gray-400
      [&_button:hover]:!text-orange-500
      [&_button:hover]:!bg-transparent
      [&_button[aria-selected=true]]:!text-orange-500
      [&_button[aria-selected=true]]:!bg-transparent
      [&_button[aria-selected=true]]:!border-orange-500
      [&_button:focus]:!ring-0
      [&_button:focus]:!outline-none
    ">
          <TabItem  
 title="جميع المقالات">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 justify-items-center ">


              {posts.posts.map((post) => (


                <Card
                  className="group w-full max-w-none overflow-hidden rounded-2xl border border-zinc-800 !bg-[#080b10] !p-0 [&>div]:!p-0 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500 " key={post.id}
                >
                  
                  <div className="overflow-hidden -m-4 mb-0 ">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-52 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 sm:h-56 lg:h-60"
                    />
                  </div>

                  <div className="p-2">
                    <h5 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
                      {post.title}
                    </h5>

                    <p className="text-sm leading-7 text-gray-400 sm:text-base">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pb-3">

                    <Avatar img={post.author.avatar} rounded>

                      <div className="space-y-1">
                        <div className="text-white font-bold 
                            transition-colors duration-300 
                            group-hover:text-orange-500">

                          {post.author.name}

                        </div>

                        <div className="text-gray-500 text-sm">
                          {post.author.role}
                        </div>
                      </div>

                    </Avatar>
<Link
  to={`/blog/${post.id}`}
  className="text-orange-500 border border-orange-500 p-3 rounded-lg"
>
  اقرأ المقال
</Link>

                  </div>
                </Card>


              ))}
            </div>
          </TabItem>

          <TabItem title="إضاءة">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 justify-items-center ">
              {posts.posts.filter(post => post.category === "إضاءة").map(post => (

                <Card
                  className="group w-full max-w-none overflow-hidden rounded-2xl border border-zinc-800 !bg-[#080b10] !p-0 [&>div]:!p-0 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-52 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 sm:h-56 lg:h-60"
                    />
                  </div>

                  <div className="p-2">
                    <h5 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
                      {post.title}
                    </h5>

                    <p className="text-sm leading-7 text-gray-400 sm:text-base">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pb-3">

                    <Avatar img={post.author.avatar} rounded>

                      <div className="space-y-1">
                        <div className="text-white font-bold 
                            transition-colors duration-300 
                            group-hover:text-orange-500">

                          {post.author.name}

                        </div>

                        <div className="text-gray-500 text-sm">
                          {post.author.role}
                        </div>
                      </div>

                    </Avatar>

                <Link
  to={`/blog/${post.id}`}
  className="text-orange-500 border border-orange-500 p-3 rounded-lg"
>
  اقرأ المقال
</Link>

                  </div>
                </Card>))}
            </div>
          </TabItem>

          <TabItem title="بورتريه">
          <div className="grid grid-cols-3 gap-3 justify-items-center">

  {posts.posts.filter(post => post.category === "بورتريه").map(post => (

    <div
      key={post.id}
      className="
        group w-full overflow-hidden
        rounded-2xl border border-zinc-800
        bg-[#080b10]
        p-0 m-0
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-500
        hover:shadow-lg hover:shadow-orange-500/10
      "
    >

      {/* Image */}
      <div className="w-full overflow-hidden m-0 p-0">
        <img
          src={post.image}
          alt={post.title}
          className="
            block h-52 w-full object-cover
            m-0 p-0
            transition-transform duration-500
            group-hover:scale-105
            sm:h-56 lg:h-60
          "
        />
      </div>

      {/* Content */}
      <div className="p-3">

        <h5 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
          {post.title}
        </h5>

        <p className="text-sm leading-7 text-gray-400 sm:text-base">
          {post.excerpt}
        </p>

      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3">

        <Avatar img={post.author.avatar} rounded>
          <div className="space-y-1">
            <div className="font-bold text-white group-hover:text-orange-500">
              {post.author.name}
            </div>

            <div className="text-sm text-gray-500">
              {post.author.role}
            </div>
          </div>
        </Avatar>

        <Link
          to={`/blog/${post.id}`}
          className="rounded-xl border border-orange-500 p-3 text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          اقرأ المقال
        </Link>

      </div>

    </div>

  ))}

</div>
          </TabItem>
          <TabItem title="مناظر طبيعية">
         <div className="grid grid-cols-3 gap-3 justify-items-center">

  {posts.posts.filter(post => post.category === "مناظر طبيعية").map(post => (

    <div
      key={post.id}
      className="
        group w-full overflow-hidden
        rounded-2xl border border-zinc-800
        bg-[#080b10]
        p-0 m-0
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-500
        hover:shadow-lg hover:shadow-orange-500/10
      "
    >

      {/* Image */}
      <div className="w-full overflow-hidden m-0 p-0">
        <img
          src={post.image}
          alt={post.title}
          className="
            block h-52 w-full object-cover
            m-0 p-0
            transition-transform duration-500
            group-hover:scale-105
            sm:h-56 lg:h-60
          "
        />
      </div>

      {/* Content */}
      <div className="p-3">

        <h5 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
          {post.title}
        </h5>

        <p className="text-sm leading-7 text-gray-400 sm:text-base">
          {post.excerpt}
        </p>

      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3">

        <Avatar img={post.author.avatar} rounded>
          <div className="space-y-1">
            <div className="font-bold text-white group-hover:text-orange-500">
              {post.author.name}
            </div>

            <div className="text-sm text-gray-500">
              {post.author.role}
            </div>
          </div>
        </Avatar>

        <Link
          to={`/blog/${post.id}`}
          className="rounded-xl border border-orange-500 p-3 text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          اقرأ المقال
        </Link>

      </div>

    </div>

  ))}

</div>
          </TabItem>
          <TabItem title="تقنيات">
         <div className="grid grid-cols-3 gap-3 justify-items-center">

  {posts.posts.filter(post => post.category === "تقنيات").map(post => (

    <div
      key={post.id}
      className="
        group w-full overflow-hidden
        rounded-2xl border border-zinc-800
        bg-[#080b10]
        p-0 m-0
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-500
        hover:shadow-lg hover:shadow-orange-500/10
      "
    >

      {/* Image */}
      <div className="w-full overflow-hidden m-0 p-0">
        <img
          src={post.image}
          alt={post.title}
          className="
            block h-52 w-full object-cover
            m-0 p-0
            transition-transform duration-500
            group-hover:scale-105
            sm:h-56 lg:h-60
          "
        />
      </div>

      {/* Content */}
      <div className="p-3">

        <h5 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
          {post.title}
        </h5>

        <p className="text-sm leading-7 text-gray-400 sm:text-base">
          {post.excerpt}
        </p>

      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3">

        <Avatar img={post.author.avatar} rounded>
          <div className="space-y-1">
            <div className="font-bold text-white group-hover:text-orange-500">
              {post.author.name}
            </div>

            <div className="text-sm text-gray-500">
              {post.author.role}
            </div>
          </div>
        </Avatar>

        <Link
          to={`/blog/${post.id}`}
          className="rounded-xl border border-orange-500 p-3 text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          اقرأ المقال
        </Link>

      </div>

    </div>

  ))}

</div>
          </TabItem>
          <TabItem title="معدات">
          <div className="grid grid-cols-3 gap-3 justify-items-center">

  {posts.posts.filter(post => post.category === "معدات").map(post => (

    <div
      key={post.id}
      className="
        group w-full overflow-hidden
        rounded-2xl border border-zinc-800
        bg-[#080b10]
        p-0 m-0
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-500
        hover:shadow-lg hover:shadow-orange-500/10
      "
    >

      {/* Image */}
      <div className="w-full overflow-hidden m-0 p-0">
        <img
          src={post.image}
          alt={post.title}
          className="
            block h-52 w-full object-cover
            m-0 p-0
            transition-transform duration-500
            group-hover:scale-105
            sm:h-56 lg:h-60
          "
        />
      </div>

      {/* Content */}
      <div className="p-3">

        <h5 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl">
          {post.title}
        </h5>

        <p className="text-sm leading-7 text-gray-400 sm:text-base">
          {post.excerpt}
        </p>

      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3">

        <Avatar img={post.author.avatar} rounded>
          <div className="space-y-1">
            <div className="font-bold text-white group-hover:text-orange-500">
              {post.author.name}
            </div>

            <div className="text-sm text-gray-500">
              {post.author.role}
            </div>
          </div>
        </Avatar>

        <Link
          to={`/blog/${post.id}`}
          className="rounded-xl border border-orange-500 p-3 text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          اقرأ المقال
        </Link>

      </div>

    </div>

  ))}

</div>
          </TabItem>
        </Tabs>
      </div>



    </div>
  </>

}

