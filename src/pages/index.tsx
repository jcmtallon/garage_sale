import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { Good } from "../types";
import { Head } from "../components/Head";

export default function Home() {
  const [goods, setGoods] = useState<Good[]>([]);

  const postGood = async () => {
    await fetch("/api/goods", {
      method: "POST",
    });
  };

  useEffect(() => {
    const fetchGoods = async () => {
      const res = await fetch(`/api/goods`);
      const goods = await res.json();
      setGoods(goods);
    };

    fetchGoods();
  }, []);

  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        {goods.map((good) => (
          <div key={good.id}>{good.name_en}</div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <button onClick={postGood}>TEST POST</button>
    </div>
  );
}
