import {
  FeatureCards,
  HeroSection,
  HowItWorks,
  Navbar,
} from "@/components/layouts";

const LandingPage = () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
    </section>
  );
};
export default LandingPage;
