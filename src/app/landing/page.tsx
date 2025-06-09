import {
  Navbar,
  HeroSection,
  FeatureCards,
  HowItWorks,
  PerfectFor,
  Testimonial,
  Faq,
  Footer,
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
      <Faq />
      <Footer />
    </section>
  );
};
export default LandingPage;
