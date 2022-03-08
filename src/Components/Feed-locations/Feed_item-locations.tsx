import React from "react";
import styles from "./Feed_item-locations.module.css";
import type { locations } from "./Feed_list-locations";
interface props {
  item: locations;
}
const Feed_item_locations: React.FC<props> = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h3>Name:</h3>
        <h3>{item.name}</h3>
      </div>
      <div className={styles.type_container}>
        <h3>Type:</h3>
        <h3>{item.type}</h3>
      </div>
      <div className={styles.dimension_container}>
        <h3>Dimension:</h3>
        <h3>{item.dimension}</h3>
      </div>
    </div>
  );
};

export default Feed_item_locations;
