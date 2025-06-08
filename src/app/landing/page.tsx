import {
  Navbar,
  HeroSection,
  FeatureCards,
  HowItWorks,
  PerfectFor,
  Testimonial,
} from "@/components/layouts";

const LandingPage = () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
      <PerfectFor />
      <Testimonial />
    </section>
  );
};
export default LandingPage;
