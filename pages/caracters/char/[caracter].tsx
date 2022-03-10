import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { caracters } from "../../../src/Components/Feed-caracters/Feed_list-caracters";
import styles from "../../../styles/Pages-css/caracters-char.module.css";
import Image from "next/image";
import Feed_list_locations, {
  locations,
} from "../../../src/Components/Feed-locations/Feed_list-locations";
import Feed_list_episodes, {
  episodes,
} from "../../../src/Components/Feed-episodes/Feed_list-episodes";
import path from "path/posix";

interface props {
  char: caracters;
  origin: locations[];
  location: locations[];
  episodes: episodes[];
}
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const dateChars = await response.json();
  const paths = dateChars.results.map((char: caracters) => {
    return { params: { caracter: String(char.id) } };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  function getURL_locations_episodes(dateChar: caracters) {
    const originURL = dateChar.origin.url.split("/");
    const originNumberString = originURL[originURL.length - 1];

    const locationURL = dateChar.location.url.split("/");
    const locationNumberString = locationURL[locationURL.length - 1];

    const episodesNumbersArray = dateChar.episode.map((ep) => {
      let urls = ep.split("/");
      let numbers = urls[urls.length - 1];
      return numbers;
    });

    const episodeNumbersString = episodesNumbersArray.join();

    return { originNumberString, locationNumberString, episodeNumbersString };
  }
  async function fetchJson(url: string, params: string | string[] | undefined) {
    const response = await fetch(`${url}${params}`);
    const date = await response.json();
    return date;
  }

  const caracter = context.params?.caracter;

  const dateChar = await fetchJson(
    "https://rickandmortyapi.com/api/character/",
    caracter
  );
  const { originNumberString, episodeNumbersString, locationNumberString } =
    getURL_locations_episodes(dateChar);
  const locationsDates = await fetchJson(
    "https://rickandmortyapi.com/api/location/",
    originNumberString + locationNumberString
  );
  const episodesDates = await fetchJson(
    "https://rickandmortyapi.com/api/episode/",
    episodeNumbersString
  );

  return {
    props: {
      char: dateChar,
      origin: locationsDates[0],
      location: locationsDates[1],
      episodes: episodesDates,
    },
  };
};
const Caracter: NextPage<props> = ({ origin, location, episodes, char }) => {
  return (
    <div className={`${styles.container_globla} animeLeft`}>
      <div className={styles.container_main}>
        <div className={styles.img}>
          <Image src={char.image} width={300} height={300} />
        </div>
        <div className={styles.descri_container}>
          <div className={styles.title_container}>
            <h2>{char.name}</h2>
          </div>
          <div className={styles.status_container}>
            <h2>Status: </h2>
            <h2>{char.status}</h2>
          </div>
          <div className={styles.gender_container}>
            <h2>Gender: </h2>
            <h2>{char.gender}</h2>
          </div>
          <div className={styles.origin_container}>
            <div className={styles.origin_title_container}>
              <h2>Origin: </h2>
            </div>
            <Feed_list_locations titleOn={false} list_itens={origin} />
          </div>
          <div className={styles.location_container}>
            <div className={styles.location_title_container}>
              <h2>Location: </h2>
            </div>
            <Feed_list_locations titleOn={false} list_itens={location} />
          </div>
        </div>
      </div>
      <div className={styles.episodes_container}>
        <div className={styles.episodes_title_container}>
          <h2>Episodes: </h2>
        </div>
        <Feed_list_episodes titleOn={false} list_episodes={episodes} />
      </div>
    </div>
  );
};

export default Caracter;
