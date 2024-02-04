"use client";
import "@near-wallet-selector/modal-ui/styles.css";

import { NetworkId } from "@/config";
import { Navigation } from "@/components/navigation";
import { useInitWallet } from "@/wallets/wallet-selector";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  useInitWallet({ createAccessKeyFor: "", networkId: NetworkId });

  return (
    <>
      <Navigation />
      {children}
      <Footer/>
    </>
  );
}
