import React from "react";
import Feed_item_locations from "./Feed_item-locations";
import styles from "./Feed_list-locations.module.css";
export type locations = {
  name: string;
  type: string;
  dimension: string;
};
interface props {
  list_itens: locations[];
}
const Feed_list_locations: React.FC<props> = ({ list_itens }) => {
  return (
    <div className={`${styles.container} animeLeft`}>
      {list_itens.map((item) => {
        return <Feed_item_locations item={item} key={item.name} />;
      })}
    </div>
  );
};

export default Feed_list_locations;
