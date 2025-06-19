import {
  Navbar,
  HeroSection,
  FeatureCards,
  HowItWorks,
  PerfectFor,
  Testimonial,
  Faq,
  Footer,
} from "@/components/layouts/index";

const Homepage = () => {
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
export default Homepage;
