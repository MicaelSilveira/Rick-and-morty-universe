import React from "react";
import type { episodes } from "./Feed_list-episodes";
interface props {
  item: episodes;
}

const Feed_item_episodes: React.FC<props> = ({ item }) => {
  return <div>Feed_item-episodes</div>;
};

export default Feed_item_episodes;
