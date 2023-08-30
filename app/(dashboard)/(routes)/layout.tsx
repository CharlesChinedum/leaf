"use client";

import React from "react";

import { Toaster } from "@/components/ui/toaster";

import DashboardNavbar from "@/components/Dashboard-Navbar";
import Sidebar from "@/components/Sidebar";

import { QueryClient, QueryClientProvider } from "react-query";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <div className="h-full">
      <div className="w-full h-full flex">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
          <Sidebar />
        </div>
        <QueryClientProvider client={queryClient}>
          <main className="md:pl-72 w-full">
            <div className="w-full flex justify-end">
              <DashboardNavbar />
            </div>
            {children}
            <Toaster />
          </main>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;
