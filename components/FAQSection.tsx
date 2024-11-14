import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthWrapper from "./ui/Shared/MaxWidthWrapper";

const FAQSection = () => {
  return (
    <div className="bg-white">
      <MaxWidthWrapper className="flex flex-col md:flex-row items-start justify-between max-w-fit mx-auto  py-12  ">
        {/* Left Side: FAQ Heading */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            FREQUENTLY ASKED <br />{" "}
            <span className="text-blue-500">QUESTIONS</span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-[60ch]">
            If you have any other questions, feel free to reach out to us at{" "}
            <a
              href="mailto:tom@tomnoske.com"
              className="text-orange-500 underline">
              tom@tomnoske.com
            </a>
            . We’re here to help!
          </p>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="flex-1 w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-gray-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

// FAQ items data
const faqItems = [
  {
    question: "How long is the cohort?",
    answer:
      "The cohort lasts for 6 weeks, covering all essential topics in depth.",
  },
  {
    question: "Will the sessions be recorded in case I cannot make them?",
    answer:
      "Yes, all sessions are recorded and will be accessible to you afterward.",
  },
  {
    question: "What dates and times are the live sessions?",
    answer:
      "Live sessions are scheduled on weekdays at 7 PM EST. The exact dates are provided upon registration.",
  },
  {
    question: "Is this for beginners or advanced?",
    answer:
      "This course is designed for all levels, from beginners to advanced learners.",
  },
  {
    question: "How is this cohort setup?",
    answer:
      "The cohort includes live sessions, group discussions, and hands-on projects to ensure practical learning.",
  },
  {
    question: "How long do I have access to the course materials?",
    answer:
      "You will have lifetime access to all course materials, including recordings and resources.",
  },
];

export default FAQSection;
