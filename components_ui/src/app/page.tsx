"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Star } from "lucide-react";
import React, { useEffect } from "react";
import { Badge } from "@/components/Badge";
import ProfileCard from "@/components/ProfileCard";
import ProfileStatsCard from "@/components/ProfileStatsCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import ProfileBadgeCard from "@/components/ProfileBadgeCard";
import CompactProfileCard from "@/components/CompactProfileCard";
import ViewCode from "@/Other/ViewCode";
import Components from "@/Other/Components";
import ProfileCoverCard from "@/components/ProfileCoverCard";
import ProfileSkillsCard from "@/components/ProfileSkillsCard";
import ProfileRatingCard from "@/components/ProfileRatingCard";
import ProfileContactCard from "@/components/ProfileContactCard";
import ProfileProgressCard from "@/components/ProfileProgressCard";
import ProductCard from "@/components/ProductCard";
import ProductRatingCard from "@/components/ProductRatingCard";
import ProductBadgeCard from "@/components/ProductBadgeCard";
import ProductVariantsCard from "@/components/ProductVariantsCard";
import ProductQuickActionsCard from "@/components/ProductQuickActionsCard";
import ProductStockCard from "@/components/ProductStockCard";
import ProductShippingCard from "@/components/ProductShippingCard";
import ProductBundleCard from "@/components/ProductBundleCard";
import ProductSpecsCard from "@/components/ProductSpecsCard";
import ProductQuantityCard from "@/components/ProductQuantityCard";
import ProductTimerCard from "@/components/ProductTimerCard";
import ProductReviewsCard from "@/components/ProductReviewsCard";
import ProductSubscriptionCard from "@/components/ProductSubscriptionCard";
import ProductComparisonCard from "@/components/ProductComparisonCard";
import ProductWarrantyCard from "@/components/ProductWarrantyCard";
import StatsCard from "@/components/StatsCard";
import RevenueStatsCard from "@/components/RevenueStatsCard";
import ProgressStatsCard from "@/components/ProgressStatsCard";
import MultiMetricStatsCard from "@/components/MultiMetricStatsCard";
import ComparisonStatsCard from "@/components/ComparisonStatsCard";

const col1Components = [
  { name: "ProfileCard", component: ProfileCard },
  { name: "ProfileCoverCard", component: ProfileCoverCard },
  { name: "ProfileProgressCard", component: ProfileProgressCard },
  { name: "ProductBadgeCard", component: ProductBadgeCard },
  { name: "ProductShippingCard", component: ProductShippingCard },
  { name: "ProductTimerCard", component: ProductTimerCard },
  { name: "ProductWarrantyCard", component: ProductWarrantyCard },
  { name: "ComparisonStatsCard", component: ComparisonStatsCard },
];
const col2Components = [
  { name: "ProfileStatsCard", component: ProfileStatsCard },
  { name: "TeamMemberCard", component: TeamMemberCard },
  { name: "ProductRatingCard", component: ProductRatingCard },
  { name: "ProductStockCard", component: ProductStockCard },
  { name: "ProductQuantityCard", component: ProductQuantityCard },
  { name: "ProductComparisonCard", component: ProductComparisonCard },
  { name: "ProgressStatsCard", component: ProgressStatsCard },
];
const col3Components = [
  { name: "ProfileBadgeCard", component: ProfileBadgeCard },
  { name: "ProfileRatingCard", component: ProfileRatingCard },
  { name: "ProductCard", component: ProductCard },
  { name: "ProductQuickActionsCard", component: ProductQuickActionsCard },
  { name: "ProductBundleCard", component: ProductBundleCard },
  { name: "ProductSubscriptionCard", component: ProductSubscriptionCard },
  { name: "RevenueStatsCard", component: RevenueStatsCard },
];
const col4Components = [
  { name: "CompactProfileCard", component: CompactProfileCard },
  { name: "ProfileSkillsCard", component: ProfileSkillsCard },
  { name: "ProfileContactCard", component: ProfileContactCard },
  { name: "ProductVariantsCard", component: ProductVariantsCard },
  { name: "ProductSpecsCard", component: ProductSpecsCard },
  { name: "ProductReviewsCard", component: ProductReviewsCard },
  { name: "StatsCard", component: StatsCard },
  { name: "MultiMetricStatsCard", component: MultiMetricStatsCard },
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
    <>
      <main className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
        <header className="fixed text-3xl font-bold h-[80px] w-full bg-black opacity-90 text-white flex items-center px-4 z-10">
          <span>ComponentsUI</span>
          <div className="ml-auto flex">
            <Link href="https://github.com/NguyenBaoHuy05/ComponentsUI">
              <Github className="w-12 h-12" />
            </Link>

            <div className="hidden md:flex relative items-center ml-2 gap-2 rounded-lg overflow-hidden">
              <div className="absolute w-[500px] h-[500px] -z-10 rounded-lg bg-gradient-to-l from-red-500 to-yellow-500  animate-spin"></div>
              <div className=" flex items-center translate-x-[3px] w-[90%] h-[90%] rounded-lg  bg-black z-20">
                <span className="text-white mx-2 text-3xl  ">{starGithub}</span>
                <Star className="w-10 h-10 text-yellow-500 mr-2" />
              </div>
            </div>
          </div>
        </header>
        <div
          className="text-center text-4xl font-semibold mt-[100px] bg-gradient-to-r 
        from-pink-500 via-purple-500 to-blue-500  bg-clip-text text-transparent"
        >
          30+ Components
        </div>
        <div className="flex gap-2 mt-2">
          <Badge color="black">Badge</Badge>
          <Badge color="black">Button</Badge>
          <Badge color="black">Card</Badge>
        </div>
        <div className="mt-4 font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pb-10 py-3 gap-10 h-fit px-10">
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
          {viewCode && (
            <ViewCode componentName={viewCode} onClose={handleClose} />
          )}
        </div>
        <footer className="w-full h-16 bg-black text-white flex items-center justify-center">
          <Image src="/favicon.png" alt="Footer Image" width={50} height={50} />
          <span className="ml-2">Made with by Team&#39;s Huy ❤️</span>
        </footer>
      </main>
    </>
  );
}
