import Image from "next/image";
import styles from "./FeatureCard.module.css"
import Expense from "../../../assets/expense.png";
import Split from "../../../assets/split.png";
import Payment from "../../../assets/payments.png";
import History from "../../../assets/histories.png";

const features = [
  {
    title: "Real-Time Expense Tracking",
    text: "Track group expenses as they happen. No more confusion.",
    image: Expense,
  },
  {
    title: "Customizable Splits",
    text: "Split bills equally or by custom percentages. Your call.",
    image: Split,
  },
  {
    title: "Integrated Payments",
    text: "Settle expenses instantly via mobile wallets and bank links.",
    image: Payment,
  },
  {
    title: "Transaction Histories",
    text: "Download receipts and view all expense details anytime you need them.",
    image: History,
  },
];


const FeatureCards = () => {
  return (
    <section className={styles.features}>
      {features.map((feature, idx) => (
        <div key={idx} className={styles.featureCard}>
          <Image src={feature.image} alt={feature.title} width={50} height={45} className={styles.featureImage}  />
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </section>
  );
}
export default FeatureCards