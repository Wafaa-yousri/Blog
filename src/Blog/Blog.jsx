import React from 'react'
import { Button } from "flowbite-react";
import Essay from '../-component/Essay';
export default function blog() {
  return <>

  
<section className="relative isolate bg-[#080b10] text-white">

  {/* Grid Background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10
    bg-[linear-gradient(to_right,rgba(156,163,175,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.15)_1px,transparent_1px)]
    bg-[size:60px_60px]"
  />

  {/* Hero Content */}
  <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

    <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.5] tracking-normal sm:text-5xl md:text-7xl">
      استكشف{" "}
      <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
        مقالاتنا
      </span>
    </h1>

    <p className="mt-6 max-w-2xl text-base font-medium leading-[2] text-gray-400 sm:text-lg md:text-xl">
      اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
    </p>

  </div>
</section>

<section className='bg-[#080b10]'>


    <Essay />
</section>


  </>


}
