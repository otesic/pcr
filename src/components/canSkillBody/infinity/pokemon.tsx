"use client";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { getPoke } from "@/pages/api/pokeTest/pokeTest";
import useIntersectionObserver from "./pokeHook";

const Pokemon = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "poke",
    ({ pageParam = "" }) => getPoke(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastOffset =
          lastPage.results[lastPage.results.length - 1].url.split("/")[6];
        if (lastOffset > 1118) {
          return undefined;
        }
        return lastOffset;
      },
      staleTime: 3000,
    }
  );

  const loadMoreButtonRef = React.useRef<any>();

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <ul>
        {data?.pages.map((page: any) =>
          page.results.map((poke: any) => (
            <li key={poke.name} style={{ padding: "20px", fontWeight: "bold" }}>
              {poke.name}
            </li>
          ))
        )}
      </ul>
      <button onClick={() => fetchNextPage()}>data 로딩중 ...</button>
      <div ref={loadMoreButtonRef} />
    </>
  );
};

export default Pokemon;
