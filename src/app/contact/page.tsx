import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import Reservation from "@/components/Reservation";
import Banner from "@/components/global/Banner";
import { BodyWrapper, ContentWrapper } from "@/components/ui/Wrapper";

export default function ContactPage() {
  return (
    <>
      <Banner
        title="Contact Us"
        subtitle="Reach out to us"
        backgroundImage="https://cdn.vectorstock.com/i/500p/62/99/contact-us-banner-vector-21116299.jpg"
      />
      <div className="bg-gray-100">
        <Reservation />
        <ContactForm />
      </div>
      <Newsletter />
    </>
  );
}
