"use client";
import OurTeamContents from "@/components/OurTeamContents";
import OurTeamHero from "@/components/OurTeamHero";
import MainPageWrapper from "@/layoutWrapper/MainPageWrapper";

export default function Home() {
  return (
    <MainPageWrapper>
      <OurTeamHero />
      <OurTeamContents />
    </MainPageWrapper>
  );
}
