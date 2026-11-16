import React from 'react'
import { Button } from "flowbite-react";

export default function Hero() {
  return <>
<section className="relative isolate min-h-screen overflow-hidden bg-[#080b10] text-white">

  {/* Grid Background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10
    bg-[linear-gradient(to_right,rgba(156,163,175,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.15)_1px,transparent_1px)]
    bg/-[size:60px_60px]"
  />



  {/* Hero Content */}

<div className="relative isolate mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">

  {/* Grid Background */}
  <div className="hero-grid pointer-events-none absolute inset-0 z-0"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center">

    <span className="mb-8 rounded-full border border-orange-400/30 bg-orange-950 px-4 py-2 text-sm text-mist-200">
      مرحبًا بك في عدسة
    </span>

    <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
      اكتشف{" "}
      <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
        فن
      </span>
      <br />
      <span className="text-mist-100">
        التصوير الفوتوغرافي
      </span>
    </h1>

    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
      انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
    </p>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

      <button className="rounded-full bg-gradient-to-bl from-orange-500 to-amber-600 px-8 py-4 text-xl font-semibold text-mist-100 transition duration-200 ease-in-out hover:-translate-y-1">
        استكشف المقالات ←
      </button>

      <button className="rounded-full border border-white/20 px-8 py-4 text-xl font-semibold text-mist-100 transition hover:border-amber-600 hover:bg-white/10 hover:text-amber-600">
        اعرف المزيد ⓘ
      </button>

    </div>

  </div>
</div>

</section>
  </>
}
