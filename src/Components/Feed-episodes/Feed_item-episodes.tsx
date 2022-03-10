import React from "react";
import type { episodes } from "./Feed_list-episodes";
import styles from "./Feed_item-episodes.module.css";
import { useRouter } from "next/router";
interface props {
  item: episodes;
}

const Feed_item_episodes: React.FC<props> = ({ item }) => {
  const router = useRouter();
  function handleClick() {
    router.push(`/episodes/episode/${item.id}`);
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.title_container}>
        <h2>Name: </h2>
        <h2>{item.name}</h2>
      </div>
      <div className={styles.date_container}>
        <h2>Date: </h2>
        <h2>{item.air_date}</h2>
      </div>
      <div className={styles.episode_container}>
        <h2>Episode: </h2>
        <h2>{item.episode}</h2>
      </div>
    </div>
  );
};

export default Feed_item_episodes;
