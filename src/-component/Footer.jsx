import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaXTwitter
} from 'react-icons/fa6';

import {
  HiOutlineArrowLeft,
  HiHeart
} from 'react-icons/hi2';

export default function Footer() {

  const exploreLinks = [
    { name: 'الرئيسية', path: '/home' },
    { name: 'المدونة', path: '/blog' },
    { name: 'من نحن', path: '/about' }
  ];

  const categoryLinks = [
    { name: 'إضاءة', path: '/blog?category=إضاءة' },
    { name: 'بورتريه', path: '/blog?category=بورتريه' },
    { name: 'مناظر طبيعية', path: '/blog?category=مناظر طبيعية' },
    { name: 'تقنيات', path: '/blog?category=تقنيات' }
  ];

  const socialLinks = [
    { icon: FaYoutube, link: '#' },
    { icon: FaLinkedin, link: '#' },
    { icon: FaGithub, link: '#' },
    { icon: FaXTwitter, link: '#' }
  ];

  return (
    <footer dir="rtl" className="bg-[#0b0b0b] text-gray-400 border-t border-zinc-800 ">

      {/* Main Footer */}
      <div className="w-[90%] max-w-[1520px] mx-auto py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4 mb-7">

              <div className="bg-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                ع
              </div>

              <h2 className="text-white text-2xl font-bold">
                عدسة
              </h2>

            </div>

            <p className="leading-8 text-gray-400 mb-8">
              مدونة متخصصة في فن التصوير الفوتوغرافي.
              نشارك معكم أسرار المحترفين ونصائح عملية
              لتطوير مهاراتكم.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">

              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center
                    rounded-xl bg-[#171717] border border-zinc-800
                    text-gray-500 transition-all duration-300
                    hover:text-orange-500 hover:border-orange-500
                    hover:-translate-y-1"
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}

            </div>

          </div>

          {/* Explore */}
          <div>

            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-3">
              استكشف
              <span className="w-10 h-[2px] bg-orange-500"></span>
            </h3>

            <ul className="space-y-5">

              {exploreLinks.map((item, index) => (

                <li key={index}>

                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 w-fit
                    transition-colors duration-300
                    hover:text-orange-500"
                  >

                    <span>{item.name}</span>

                    <HiOutlineArrowLeft
                      className="text-orange-500 opacity-0
                      translate-x-2 transition-all duration-300
                      group-hover:opacity-100
                      group-hover:translate-x-0"
                    />

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-3">
              التصنيفات
              <span className="w-10 h-[2px] bg-orange-500"></span>
            </h3>

            <ul className="space-y-5">

              {categoryLinks.map((item, index) => (

                <li key={index}>

                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 w-fit
                    transition-colors duration-300
                    hover:text-orange-500"
                  >

                    <span>{item.name}</span>

                    <HiOutlineArrowLeft
                      className="text-orange-500 opacity-0
                      translate-x-2 transition-all duration-300
                      group-hover:opacity-100
                      group-hover:translate-x-0"
                    />

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-3">
              ابق على اطلاع
              <span className="w-10 h-[2px] bg-orange-500"></span>
            </h3>

            <p className="leading-7 mb-6">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="space-y-4">

              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-[#171717] border border-zinc-800
                rounded-2xl px-5 py-4 text-white
                placeholder:text-gray-500 outline-none
                focus:border-orange-500 transition-colors duration-300"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-l from-orange-500 to-amber-600
                text-white font-bold py-4 rounded-full
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
                hover:shadow-orange-500/20"
              >
                اشتراك
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800">

        <div className="w-[90%] max-w-[1520px] mx-auto py-7
        flex flex-col md:flex-row items-center
        justify-between gap-5 text-sm">

          <p className="flex items-center gap-2 text-center">
            © 2026 عدسة. صنع بكل
            <HiHeart className="text-orange-500 text-xl" />
            جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-8">

            <Link
              to="/privacy"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              سياسة الخصوصية
            </Link>

            <Link
              to="/terms"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              شروط الخدمة
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
