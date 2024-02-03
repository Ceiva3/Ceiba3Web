import styles from "@/styles/app.module.css";
import {
  DocsCard,
  HelloComponentsCard,
  HelloNearCard,
} from "@/components/cards";
import Hero from "@/components/hero";
import Who from "@/components/who";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Who/>
      <div className={styles.grid}>
        <HelloComponentsCard />
        <HelloNearCard />
        <DocsCard />
      </div>
    </main>
  );
}
