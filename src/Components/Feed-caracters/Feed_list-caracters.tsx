import React from "react";
import GlobalContext from "../../GlobalContext";
import Feed_item_caracters from "./Feed_item-caracters";
import styles from "./Feed_list-caracters.module.css";
export type caracters = {
  image: string;
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: string[];
};
interface props {
  list_itens: caracters[];
}
const Feed_list: React.FC<props> = ({ list_itens }) => {
  const { mobileState } = React.useContext(GlobalContext);
  return (
    <div className={mobileState ? styles.container_mobile : styles.container}>
      {list_itens.map((item) => (
        <Feed_item_caracters item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Feed_list;
