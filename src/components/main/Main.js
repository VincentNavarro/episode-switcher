import React, { useCallback, useEffect, useState } from "react";
import {
  getShowById,
  getShowByName,
  getEpisodesById,
  getEpisodeByNumber,
  getSeasonsById,
} from "../../services/tv-maze-api-client";
import { formatShow, getRandomShowId } from "../../services/utils/tv-maze-util";
import Replace from "../replace/replace";
import SearchBar from "../searchBar/search-bar";
import Seasons from "../seasons/seasons";
import Show from "../show/show";
import Error from "../error/error";
import { formatSearch } from "../utils/formatters";

export default function Main() {
  const initialState = {
    formattedShow: {},
    id: "",
    seasonsInfo: [],
    episodes: [],
    replaceError: false,
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

    const episodes = await getEpisodesById(showData.id);

    setShow({
      ...show,
      id: showData.id,
      formattedShow: formatShow(showData),
      seasonsInfo,
      episodes,
    });
  };

  const replaceEpisode = (episode) => {
    show.episodes.splice(
      show.episodes.findIndex(
        (e) => e.number === episode.number && e.season === episode.season
      ),
      1,
      episode
    );

    setShow({ ...show, replaceError: false });
  };

  const onSearch = useCallback(async (value) => {
    const result = await getShowByName(value);
    const fetchedShow = formatSearch(result);

    fetchShowAndEpisodes(fetchedShow);
  }, []);

  const onReplace = useCallback(async (showName, season, episode) => {
    const showResult = await getShowByName(showName);
    const fetchedShow = formatSearch(showResult);

    const episodeFetchResponse = await getEpisodeByNumber(
      fetchedShow.id,
      season,
      episode
    );

    episodeFetchResponse.error
      ? setShow({
          ...show,
          replaceError: { ...episodeFetchResponse, name: showName },
        })
      : replaceEpisode(episodeFetchResponse);
  });

  useEffect(() => fetchShowAndEpisodes(), []);

  return (
    <main>
      {Object.keys(show.formattedShow).length &&
      show.id &&
      show.seasonsInfo.length &&
      show.episodes.length ? (
        <div>
          <SearchBar onSearch={(value) => onSearch(value)} />
          <Show currentShow={show.formattedShow} />
          <Replace
            episodes={show.episodes}
            onReplace={(showName, season, episode) =>
              onReplace(showName, season, episode)
            }
          />
          <Error onError={show.replaceError} />
          <Seasons episodes={show.episodes} />
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </main>
  );
}
