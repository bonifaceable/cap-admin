"use client";
import MarketDataContents from "@/components/MarketDataContents";
import PricingContents from "@/components/PricingContents";
import MainPageWrapper from "@/layoutWrapper/MainPageWrapper";

export default function Home() {
  return (
    <MainPageWrapper>
      <PricingContents />
    </MainPageWrapper>
  );
}
