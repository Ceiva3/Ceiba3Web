import React from "react";
import styles from "../styles/NFTCatalog.module.css"; // Asumiendo que usas CSS Modules para los estilos

const testImageUrl = "../public/emi.jpg";

// Componente para mostrar un NFT individual
const NFTCard = ({ nft }) => {
  return (
    <div className={styles.card}>
      <img src={nft.image} alt={nft.name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{nft.name}</h3>
        <p className={styles.price}>Precio: {nft.price} ETH</p>
        <button className={styles.buyButton}>Comprar</button>
      </div>
    </div>
  );
};

const NFTCatalog = ({ nfts }) => {
  <div className="nft-catalog">
    {nfts?.map((item) => (
      <div key={item.id} className="nft-card">
      </div>
    ))}
  </div>;
};

export default NFTCatalog;
