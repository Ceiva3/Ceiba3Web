import Honeycomb from "@/components/honeycomb";
import styles from "@/styles/app.module.css";

export default function Map() {
  return (
    <main className={styles.main}>
      <div 
        className={styles.honeycombContainer}
        style={{
          backgroundImage: "url('/map.webp')",
          backgroundSize: "Cover",
          width: "100%",
        }}
      >
        <Honeycomb />
      </div>
    </main>
  );
}
