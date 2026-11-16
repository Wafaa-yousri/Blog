import React from 'react'
import Author from './Author'
import ValuesSection from './ValuesSection';
import ContactCTA from '../-component/ContactCTA';
import {
  HiBookOpen,
  HiPencil,
  HiNewspaper,
  HiUsers,
} from "react-icons/hi2";

const stats = [
  {
    icon: HiUsers,
    number: "2+ مليون",
    label: "قارئ شهريًا",
  },
  {
    icon: HiNewspaper,
    number: "500+",
    label: "مقالة منشورة",
  },
  {
    icon: HiPencil,
    number: "50+",
    label: "كاتب خبير",
  },
  {
    icon: HiBookOpen,
    number: "15+",
    label: "تصنيف",
  },
];


export default function About() {
  return<>

<section className="relative isolate min-h-screen overflow-hidden bg-[#080b10] text-white">

  {/* Grid Background */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none absolute inset-0 z-[-1]
      bg-[linear-gradient(to_right,rgba(156,163,175,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.12)_1px,transparent_1px)]
      bg-[length:60px_60px]
    "
    style={{
      maskImage: "linear-gradient(to bottom, black, transparent 95%)",
      WebkitMaskImage: "linear-gradient(to bottom, black, transparent 95%)"
    }}
  />

  {/* Orange Glow */}
  <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">

    {/* Title */}
    <h1 className="max-w-4xl text-4xl font-extrabold leading-relaxed sm:text-5xl md:text-7xl">
      مهمتنا هي{" "}
      <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
        الإلهام والإعلام
      </span>
    </h1>

    {/* Description */}
    <p className="mt-6 max-w-3xl text-base leading-9 text-gray-400 sm:text-lg sm:leading-10">
      مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
    </p>

    {/* Statistics */}
    <div className="mt-12 grid w-full max-w-5xl grid-cols-2 gap-4 px-2 md:grid-cols-4 md:gap-6">

      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="
              group flex min-h-[180px] flex-col
              items-center justify-center
              rounded-3xl border border-zinc-800
              bg-[#151515]/90 p-5
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-2
              hover:border-orange-500
              hover:shadow-lg hover:shadow-orange-500/10
            "
          >

            <Icon className="mb-4 h-9 w-9 text-orange-500 transition-transform duration-300 group-hover:scale-110" />

            <h3 className="mb-2 text-3xl font-extrabold text-orange-500">
              {stat.number}
            </h3>

            <p className="text-center text-sm text-zinc-400 sm:text-base">
              {stat.label}
            </p>

          </div>
        );
      })}

    </div>

  </div>
</section>


    <div className='bg-[#080b10] '>
          <ValuesSection/>
          <Author/>
          <ContactCTA/>

        
          
    </div>

  </>
}
