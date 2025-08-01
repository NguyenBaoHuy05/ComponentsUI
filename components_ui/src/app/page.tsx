"use client";
import { Github, Star } from "lucide-react";
import React, { useEffect } from "react";
import ProfileCard from "@/components/ProfileCard";
import ProfileStatsCard from "@/components/ProfileStatsCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import ProfileBadgeCard from "@/components/ProfileBadgeCard";
import CompactProfileCard from "@/components/CompactProfileCard";
import ViewCode from "@/Other/ViewCode";
import Components from "@/components/Components";
import ProfileCoverCard from "@/components/ProfileCoverCard";
import ProfileSkillsCard from "@/components/ProfileSkillsCard";
import ProfileRatingCard from "@/components/ProfileRatingCard";
import ProfileContactCard from "@/components/ProfileContactCard";

const col1Components = [
  { name: "ProfileCard", component: ProfileCard },
  { name: "ProfileCoverCard", component: ProfileCoverCard },
];
const col2Components = [
  { name: "ProfileStatsCard", component: ProfileStatsCard },
  { name: "TeamMemberCard", component: TeamMemberCard },
];
const col3Components = [
  { name: "ProfileBadgeCard", component: ProfileBadgeCard },
  { name: "ProfileRatingCard", component: ProfileRatingCard },
];
const col4Components = [
  { name: "CompactProfileCard", component: CompactProfileCard },
  { name: "ProfileSkillsCard", component: ProfileSkillsCard },
  { name: "ProfileContactCard", component: ProfileContactCard },
];

export default function Home() {
  const [viewCode, setViewCode] = React.useState<string | null>(null);
  const handleClose = () => {
    setViewCode(null);
  };
  const handleViewCode = (componentName: string) => {
    setViewCode(componentName);
  };
  const [starGithub, setStarGithub] = React.useState(0);
  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch(
          "https://api.github.com/repos/NguyenBaoHuy05/ComponentsUI"
        );
        const data = await res.json();
        setStarGithub(data.stargazers_count);
      }
      fetchData();
    } catch (error) {
      console.error("Error fetching GitHub stars:", error);
    }
  }, []);
  console.log("Star count:", starGithub);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
      <header className="fixed text-3xl font-bold h-[80px] w-full bg-black opacity-90 text-white flex items-center px-4 z-10">
        <span>ComponentsUI</span>
        <div className="ml-auto flex">
          <Github className="w-12 h-12" />
          <div className="hidden md:flex relative items-center ml-2 gap-2 rounded-lg overflow-hidden">
            <div className="absolute w-[500px] h-[500px] -z-10 rounded-lg bg-gradient-to-l from-red-500 to-yellow-500  animate-spin"></div>
            <div className=" flex items-center translate-x-[3px] w-[90%] h-[90%] rounded-lg  bg-black z-20">
              <span className="text-white mx-2 text-3xl  ">{starGithub}</span>
              <Star className="w-10 h-10 text-yellow-500 mr-2" />
            </div>
          </div>
        </div>
      </header>
      <div className="mt-[80px] font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pb-10 py-3 gap-10 h-fit px-10">
        <div className=" flex flex-col h-fit">
          {col1Components.map((com, index) => (
            <Components
              key={index}
              onViewCode={() => handleViewCode(com.name)}
              type={com.name}
            >
              <com.component />
            </Components>
          ))}
        </div>

        <div className="flex flex-col h-fit">
          {col2Components.map((com, index) => (
            <Components
              key={index}
              onViewCode={() => handleViewCode(com.name)}
              type={com.name}
            >
              <com.component />
            </Components>
          ))}
        </div>

        <div className="flex flex-col h-fit">
          {col3Components.map((com, index) => (
            <Components
              key={index}
              onViewCode={() => handleViewCode(com.name)}
              type={com.name}
            >
              <com.component />
            </Components>
          ))}
        </div>

        <div className="flex flex-col h-fit">
          {col4Components.map((com, index) => (
            <Components
              key={index}
              onViewCode={() => handleViewCode(com.name)}
              type={com.name}
            >
              <com.component />
            </Components>
          ))}
        </div>
      </div>
      {viewCode && <ViewCode componentName={viewCode} onClose={handleClose} />}
    </main>
  );
}
