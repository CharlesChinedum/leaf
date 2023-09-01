import { ScrollTextIcon } from "lucide-react";

import Heading from "@/components/Heading";

const AllBookmarksPage = () => {
  return (
    <div className="w-full">
      <Heading
        title="All Bookmarks"
        description="All your bookmarks in one place."
        icon={ScrollTextIcon}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
    </div>
  );
};

export default AllBookmarksPage;
