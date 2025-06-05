"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Splash.module.css";

const SplashScreen = () => {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut((prev) => !prev), 7000); // Start fade after 7s
    const routeTimer = setTimeout(() => router.push("/landing"), 8000); // Route at 8s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(routeTimer);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <Image
        src="/images/splash.png"
        alt="Group of friends using phones"
        fill
        className={styles.bgImage}
      />
      <div className={styles.overlay}>
        <div className={styles.title}>
          <Image
            src="/images/samie-white.png"
            alt="Samie Logo"
            width={300}
            height={10}
            className={styles.logo}
          />
          <p className={styles.subtitle}>Easy splits. Instant settles</p>
        </div>

        {/* Pulsing dots */}

        <div className={styles.loader}>
          <span
            className={styles.dot}
            style={{ animationDelay: "0.0s" }}
          ></span>
          <span
            className={styles.dot}
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className={styles.dot}
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
};
export default SplashScreen;
