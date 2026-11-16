
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

import { Link } from "react-router-dom";
export default function Nav() {
  return <>

    <Navbar fluid  dir="rtl" className="!bg-zinc-900">
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">عدسة عالم التصوير</span>
        
      </NavbarBrand>
      <div className="flex md:order-2 items-center gap-2 rounded-full p-1  bg-linear-to-bl from-orange-500 to-amber-600">
        <Button className=" text-white text-xl rounded-full  bg-linear-to-bl from-orange-500 to-amber-600  ">
          ابدأ القراءة
        </Button>

        <NavbarToggle />
      </div>
  <div className="border-2 border-zinc-800 rounded-full">
  <NavbarCollapse className="m-auto rounded-full p-2 !border-0">
    <Link to="/home" className="text-xl text-zinc-400 hover:bg-orange-400 p-2 rounded-full hover:text-white hover:bg-linear-to-bl from-orange-500 to-amber-600">
      الرئيسية
    </Link>

    <Link to="/blog" className="text-xl text-zinc-400 hover:bg-orange-400 p-2 rounded-full hover:text-white  hover:bg-linear-to-bl from-orange-500 to-amber-600">
      المدونة
    </Link>

    <Link to="/about" className="text-xl text-zinc-400 hover:bg-orange-400 p-2 rounded-full hover:text-white  hover:bg-linear-to-bl from-orange-500 to-amber-600">
      من نحن
    </Link>
  </NavbarCollapse>
</div>
    </Navbar>


  </>
}
