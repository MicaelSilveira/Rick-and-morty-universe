import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import type { caracters } from "../../../src/Components/Feed-caracters/Feed_list-caracters";
import styles from "../../../styles/Pages-css/caracters-char.module.css";
import Image from "next/image";
import Feed_list_locations, {
  locations,
} from "../../../src/Components/Feed-locations/Feed_list-locations";
import Feed_list_episodes, {
  episodes,
} from "../../../src/Components/Feed-episodes/Feed_list-episodes";
import GlobalContext from "../../../src/GlobalContext";

interface props {
  char: caracters;
  test: any;
  origin: locations[];
  episodes: episodes[];
  location: locations[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

    if (dateChar.origin.url === "") {
      return {
        originString: false,
        locationString: locationNumberString,
        episodeString: episodeNumbersString,
      };
    } else {
      return {
        originString: originNumberString,
        locationString: locationNumberString,
        episodeString: episodeNumbersString,
      };
    }
  }
  async function fetchJson(url: string, params: string | string[] | undefined) {
    const response = await fetch(`${url}${params}`);
    const date = await response.json();
    return date;
  }
  const caracter = context.query.caracter;

  const dateChar = await fetchJson(
    "https://rickandmortyapi.com/api/character/",
    caracter
  );

  const { originString, episodeString, locationString } =
    getURL_locations_episodes(dateChar);

  const episodesDates = await fetchJson(
    `https://rickandmortyapi.com/api/episode/`,
    episodeString
  );
  const locationsDates: locations[] = await fetchJson(
    `https://rickandmortyapi.com/api/location/`,
    `${originString ? originString : "1"},${locationString}`
  );
  if (episodesDates.constructor.name === "Object") {
    if (locationsDates.length === 1) {
      return {
        props: {
          char: dateChar,
          origin: [locationsDates[0]],
          location: [locationsDates[0]],
          episodes: [episodesDates],
        },
      };
    }
    return {
      props: {
        char: dateChar,
        origin: [locationsDates[0]],
        location: [locationsDates[1]],
        episodes: [episodesDates],
      },
    };
  } else if (locationsDates.length === 1) {
    return {
      props: {
        char: dateChar,
        origin: [locationsDates[0]],
        location: [locationsDates[0]],
        episodes: episodesDates,
      },
    };
  } else {
    return {
      props: {
        char: dateChar,
        origin: [locationsDates[0]],
        location: [locationsDates[1]],
        episodes: episodesDates,
      },
    };
  }
};
const Caracter: NextPage<props> = ({ char, origin, location, episodes }) => {
  const { setStateLoading } = React.useContext(GlobalContext);
  setStateLoading(false);
  return (
    <div className={`${styles.container_globla} animeLeft`}>
      <div className={styles.container_main}>
        <div className={styles.img}>
          <Image src={char.image} width={300} height={300} priority />
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
