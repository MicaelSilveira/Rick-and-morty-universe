import React from "react";
import type { caracters } from "./Feed_list-caracters";
import styles from "./Feed_item-caracters.module.css";
import Image from "next/image";
import GlobalContext from "../../GlobalContext";
import { useRouter } from "next/router";
interface props {
  item: caracters;
}
const Feed_item_caracters: React.FC<props> = ({ item }) => {
  const router = useRouter();
  function handleClick() {
    router.push(`/caracters/char/${item.id}`);
  }
  const { mobileState } = React.useContext(GlobalContext);
  return (
    <div
      className={mobileState ? styles.container_mobile : styles.container}
      onClick={handleClick}
    >
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
        <div className={styles.species_container}>
          <h3 className={item.species === "Alien" ? "alien" : "human"}>
            species:
          </h3>
          <h3>{item.species}</h3>
        </div>
      </div>
    </div>
  );
};

export default Feed_item_caracters;
