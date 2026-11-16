import React from 'react'
import { Card } from "flowbite-react";
import { Dropdown, DropdownItem } from "flowbite-react";
import posts from '../Data/posts.json'
import { Button} from "flowbite-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
export default function Author() {


return (
  <div className='conntainer'>
    <div className='m-auto  text-center p-5 m-5'>
       <Button color="dark" pill className='text-orange-600 m-auto  text-center border-2 border-orange-600 !bg-orange-950 text-xl mb-6'>
        فريقنا
      </Button>
      <h1 className="text-mist-300 text-[50px] font-bold  text-center">
      تعرف على كتابنا
      </h1>

      <span className="text-gray-400 text-lg leading-relaxed mr-6 ">
    فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
      </span>
    </div> 

  <div className="grid grid-cols-3 md:grid-cols-3 gap-3 justify-items-center ">
    {posts.posts.map((post) => (
      <div key={post.id}>
        <Card className="w-full  !bg-zinc-900 !px-5 w-75 m-4 group border border-transparent hover:border-orange-500 transition-colors duration-300 ">
          <div className="flex flex-col items-center p-5  ">
            <img
              alt="Author profile"
              src={post.author.avatar}
              className="mb-3 h-24 w-24 rounded-full object-cover shadow-lg "
            />

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-orange-500">
              {post.author.name}
            </h5>

            <span className="text-sm text-gray-500 dark:text-orange-500">
              {post.author.role}
            </span>

            <div className="mt-4 flex gap-3 lg:mt-6 ">
              <Button className="p-3  !bg-zinc-900  border-2 border-gray-700  " >
                <FaLinkedin className="h-4 w-4 text-gray-200" />
              </Button>

              <Button className="p-3  !bg-zinc-900  border-2 border-gray-700  ">
                <FaGithub className="h-4 w-4" />
              </Button>

              <Button className="p-3  !bg-zinc-900  border-2 border-gray-700  ">
                <FaXTwitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    ))}
  </div>
  </div>
);
}
