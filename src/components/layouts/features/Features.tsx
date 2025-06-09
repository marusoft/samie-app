import styles from "../../../app/landing/Landing.module.css";
import Image from "next/image";

const features = [
  {
    icon: "/images/expense.png",
    title: "Easy Tracking",
    text: "Track shared expenses in real-time with friends.",
  },
  {
    icon: "/images/split.png",
    title: "Instant Settlement",
    text: "Send or request payments instantly. No hassle.",
  },
  {
    icon: "/images/payments.png",
    title: "Reminders",
    text: "Avoid awkward follow-ups. Let Samie nudge them.",
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      {features.map((f, i) => (
        <div className={styles.featureCard} key={i}>
          <Image src={f.icon} alt={f.title} width={48} height={48} />
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
