import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full h-full bg-gray-300 px-5 py-5">
        <div className="h-full w-full bg-gray-100 rounded-[5rem] p-[5rem] shadow-lg shadow-gray-300">
          <div className="w-full h-full border flex items-center justify-center">
            <h2 className="text-base text-[80px] font-black tracking-tighter leading-[100%] w-[35rem]">
              Your radically easy-to-use url manager
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
