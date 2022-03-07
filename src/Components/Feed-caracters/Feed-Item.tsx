import React from "react";
import styles from "./Feed-item.module.css";
import Image from "next/image";
import type { caracters } from "./Feed-list";
import GlobalContext from "../../GlobalContext";
interface props {
  item: caracters;
}
const Feed_Item: React.FC<props> = ({ item }) => {
  const { mobileState } = React.useContext(GlobalContext);
  return (
    <div className={mobileState ? styles.container_mobile : styles.container}>
      <div className={styles.img}>
        <Image src={item.image} width={170} height={170} priority />
      </div>
      <div className={styles.descri_container}>
        <div className={styles.title_container}>
          <h2>{item.name}</h2>
        </div>
        <div className={styles.status_container}>
          <h3 className={item.status === "Alive" ? "green" : "unknown "}>
            status:
          </h3>
          <h3>{item.status}</h3>
        </div>
        <div className={styles.gender_container}>
          <h3 className={item.gender === "Male" ? "male" : "female "}>
            gender:{" "}
          </h3>
          <h3>{item.gender}</h3>
        </div>
      </div>
    </div>
  );
};

export default Feed_Item;
