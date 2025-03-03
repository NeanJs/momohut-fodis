// app/page.tsx (Home Page)

import About from "@/components/About";
import Blog from "@/components/Blog";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import SpecialsMenu from "@/components/PopularItems";
import Quality from "@/components/Quality";
import Navbar from "@/components/ui/Navbar";
import { BodyWrapper, ContentWrapper } from "@/components/ui/Wrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularItems from "@/components/PopularItems";
import SpecialDishes from "@/components/Home/BestSeller";
import BestSellers from "@/components/Home/SpecialDishes";
import MenuSection from "@/components/Home/Menu";
import DiscountBanner from "@/components/Home/SpecialPromotion";
import ChefTeam from "@/components/Home/ChefTeam";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Home/Gallery";
import Team from "@/components/Team";

export default function HomePage() {
  return (
    <div>
      {/* <BodyWrapper className="h-full grid grid-cols-1 "> */}
      {/* <Hero />
      <SpecialsMenu />
      <Quality />
      <Features />
      <About />
      <Newsletter />
      <Blog /> */}
      <AlternateHome />
      {/* </BodyWrapper> */}
    </div>
  );
}

const AlternateHome = () => {
  return (
    <>
      <Hero />
      <PopularItems />
      <Features />
      <About />
      <SpecialDishes />
      <DiscountBanner />
      <MenuSection />
      <Quality />
      <Testimonials />
      <Blog />
      <Gallery />
    </>
  );
};
