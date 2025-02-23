import About from "@/components/About";

import Newsletter from "@/components/Newsletter";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Banner from "@/components/global/Banner";

export default function AboutPage() {
  return (
    <>
      <Banner
        title="About Us"
        subtitle="Learn more about our story and passion for food."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <About />
      <Team />
      <Testimonials />
      <Newsletter />
      
    </>
  );
}
