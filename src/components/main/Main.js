import React, { useCallback, useEffect, useState } from "react";
import {
  getShowById,
  getShowByName,
  getEpisodesById,
  getEpisodeByNumber,
} from "../../services/tv-maze-api-client";
import {
  formatSeasons,
  formatSeasonsCount,
  formatSeries,
  getRandomShowId,
} from "../../services/utils/tv-maze-util";
import Replace from "../replace/replace";
import SearchBar from "../searchBar/search-bar";
import Series from "../series/series";
import { formatSearch } from "../utils/formatters";

export default function Main() {
  const initialState = {
    formattedShow: {},
    id: "",
    seasons: [],
  };

  const [show, setShow] = useState(initialState);

  const fetchShowAndEpisodes = async (fetchedShow = {}) => {
    let showData;
    let episodesData;

    if (!Object.keys(fetchedShow).length) {
      await getShowById(getRandomShowId()).then((data) => (showData = data));
    } else {
      showData = fetchedShow;
    }

    await getEpisodesById(showData.id).then((data) => (episodesData = data));

    setShow({
      ...show,
      id: showData.id,
      formattedShow: formatSeries(showData),
      seasons: formatSeasons(episodesData),
    });
  };

  const replaceEpisode = (episode) => {
    const episodeIDToReplace = show.episodes.find(
      (e) => e.number === episode.number && e.season === episode.season
    );
    console.log("episodeIDToReplace :>> ", episodeIDToReplace);
  };

  const onSearch = useCallback(async (value) => {
    const result = await getShowByName(value);
    const fetchedShow = formatSearch(result);
    // Throw error here if fetchedShow is empty

    fetchShowAndEpisodes(fetchedShow);
  }, []);

  const onReplace = useCallback(async (showName, season, episode) => {
    const showResult = await getShowByName(showName);
    const fetchedShow = formatSearch(showResult);

    // throw error if no show name is returned

    const fetchedEpisode = await getEpisodeByNumber(
      fetchedShow.id,
      season,
      episode
    );

    // throw error if no episode is returned

    // get show by number (season and number)

    // .replace in episode array the new episode
  });

  useEffect(() => fetchShowAndEpisodes(), []);

  return (
    <main>
      {show !== initialState ? (
        <div>
          <SearchBar onSearch={(value) => onSearch(value)} />
          <Series currentSeries={show.formattedShow} />
          <Replace
            seasons={show.seasons}
            onReplace={(showName, season, episode) =>
              onReplace(showName, season, episode)
            }
          />
        </div>
      ) : null}
    </main>
  );
}
