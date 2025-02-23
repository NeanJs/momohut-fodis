import Newsletter from "@/components/Newsletter";
import Quality from "@/components/Quality";
import SpecialsMenu from "@/components/SpecialMenu";
import Banner from "@/components/global/Banner";

export default function MenuPage() {
  return (
    <>
      <Banner
        title="Our Menu"
        subtitle="Explore the delights of Indo-Nepalese Cuisine at Momohut"
        backgroundImage="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <SpecialsMenu />
      <Quality />
      <Newsletter />
    </>
  );
}
