import React from "react";
import type { caracters } from "../../../src/Components/Feed-caracters/Feed_list-caracters";
import type { GetServerSideProps, NextPage } from "next";
import Feed_list_caracters from "../../../src/Components/Feed-caracters/Feed_list-caracters";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${context.query.page}`
  );
  const json = await response.json();
  return {
    props: {
      List_char: json,
    },
  };
};
type results = {
  results: caracters[];
};
interface props {
  List_char: results;
}
const Caracters: NextPage<props> = ({ List_char }) => {
  return (
    <div className={`animeLeft`}>
      <Feed_list_caracters titleOn={true} list_itens={List_char.results} />
    </div>
  );
};
export default Caracters;
