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
  formatShow,
  getRandomShowId,
} from "../../services/utils/tv-maze-util";
import Replace from "../replace/replace";
import SearchBar from "../searchBar/search-bar";
import Seasons from "../seasons/seasons";
import Show from "../show/show";
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
    let showData;
    let seasonsInfo;

    if (!Object.keys(fetchedShow).length) {
      showData = await getShowById(getRandomShowId());
    } else {
      showData = fetchedShow;
    }

    seasonsInfo = await getSeasonsById(showData.id);

    // const seasonsEpisodes = await seasonsInfo.map(
    //   async (season) => await getEpisodesBySeasonId(season.id)
    // );

    const seasonsEpisodes = await getEpisodesById(showData.id);

    // await getEpisodesById(showData.id).then((data) => (episodesData = data));

    setShow({
      ...show,
      id: showData.id,
      formattedShow: formatShow(showData),
      seasonsInfo,
      seasonsEpisodes,
      // seasons: formatSeasons(episodesData),
    });
  };

  const replaceEpisode = (episode) => {
    console.log("episode :>> ", episode);
    show.seasonsEpisodes.splice(
      show.seasonsEpisodes.findIndex(
        (e) => e.number === episode.number && e.season === episode.season
      ),
      1,
      episode
    );

    setShow({ ...show });
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

    // console.log("fetchedEpisode :>> ", fetchedEpisode);
    // throw error if no episode is returned

    replaceEpisode(fetchedEpisode);
  });

  useEffect(() => fetchShowAndEpisodes(), []);

  return (
    <main>
      {Object.keys(show.formattedShow).length &&
      show.id &&
      show.seasonsInfo.length &&
      show.seasonsEpisodes.length ? (
        <div>
          <SearchBar onSearch={(value) => onSearch(value)} />
          <Show currentShow={show.formattedShow} />
          <Replace
            seasonsEpisodes={show.seasonsEpisodes}
            onReplace={(showName, season, episode) =>
              onReplace(showName, season, episode)
            }
          />
          <Seasons seasonsEpisodes={show.seasonsEpisodes} />
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </main>
  );
}
