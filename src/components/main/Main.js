import React, { useCallback, useEffect, useState } from "react";
import {
  getShowById,
  getShowByName,
  getEpisodesById,
} from "../../services/tv-maze-api-client";
import {
  formatSeasonsCount,
  formatSeries,
  getRandomShowId,
} from "../../services/utils/tv-maze-util";
import Replace from "../replace/replace";
import SearchBar from "../searchBar/search-bar";
import Series from "../series/series";
import { formatSearch } from "../utils/formatters";

export default function Main() {
  const [show, setShow] = useState({
    formattedShow: {},
    searchValue: "",
    showId: getRandomShowId(),
    seasonsCount: [],
    episodes: [],
  });

  const updateSearchValue = (value) => {
    setShow({ ...show, searchValue: value });
  };

  const updateFormattedShow = (data) => {
    setShow({
      ...show,
      showId: data.id,
      formattedShow: formatSeries(data),
    });
  };

  const handleEpisodesAndSeasons = (data) => {
    setShow({
      ...show,
      seasons: formatSeasonsCount(data),
      episodes: data,
    });
  };

  const fetchShow = useCallback(async (searchValue = "") => {
    if (searchValue) {
      const result = await getShowByName(searchValue);
      updateFormattedShow(formatSearch(result));
    } else {
      await getShowById(show.showId).then((data) => updateFormattedShow(data));
    }
  }, []);

  const onSearch = useCallback(async () => {
    const result = await getShowByName(show.searchValue);
    updateFormattedShow(formatSearch(result));
  });

  const setEpisodesAndSeasons = useCallback(async () => {
    return getEpisodesById(show.showId).then((data) =>
      handleEpisodesAndSeasons(data)
    );
  }, []);

  useEffect(() => {
    fetchShow();
  }, [fetchShow]);

  // useEffect(() => {
  //   if (episodeChange) setEpisodesAndSeasons();
  // });

  return (
    <main>
      <SearchBar searchValue={updateSearchValue} onSearch={() => onSearch()} />
      <Series currentSeries={show.formattedShow} />
      <Replace seasonCount={show.seasonCount} episodes={show.episodes} />
    </main>
  );
}
