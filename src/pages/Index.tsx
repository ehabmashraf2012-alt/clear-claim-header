import { useState, useEffect } from "react";
import CookieBanner from "@/components/CookieBanner";
import ABTestHeader from "@/components/ABTestHeader";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import SituationsSection from "@/components/SituationsSection";
import NoLegalFeesSection from "@/components/NoLegalFeesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [variant, setVariant] = useState<"A" | "B">(
    () => (localStorage.getItem("header_variant") as "A" | "B") || "A"
  );

  useEffect(() => {
    const onStorage = () => {
      setVariant((localStorage.getItem("header_variant") as "A" | "B") || "A");
    };
    window.addEventListener("storage", onStorage);
    const interval = setInterval(onStorage, 300);
    return () => { window.removeEventListener("storage", onStorage); clearInterval(interval); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <ABTestHeader />
      <AnnouncementBar />
      <HeroSection variant={variant} />
      <MeetTheTeam />
      <SituationsSection />
      <NoLegalFeesSection />
      <Footer />
    </div>
  );
};

export default Index;
