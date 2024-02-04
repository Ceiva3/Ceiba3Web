import Honeycomb from "@/components/honeycomb";
import styles from "@/styles/app.module.css";
import { Image } from "react-bootstrap";

export default function Map() {
  return (
    <main className={styles.main}>
      <div 
        style={{
          backgroundImage: "url(/map.webp)",
          backgroundImage: "initial"
        }}>
        <Image 
          src="/map.webp" 
          style={{
            width: "1920px"
          }}
        />
        <Honeycomb />
      </div>
    </main>
  );
}
