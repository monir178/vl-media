import Banner from "@/components/Banner";
import FAQSection from "@/components/FAQSection";
import FloatingPhones from "@/components/FloatingPhones";
import HowItWorksSection from "@/components/HowItWorks";
import InfoSection from "@/components/InfoSection";
import LongTime from "@/components/LongTime";
import { PersonalBrand } from "@/components/PersonalBrand";
import TestimonialCards from "@/components/TertimonialCards";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <FloatingPhones />
      <LongTime />
      <Testimonial />
      <TestimonialCards />
      <InfoSection />
      <PersonalBrand />
      <FAQSection />
      <HowItWorksSection />
    </div>
  );
}
