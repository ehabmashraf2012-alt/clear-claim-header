import CookieBanner from "@/components/CookieBanner";
import HeaderNav from "@/components/HeaderNav";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <HeaderNav />
      <AnnouncementBar />
      <HeroSection />
    </div>
  );
};

export default Index;
