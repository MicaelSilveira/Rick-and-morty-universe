import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Pages-css/home-page.module.css";
import GlobalContext from "../src/GlobalContext";
import Head from "next/head";
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
            ? `${styles.contentMobile} animeDown`
            : `${styles.content} animeLeft`
        }
      >
        <div className={styles.title_container}>
          <div className={styles.title}>
            <h1>who are they ?</h1>
          </div>
        </div>
        <div className={styles.sinopseIMG}>
          <div className={styles.img}>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
          </div>
          <div className={styles.img}>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
          </div>
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
