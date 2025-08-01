"use client";

import ProfileCard from "@/components/ProfileCard";
import ProfileStatsCard from "@/components/ProfileStatsCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import ProfileBadgeCard from "@/components/ProfileBadgeCard";
import CompactProfileCard from "@/components/CompactProfileCard";
import ViewCode from "@/Other/ViewCode";
import Components from "@/components/Components";
import React from "react";

export default function Home() {
  const [viewCode, setViewCode] = React.useState<string | null>(null);
  const handleClose = () => {
    setViewCode(null);
  };
  const handleViewCode = (componentName: string) => {
    setViewCode(componentName);
  };
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
      <div className="sticky text-3xl font-bold h-[80px] w-full bg-black opacity-90 text-white flex items-center ml-10 z-10">
        ComponentsUI
      </div>
      <div className="font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pb-10 py-3 gap-10 h-fit px-10">
        <div className=" flex flex-col h-fit">
          <Components
            onViewCode={() => handleViewCode("ProfileCard")}
            type="card"
          >
            <ProfileCard />
          </Components>
          <Components
            onViewCode={() => handleViewCode("CompactProfileCard")}
            type="card"
          >
            <CompactProfileCard />
          </Components>
        </div>

        <div className="flex flex-col h-fit">
          <Components
            onViewCode={() => handleViewCode("ProfileStatsCard")}
            type="card"
          >
            <ProfileStatsCard />
          </Components>
        </div>

        <div className="flex flex-col h-fit">
          <Components
            onViewCode={() => handleViewCode("TeamMemberCard")}
            type="card"
          >
            <TeamMemberCard />
          </Components>
          <Components
            onViewCode={() => handleViewCode("TeamMemberCard")}
            type="card"
          >
            <TeamMemberCard />
          </Components>
        </div>

        <div className="flex flex-col h-fit">
          <Components
            onViewCode={() => handleViewCode("ProfileBadgeCard")}
            type="card"
          >
            <ProfileBadgeCard />
          </Components>
        </div>
      </div>
      {viewCode && <ViewCode componentName={viewCode} onClose={handleClose} />}
    </div>
  );
}
