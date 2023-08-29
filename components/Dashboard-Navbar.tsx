import { UserButton } from "@clerk/nextjs";

const DashboardNavbar = async () => {
  return (
    <div className="flex items-center py-4 px-7">
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
