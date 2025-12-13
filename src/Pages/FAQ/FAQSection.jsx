import React, { useState } from "react";

const faqs = [
  {
    question: "What services does SIMEC Technology Limited provide?",
    answer:
      "SIMEC Technology Limited provides complete engineering solutions including power & substation works, HVAC installation, solar energy systems, electrical & utility works, and industrial services across Bangladesh.",
  },
  {
    question: "Do you provide turnkey project solutions?",
    answer:
      "Yes, we provide end-to-end turnkey solutions from design, supply, installation, testing, commissioning, and maintenance for industrial and commercial projects.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work with government organizations, educational institutions, manufacturing industries, commercial buildings, and infrastructure development projects.",
  },
  {
    question: "Do you provide after-sales support?",
    answer:
      "Absolutely. We provide reliable after-sales service, maintenance support, and technical assistance to ensure long-term system performance.",
  },
 {
  question: "How can I contact SIMEC Technology Limited?",
  answer: "You can contact us via our Contact page, email us at info@simecbdltd.com, or call our office at 01551606552 during business hours."
}

];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500">
            Find answers to common questions about our services and work process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-800 hover:bg-slate-50 transition"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`text-2xl font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-primary" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
