import React from "react";
import GlobalContext from "../../GlobalContext";
import Feed_Item from "./Feed-Item";
import styles from "./Feed-list.module.css";
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
        <Feed_Item item={item} />
      ))}
    </div>
  );
};

export default Feed_list;
