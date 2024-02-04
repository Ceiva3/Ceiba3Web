import styles from "@/styles/app.module.css";
import Hero from "@/components/hero";
import Who from "@/components/who";
import Carousel from "@/components/carousel";
import Buy from "@/components/buy";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Who />
      <Buy/>
      <Carousel/>
    </main>
  );
}
