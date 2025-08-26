import { FeaturesSection } from '@/components/features-section';
import { Footer } from '@/components/footer';
import { GettingStartedSection } from '@/components/getting-started-section';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TechStackSection } from '@/components/tech-stack-section';

export default function HomePage() {
  return (
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechStackSection />
        <GettingStartedSection />
      </main>
  );
}
