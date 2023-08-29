"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { ArrowRight } from "lucide-react";

import {
  LinkIcon,
  BookmarkPlusIcon,
  SendIcon,
  ScrollTextIcon,
} from "lucide-react";

const tools = [
  {
    label: "Bookmark",
    icon: BookmarkPlusIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/bookmark",
  },
  {
    label: "URL Shortener",
    icon: LinkIcon,
    href: "/url-shortener",
    color: "text-pink-700",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Get Whatsapp Link",
    icon: SendIcon,
    href: "/whatsapp-link",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "All Bookmarks",
    icon: ScrollTextIcon,
    href: "/all-bookmarks",
    color: "text-emerald-500",
    bgColor: "bg-emerald-700/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of <span className="text-baseHeading">Leaf</span>
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Manage your <span className="text-baseColor">links</span> and{" "}
          <span className="text-baseColor">shorten</span> them with ease
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
