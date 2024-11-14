import Banner from "@/components/Banner";
import FAQSection from "@/components/FAQSection";
import FloatingPhones from "@/components/FloatingPhones";
import InfoSection from "@/components/InfoSection";
import LongTime from "@/components/LongTime";
import TestimonialCards from "@/components/TertimonialCards";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="space-y-12 pb-20">
      <Banner />
      <FloatingPhones />
      <LongTime />
      <Testimonial />
      <TestimonialCards />
      <InfoSection />
      <FAQSection />
    </div>
  );
}
