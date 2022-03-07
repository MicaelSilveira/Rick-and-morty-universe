import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Caracter_only: NextPage = () => {
  const { query } = useRouter();
  return <div>{query.caracter}</div>;
};

export default Caracter_only;
