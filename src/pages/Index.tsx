import CookieBanner from "@/components/CookieBanner";
import ABTestHeader from "@/components/ABTestHeader";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import MeetTheTeam from "@/components/MeetTheTeam";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <ABTestHeader />
      <AnnouncementBar />
      <HeroSection />
      <MeetTheTeam />
    </div>
  );
};

export default Index;
