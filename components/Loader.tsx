import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/chain.png" />
      </div>
    </div>
  );
};

export default Loader;
