import type { NextPage } from "next";
import React from "react";
import Feed_list_episodes from "../../../src/Components/Feed-episodes/Feed_list-episodes";
import Loading from "../../../src/Components/Loading";

const List_episodes: NextPage = () => {
  const test = [
    {
      id: 1,
      name: "Pilot",
      air_date: "December 2, 2013",
      episode: "S01E01",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
      ],
      url: "https://rickandmortyapi.com/api/episode/1",
      created: "2017-11-10T12:56:33.798Z",
    },
    {
      id: 28,
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        // ...
      ],
      url: "https://rickandmortyapi.com/api/episode/28",
      created: "2017-11-10T12:56:36.618Z",
    },
    {
      id: 28,
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        // ...
      ],
      url: "https://rickandmortyapi.com/api/episode/28",
      created: "2017-11-10T12:56:36.618Z",
    },
    {
      id: 28,
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        // ...
      ],
      url: "https://rickandmortyapi.com/api/episode/28",
      created: "2017-11-10T12:56:36.618Z",
    },
    {
      id: 40,
      name: "Childrick of Mort",
      air_date: "May 24, 2020",
      episode: "S04E09",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/662",
        "https://rickandmortyapi.com/api/character/663",
        "https://rickandmortyapi.com/api/character/664",
        "https://rickandmortyapi.com/api/character/665",
        "https://rickandmortyapi.com/api/character/666",
      ],
      url: "https://rickandmortyapi.com/api/episode/40",
      created: "2020-08-06T05:51:25.458Z",
    },
  ];

  return (
    <div>
      <Feed_list_episodes titleOn={true} list_episodes={test} />
    </div>
  );
};

export default List_episodes;
