"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "How does Samie Work?",
      answer:
        "Samie helps you manage expenses with your roommates, friends, or family members by providing an easy way to track and split shared costs.",
    },
    {
      question: "Is Samie free to use?",
      answer:
        "Yes, Samie offers a free version with basic features. We also have premium plans with additional functionality.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use bank-level encryption to protect all your financial information and personal data.",
    },
    {
      question: "Can I use Samie internationally?",
      answer:
        "Yes, Samie supports multiple currencies and can be used anywhere in the world.",
    },
    {
      question: "How do I invite others to my group?",
      answer:
        "You can invite people via email, phone number, or by sharing a unique group link.",
    },
    {
      question: "How do I invite others to my group?",
      answer:
        "You can invite people via email, phone number, or by sharing a unique group link.",
    },
    {
      question: "How do I invite others to my group?",
      answer:
        "You can invite people via email, phone number, or by sharing a unique group link.",
    },
    {
      question: "How do I invite others to my group?",
      answer:
        "You can invite people via email, phone number, or by sharing a unique group link.",
    },
    {
      question: "How do I invite others to my group?",
      answer:
        "You can invite people via email, phone number, or by sharing a unique group link.",
    },
  ];
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) setActiveIndex(null);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 2);

  return (
    <section className={styles.section}>
      <section className="container">
        <section className={styles.faq}>
          <h1 className={styles.sectionTitle}>Frequently asked questions</h1>
          <p className={styles.sectionSubtitle}>
            Get quick answers to all your questions and concerns about Samie.
          </p>
          <a href="#" className={styles.faqLink}>
            Visit FAQs
          </a>
        </section>
        <div className={styles.accordion}>
          {displayedFaqs.map((faq, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={`${styles.accordionButton} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className={styles.accordionIcon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.accordionContent} ${
                  activeIndex === index ? styles.accordionContentActive : ""
                }`}
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  overflow: "hidden",
                  // transition: "max-height 0.3s ease",
                }}
              >
                <p className={styles.answerText}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {faqs.length > 2 && (
          <div className={styles.showAllButtonContainer}>
            <p className={styles.toggleButton} onClick={toggleShowAll}>
              {showAll ? "Hide Questions" : "See All Questions"}
            </p>
          </div>
        )}
      </section>
    </section>
  );
};

export default Faq;
