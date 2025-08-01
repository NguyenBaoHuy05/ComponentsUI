"use client";

import ProfileCard from "@/components/ProfileCard";
import ProfileStatsCard from "@/components/ProfileStatsCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import ProfileBadgeCard from "@/components/ProfileBadgeCard";
import CompactProfileCard from "@/components/CompactProfileCard";
import Components from "@/components/Components";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
      <div className="sticky text-3xl font-bold h-[80px] w-full bg-black opacity-90 text-white flex items-center ml-10 z-10">
        ComponentsUI
      </div>
      <div className="font-sans grid grid-cols-4 w-full pb-20 py-3 gap-10 sm:px-20 h-screen">
        <div className=" flex flex-col">
          <Components>
            <ProfileCard />
          </Components>
          <Components>
            <CompactProfileCard />
          </Components>
        </div>

        <div className="flex flex-col">
          <Components>
            <ProfileStatsCard />
          </Components>
        </div>

        <div className="flex flex-col">
          <Components>
            <TeamMemberCard />
          </Components>
        </div>

        <div className="flex flex-col">
          <Components>
            <ProfileBadgeCard />
          </Components>
        </div>
      </div>
    </div>
  );
}
