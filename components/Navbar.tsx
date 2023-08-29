import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-white bg-opacity-85 shadow-sm shadow-gray-100 rounded-[2.5rem]">
      <div className="w-full px-[2rem] py-2">
        <div className="flex">
          <div className="flex items-end">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <span className="text-gray-300">leaf</span>
          </div>

          {/* CTA */}
          <div className="flex gap-3 items-center ml-auto">
            <Button variant="secondary" className="px-7">
              <Link href="/sign-in"> Login </Link>
            </Button>
            <Button className="bg-baseColor hover:bg-transparent hover:outline-[1px] hover:outline hover:outline-baseHeading hover:text-baseColor">
              <Link href="/sign-up"> Get Started </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
