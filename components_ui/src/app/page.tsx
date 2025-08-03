"use client";
import Image from "next/image";
import StarGithub from "@/Other/StarGithub";
import React from "react";
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
import CircularProgressStats from "@/components/CircularProgressStats";
import KPIDashboardCard from "@/components/KPIDashboardCard";
import TimeBasedStatsCard from "@/components/TimeBasedStatsCard";

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
  { name: "KPIDashboardCard", component: KPIDashboardCard },
];
const col3Components = [
  { name: "ProfileBadgeCard", component: ProfileBadgeCard },
  { name: "ProfileRatingCard", component: ProfileRatingCard },
  { name: "ProductCard", component: ProductCard },
  { name: "ProductQuickActionsCard", component: ProductQuickActionsCard },
  { name: "ProductBundleCard", component: ProductBundleCard },
  { name: "ProductSubscriptionCard", component: ProductSubscriptionCard },
  { name: "RevenueStatsCard", component: RevenueStatsCard },
  { name: "CircularProgressStats", component: CircularProgressStats },
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
  { name: "TimeBasedStatsCard", component: TimeBasedStatsCard },
];

export default function Home() {
  const [viewCode, setViewCode] = React.useState<string | null>(null);
  const handleClose = () => {
    setViewCode(null);
  };
  const handleViewCode = (componentName: string) => {
    setViewCode(componentName);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden ">
        <header className="fixed text-3xl font-bold h-[80px] w-full bg-black opacity-90 text-white flex items-center px-4 z-10">
          <span>ComponentsUI</span>
          <StarGithub />
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
