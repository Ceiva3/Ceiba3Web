import NFTCatalog from "@/components/nftcatalogo";
import styles from "@/styles/app.module.css";

export default function Nfts() {
  const nft = {
    id: "1",
    name: "Pepe",
    image: "/vercel.svg",
    price: "123",
  }
  
  const nfts = {
    nft,
  }
  return (
    <main className={styles.main}>
      <div>
        {
          NFTCatalog(nfts)
        }
      </div>
    </main>
  );
}