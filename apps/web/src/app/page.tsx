import { FeaturesSection } from '@/components/features-section';
import { GettingStartedSection } from '@/components/getting-started-section';
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
