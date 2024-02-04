import styles from "@/styles/app.module.css";
import Hero from "@/components/hero";
import Who from "@/components/who";
import Honeycomb from "@/components/honeycomb";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Who />
      <Carousel/>
    </main>
  );
}
