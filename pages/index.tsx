import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Pages-css/home-page.module.css";
import GlobalContext from "../src/GlobalContext";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
const Home: NextPage = () => {
  const { mobileState } = React.useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick-And-Morty-Universe</title>
      </Head>
      <div
        className={
          mobileState
            ? `${styles.contentMobile} animeLeft`
            : `${styles.content} animeLeft`
        }
      >
        <div className={styles.title_container}>
          <div className={styles.title}>
            <h1>who are they ?</h1>
          </div>
        </div>
        <div className={styles.sinopseIMG}>
          <Link href="/caracters/char/1">
            <div className={styles.img}>
              <Image
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                width={200}
                height={200}
              />
            </div>
          </Link>
          <Link href="/caracters/char/2">
            <div className={styles.img}>
              <Image
                src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                width={200}
                height={200}
              />
            </div>
          </Link>
        </div>
        <div className={styles.content_descri}>
          <div className={styles.sinopse}>
            <p>
              Rick, a brilliant scientist with a drinking problem, and his
              grandson Morty, a teenager not as brilliant as his grandfather.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
