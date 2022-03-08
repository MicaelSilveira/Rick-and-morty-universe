import React from "react";
import styles from "./Feed_list-episodes.module.css";
export type episodes = {
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};
interface props {
  list_episodes: episodes[];
}
const Feed_list_episodes: React.FC<props> = ({ list_episodes }) => {
  return (
    <div className={styles.container}>
      {list_episodes.map((item) => {
        return;
      })}
    </div>
  );
};

export default Feed_list_episodes;
