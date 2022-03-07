// import type {NextPage} from 'next/page'
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
const id: NextPage = () => {
  const { query } = useRouter();
  return <div>{query.char}</div>;
};

export default id;
