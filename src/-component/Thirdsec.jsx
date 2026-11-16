import React from 'react'
import { Card } from "flowbite-react";
import posts from '../Data/posts.json'
import { Button} from "flowbite-react";

import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlinePhoto,
  HiOutlineUser,
  HiOutlineSun,
  HiOutlineCog6Tooth
} from "react-icons/hi2";
const icons = {
  sun: HiOutlineSun,
  user: HiOutlineUser,
  photo: HiOutlinePhoto,
  adjustments: HiOutlineAdjustmentsHorizontal,
  cog: HiOutlineCog6Tooth
};

export default function thirdsec() {
  return <>
    {/* Title & Description */}
    <div className='m-auto  text-center p-5  '>
       <Button color="dark" pill className='text-orange-600 m-auto  text-center border-2 border-orange-600 !bg-orange-950 text-xl mb-6'>
          التصنيفات
            </Button>
      <h1 className="text-mist-300 text-[50px] font-bold  text-center">
        استكشف حسب الموضوع
      </h1>

      <span className="text-gray-400 text-lg leading-relaxed mr-6 ">
        اعثر على محتوى مصمم حسب اهتماماتك
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">

      {posts.categories.map((category) => {

        const Icon = icons[category.icon] || HiOutlinePhoto;

        return <>
          <div className='conntainer'>

            <Card
              key={category.id}
              className=" mb-4 max-w-sm w-75 bg-orange-950 p-2 rounded-2xl !bg-[#151515] hover:bg-linear-to-bl from-orange-500 to-orange-400"
            >

              <div className="bg-orange-900 w-fit p-2 rounded-2xl">
                <Icon className="text-orange-500 text-3xl" />
              </div>

              <h5 className="text-2xl font-bold text-white">
                {category.name}
              </h5>

              <p className="text-gray-400">
                {category.count} مقالات
              </p>

            </Card>

          </div>
        </>
      })}

    </div>

  </>
}
