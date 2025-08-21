"use client";
import GetQuoteContents from "@/components/GetQuoteContents";
import MainPageWrapper from "@/layoutWrapper/MainPageWrapper";

export default function Home() {
  return (
    <MainPageWrapper>
      <GetQuoteContents />
    </MainPageWrapper>
  );
}
