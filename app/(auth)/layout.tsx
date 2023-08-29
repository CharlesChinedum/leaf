import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="p-5">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
      </div>

      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

export default layout;
