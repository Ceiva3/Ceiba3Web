import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWallet } from "@/wallets/wallet-selector";

const navLinks = [
  {
    name: "Adopt",
    path: "/adopt",
  },
  {
    name: "NFT´s",
    path: "/nfts",
  },
  {
    name: "Map",
    path: "/map",
  },
  {
    name: "My Plots",
    path: "/myplots",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
];

export const Navigation = () => {
  const { signedAccountId, logOut, logIn } = useWallet();
  const [action, setAction] = useState(() => {});
  const [label, setLabel] = useState("Loading...");

  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel("Login");
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #d6d6d6",
        justifyContent: "center",
      }}
    >
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingRight: "100px",
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <Image
              priority
              src="/logo.webp"
              alt="Ceiva3"
              width="65"
              height="65"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              marginBottom: "0",
            }}
          >
            {navLinks.map((item) => (
              <li
                key={item.name}
                style={{
                  paddingRight: "20px",
                  listStyleType: "none",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.target.style.textDecoration = "none")
                }
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-nav pt-1">
          <button className="btn btn-secondary" onClick={action}>
            {" "}
            {label}{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};
