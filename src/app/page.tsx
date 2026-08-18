import { HomeHero } from "@/components/sections/HomeHero";
import { HomeSelectedWorks } from "@/components/sections/HomeFeatured";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HomeQuote } from "@/components/sections/HomeQuote";
import { HomeHowIWork } from "@/components/sections/HomeHowIWork";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { HomeStats } from "@/components/sections/HomeStats";

export default function HomePage() {
  return (
    <div className="bg-background">
      <HomeHero />
       <HomeQuote />
      <HomeSelectedWorks />
      <HomeStats />
      <HomeHowIWork />
      <HomeProcess />
      <HomeCTA />
    </div>
  );
}
