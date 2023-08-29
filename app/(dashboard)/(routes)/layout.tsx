import React from "react";

import DashboardNavbar from "@/components/Dashboard-Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="w-full h-full flex">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
          <Sidebar />
        </div>
        <main className="md:pl-72 w-full">
          <div className="w-full flex justify-end">
            <DashboardNavbar />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
