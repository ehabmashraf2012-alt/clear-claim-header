import { useState } from "react";
import CookieBanner from "@/components/CookieBanner";
import ABTestHeader from "@/components/ABTestHeader";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import MeetTheTeam from "@/components/MeetTheTeam";

const Index = () => {
  const variant = (localStorage.getItem("header_variant") as "A" | "B") || "A";

  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <ABTestHeader />
      <AnnouncementBar />
      <HeroSection variant={variant} />
      <MeetTheTeam />
    </div>
  );
};

export default Index;
