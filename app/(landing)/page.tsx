import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full h-full bg-gray-300 px-5 py-5">
        <div className="h-full w-full bg-gray-100 rounded-[5rem] py-[2rem] px-[2rem] shadow-lg shadow-gray-300">
          <Navbar />

          <div className="w-full h-full rounded-xl flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center gap-8">
              {/* Save File Image */}
              <div className="flex w-full justify-start">
                <div className="w-12 h-12 relative animate-pulse">
                  <Image alt="logo" fill src="/save-file.png" />
                </div>
              </div>

              {/* Text */}
              <h2 className="text-baseHeading text-center text-[80px] font-black tracking-tight leading-[100%] w-[35rem]">
                Your radically easy-to-use url manager
              </h2>
              <p className="font-medium text-muted-foreground text-xl text-center">
                Don’t let stellar talent fall through the cracks of a messy
                hiring process. <br /> Organize your links in minutes with Leaf.
              </p>
              {/* CTA */}
              <div className="flex gap-5">
                <Button variant="outline" className="px-14">
                  <Link href="/sign-in"> Login </Link>
                </Button>
                <Button className=" px-10 bg-baseColor hover:bg-transparent hover:outline-[1px] hover:outline hover:outline-baseHeading hover:text-baseColor">
                  <Link href="/sign-up"> Get Started </Link>
                </Button>
              </div>

              {/* Chain Image */}
              <div className="flex w-full justify-end">
                <div className="w-20 h-20 relative animate-bounce">
                  <Image alt="logo" fill src="/chain.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
