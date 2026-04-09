import CookieBanner from "@/components/CookieBanner";
import HeaderNavB from "@/components/HeaderNavB";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import SituationsSection from "@/components/SituationsSection";
import InheritanceStatsSection from "@/components/InheritanceStatsSection";
import ReviewsPlaceholder from "@/components/ReviewsPlaceholder";
import HowItWorksSection from "@/components/HowItWorksSection";
import NoLegalFeesSection from "@/components/NoLegalFeesSection";
import FAQPlaceholder from "@/components/FAQPlaceholder";
import ENPSSection from "@/components/ENPSSection";
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
      <ReviewsPlaceholder />
      <InheritanceStatsSection />
      <HowItWorksSection />
      <ENPSSection />
      <NoLegalFeesSection />
      <FAQPlaceholder />
      <Footer />
    </div>
  );
};

export default Index;
