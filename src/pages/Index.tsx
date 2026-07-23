import CookieBanner from "@/components/CookieBanner";
import HeaderNavB from "@/components/HeaderNavB";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import CommonQuestionsSection from "@/components/CommonQuestionsSection";
import InheritanceStatsSection from "@/components/InheritanceStatsSection";
import ReviewsPlaceholder from "@/components/ReviewsPlaceholder";
import HowItWorksSection from "@/components/HowItWorksSection";
import NoLegalFeesSection from "@/components/NoLegalFeesSection";
import FAQPlaceholder from "@/components/FAQPlaceholder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <HeaderNavB />
      <AnnouncementBar />
      <HeroSection />
      <ReviewsPlaceholder />
      <MeetTheTeam />
      <CommonQuestionsSection />
      <InheritanceStatsSection />
      <HowItWorksSection />
      <NoLegalFeesSection />
      <FAQPlaceholder />
      <Footer />
    </div>
  );
};

export default Index;
