import Heading from "@/components/Heading";
import { BookmarkPlusIcon } from "lucide-react";
import React from "react";

const BookmarkPage = () => {
  return (
    <div className="w-full">
      <Heading
        title="Bookmark your favorite links"
        description="Save your favorite links and access them from anywhere."
        icon={BookmarkPlusIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default BookmarkPage;
