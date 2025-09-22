import "./globals.css";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import WeddingInvitation from "@/components/WeddingInvitation";
import CeremonySchedule from "@/components/CeremonySchedule";
import ThemeColor from "@/components/ThemeColor";
import RSVP from "@/components/RSVP";
import WeddingGift from "@/components/WeddingGift";
import GalleryPage from "@/components/GalleryPage";

// app/page.js
export const metadata = {
  title: 'Toey and Kaew the new chapter.',
  description: 'You are invited to our wedding ceremony and to the celebration of our marriage. We hope to see you on our special day.',
  openGraph: {
    title: 'Toey and Kaew the new chapter.',
    description: 'You are invited to our wedding ceremony and to the celebration of our marriage. We hope to see you on our special day.',
    url: 'https://toeikun.github.io/ToeyKaew-WeddingCard/',
    siteName: 'The Wedding of Toey and Kaew',
    images: [
      {
        url: 'https://toeikun.github.io/ToeyKaew-WeddingCard/images/IMTL243.webp', // ต้องเป็น URL ที่เข้าถึงได้จริง
        width: 1200,
        height: 630,
        alt: 'The Wedding of Toey and Kaew',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
};

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
    </main>
  );
}
