import "./globals.css";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import WeddingInvitation from "@/components/WeddingInvitation";
import CeremonySchedule from "@/components/CeremonySchedule";
import ThemeColor from "@/components/ThemeColor";
import RSVP from "@/components/RSVP";
import WeddingGift from "@/components/WeddingGift";
import GalleryPage from "@/components/GalleryPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <IntroSection />
      <WeddingInvitation />
      <CeremonySchedule />
      <ThemeColor />
      <RSVP />
      <WeddingGift />
      <GalleryPage />
      <Footer />
    </main>
  );
}
