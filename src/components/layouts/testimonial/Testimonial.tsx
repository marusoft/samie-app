"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./Testimonial.module.css";
import TestimonialImage from "../../../assets/testimonial-img.png";

const Testimonial = () => {
  return (
    <section className={styles.section}>
      <section className="container">
        <div className={styles.testimonials}>
          <h1 className={styles.sectionTitle}>What Our Users Say</h1>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: styles.swiperPaginationBullet,
            bulletActiveClass: styles.swiperPaginationBulletActive,
            renderBullet: (index, className) => {
              return `<span class="${className} ${styles.customBullet}"></span>`;
            },
          }}
          autoplay={{
            delay: 3000, // 3 seconds between slides
            disableOnInteraction: false, // continue autoplay after user interaction
            pauseOnMouseEnter: true, // pause when mouse hovers over carousel
          }}
          loop={true} // infinite loop
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiperContainer}
        >
          <section>
            {/* Testimonial 1 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Victor Emmanuel</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  SAME make getting idle with my roommate a thread!
                </p>
              </div>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Alimi Kehinde</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  It has been such a pleasure settling my footsteps on a quick
                  snapshot like become more seamless and secure.
                </p>
              </div>
            </SwiperSlide>

            {/* Testimonial 3 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Benjamin Osammor</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  Sammile is user-friendly and has an excellent functionality!
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 4 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Benjamin Osammor</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  Sammile is user-friendly and has an excellent functionality!
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 5 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Benjamin Osammor</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  Sammile is user-friendly and has an excellent functionality!
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 6 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Benjamin Osammor</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  Sammile is user-friendly and has an excellent functionality!
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 7 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Benjamin Osammor</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  Sammile is user-friendly and has an excellent functionality!
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 8 */}
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <Image
                    src={TestimonialImage}
                    alt="Testimonial"
                    className={styles.testimonialImage}
                    width={50}
                    height={50}
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.userName}>Benjamin Osammor</h3>
                    <div className={styles.rating}>★★★☆☆</div>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  Sammile is user-friendly and has an excellent functionality!
                </p>
              </div>
            </SwiperSlide>
          </section>
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonial;
