import React, { useCallback, useEffect, useState } from "react";
import {
  getShowById,
  getShowByName,
  getEpisodesById,
  getEpisodeByNumber,
  getSeasonsById,
  getEpisodesBySeasonId,
} from "../../services/tv-maze-api-client";
import {
  formatSeasons,
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
    // seasons: [],
    seasonsInfo: [],
    seasonsEpisodes: [],
  };

  const [show, setShow] = useState(initialState);

  const fetchShowAndEpisodes = async (fetchedShow = {}) => {
    const seasonsEpisodes = [];
    let showData;
    let seasonsInfo;

    if (!Object.keys(fetchedShow).length) {
      await getShowById(getRandomShowId()).then((data) => (showData = data));
    } else {
      showData = fetchedShow;
    }

    await getSeasonsById(showData.id).then((data) => (seasonsInfo = data));

    seasonsInfo.map(async (season) => {
      await getEpisodesBySeasonId(season.id).then((data) =>
        seasonsEpisodes.push(data)
      );
    });

    // console.log("seasonsEpisodes :>> ", seasonsEpisodes);

    // await getEpisodesById(showData.id).then((data) => (episodesData = data));

    setShow({
      ...show,
      id: showData.id,
      formattedShow: formatSeries(showData),
      seasonsInfo,
      seasonsEpisodes,
      // seasons: formatSeasons(episodesData),
    });
  };

  // const replaceEpisode = (episode) => {
  //   show.seasons[episode.season - 1].episodes.splice(
  //     episode.season - 1,
  //     1,
  //     episode
  //   );
  // };

  const onSearch = useCallback(async (value) => {
    const result = await getShowByName(value);
    const fetchedShow = formatSearch(result);
    // Throw error here if fetchedShow is empty

    fetchShowAndEpisodes(fetchedShow);
  }, []);

  const onReplace = useCallback(async (showName, season, episode) => {
    console.log("show.seasonsEpisodes :>> ", show.seasonsEpisodes);
    const showResult = await getShowByName(showName);
    const fetchedShow = formatSearch(showResult);

    // throw error if no show name is returned

    const fetchedEpisode = await getEpisodeByNumber(
      fetchedShow.id,
      season,
      episode
    );

    // throw error if no episode is returned

    // replaceEpisode(fetchedEpisode);
  });

  useEffect(() => fetchShowAndEpisodes(), []);

  return (
    <main>
      {show !== initialState ? (
        <div>
          <SearchBar onSearch={(value) => onSearch(value)} />
          <Series currentSeries={show.formattedShow} />
          <Replace
            seasonsInfo={show.seasonsInfo}
            onReplace={(showName, season, episode) =>
              onReplace(showName, season, episode)
            }
          />
        </div>
      ) : null}
    </main>
  );
}
