import React from "react";
import Feed_item_locations from "./Feed_item-locations";
import styles from "./Feed_list-locations.module.css";
export type locations = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};
interface props {
  list_itens: locations[];
  titleOn: boolean;
}
const Feed_list_locations: React.FC<props> = ({ list_itens, titleOn }) => {
  return (
    <div className={`${styles.container} animeLeft`}>
      {titleOn && (
        <div className="title_pages">
          <h1>Locations</h1>
        </div>
      )}
      {list_itens.map((item, index) => {
        return <Feed_item_locations item={item} key={item.id + index} />;
      })}
    </div>
  );
};

export default Feed_list_locations;
