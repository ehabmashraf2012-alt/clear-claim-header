import CookieBanner from "@/components/CookieBanner";
import ABTestHeader from "@/components/ABTestHeader";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <ABTestHeader />
      <AnnouncementBar />
      <HeroSection />
    </div>
  );
};

export default Index;
