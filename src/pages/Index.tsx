import CookieBanner from "@/components/CookieBanner";
import HeaderNavB from "@/components/HeaderNavB";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import SituationsSection from "@/components/SituationsSection";
import InheritanceStatsSection from "@/components/InheritanceStatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import NoLegalFeesSection from "@/components/NoLegalFeesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <HeaderNavB />
      <AnnouncementBar />
      <HeroSection />
      <MeetTheTeam />
      <SituationsSection />
      <InheritanceStatsSection />
      <HowItWorksSection />
      <NoLegalFeesSection />
      <Footer />
    </div>
  );
};

export default Index;
