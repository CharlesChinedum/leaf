import {
  LinkIcon,
  LayoutDashboard,
  BookmarkPlusIcon,
  SendIcon,
  ScrollTextIcon,
  Settings,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "BookMark",
    icon: BookmarkPlusIcon,
    href: "/bookmark",
    color: "text-violet-500",
  },
  {
    label: "URL Shortener",
    icon: LinkIcon,
    href: "/url-shortener",
    color: "text-pink-700",
  },
  {
    label: "Get Whatsapp Link",
    icon: SendIcon,
    href: "/whatsapp-link",
    color: "text-orange-700",
  },
  {
    label: "All Bookmarks",
    icon: ScrollTextIcon,
    href: "/all-bookmarks",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const tools = [
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
