"use client";

import { useRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./HowItWorks.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images
import stepImageOne from "../../../assets/dashbaord.png";
import stepImageTwo from "../../../assets/group.png";
import stepImageThree from "../../../assets/view.png";
import stepImageFour from "../../../assets/notification.png";

interface Step {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  buttonText: string;
}

const HowItWorks = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "Create an account",
      description: "Sign up with your name, email, and phone numbers.",
      image: stepImageOne,
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Create/Join a group",
      description: "Add more apps, friends, family members or executives",
      image: stepImageTwo,
      buttonText: "Get started",
    },
    {
      id: 3,
      title: "Login & Split Expenses",
      description:
        "Add later, split quality or examples the options. LARGE data into reads.",
      image: stepImageThree,
      buttonText: "Get started",
    },
    {
      id: 4,
      title: "Settle Instantly",
      description: "SAMIE handles the rest with auto-debits.",
      image: stepImageFour,
      buttonText: "Get started",
    },
    {
      id: 5,
      title: "Settle Instantly",
      description: "SAMIE handles the rest with auto-debits.",
      image: stepImageFour,
      buttonText: "Get started",
    },
    {
      id: 6,
      title: "Settle Instantly",
      description: "SAMIE handles the rest with auto-debits.",
      image: stepImageFour,
      buttonText: "Get started",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How SAMIE Works</h2>

        <div className={styles.carouselContainer}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className={styles.swiper}
          >
            {steps.map((step) => (
              <SwiperSlide key={step.id} className={styles.swiperSlide}>
                <div className={styles.stepCard}>
                  <div className={styles.stepIconContainer}>
                    <div className={styles.circleBackground}></div>
                    <Image
                      src={step.image}
                      alt={`${step.title} icon`}
                      className={styles.stepIcon}
                      width={400}
                      height={400}
                      priority={step.id === 1}
                    />
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                    <button className={styles.stepButton}>
                      {step.buttonText}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className={`${styles.swiperButton} ${styles.swiperButtonPrev}`}
          >
            <FiChevronLeft />
          </button>
          <button
            ref={nextRef}
            className={`${styles.swiperButton} ${styles.swiperButtonNext}`}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
