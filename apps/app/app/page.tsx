import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { GettingStartedSection } from "@/components/getting-started-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechStackSection />
        <GettingStartedSection />
      </main>
      <Footer />
    </div>
  );
}
