import { PhantomNavbar } from "@/components/phantom-navbar";
import { HeroSection } from "@/components/hero-section";
import { ConfidantCards } from "@/components/confidant-cards";
import { CallingCardSection } from "@/components/calling-card-section";
import { SourcesFooter } from "@/components/sources-footer";

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <PhantomNavbar />
      <main className="flex-1">
        <HeroSection />
        <ConfidantCards />
        <CallingCardSection />
      </main>
      <SourcesFooter />
    </div>
  );
}
