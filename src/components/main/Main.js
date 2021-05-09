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
    id: getRandomShowId(),
    seasons: [],
    episodes: [],
  });

  const updateFormattedShow = (data) => {
    setShow({
      ...show,
      id: data.id,
      formattedShow: formatSeries(data),
    });
  };

  const fetchShowAndEpisodes = async () => {
    let showData;
    let episodesData;

    await getShowById(show.id).then((data) => (showData = data));
    await getEpisodesById(show.id).then((data) => (episodesData = data));

    setShow({
      ...show,
      formattedShow: formatSeries(showData),
      episodes: episodesData,
    });
  };

  const onSearch = useCallback(async (value) => {
    const result = await getShowByName(value);
    updateFormattedShow(formatSearch(result));
  }, []);

  useEffect(() => fetchShowAndEpisodes(), []);

  return (
    <main>
      <SearchBar onSearch={(value) => onSearch(value)} />
      <Series currentSeries={show.formattedShow} />
      <Replace seasonCount={show.seasonCount} episodes={show.episodes} />
    </main>
  );
}
