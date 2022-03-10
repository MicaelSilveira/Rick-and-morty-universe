import React from "react";
import styles from "./Feed_list-episodes.module.css";
import Feed_item_episodes from "./Feed_item-episodes";
export type episodes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};
interface props {
  list_episodes: episodes[];
  titleOn: boolean;
}
const Feed_list_episodes: React.FC<props> = ({ list_episodes, titleOn }) => {
  return (
    <div className={`${styles.container} animeLeft`}>
      {titleOn && (
        <div className="title_pages">
          <h1>Episodes</h1>
        </div>
      )}
      {list_episodes.map((item, index) => {
        return <Feed_item_episodes item={item} key={item.id + index} />;
      })}
    </div>
  );
};

export default Feed_list_episodes;
