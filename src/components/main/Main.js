import React, { useEffect, useState } from "react";
import {
  getRandomSeries,
  getSeriesByName,
} from "../../services/tv-maze-api-client";
import { formatSeries } from "../../services/utils/tv-maze-util";
import SearchBar from "../searchBar/search-bar";
import Series from "../series/series";
import { formatSearch } from "../utils/formatters";

const RANDOM = "random";
const SEARCH = "search";

export default function Main() {
  let currentSeries;
  const [values, setValues] = useState({
    formattedSeries: {},
    searchValue: "",
  });

  const updateSearchValue = (value) => {
    setValues({ ...values, searchValue: value });
  };

  const updateFormattedSeries = (data) => {
    setValues({ ...values, formattedSeries: formatSeries(data) });
  };

  const fetchSeries = React.useCallback(async (searchType) => {
    if (searchType === RANDOM) {
      await getRandomSeries().then((data) => updateFormattedSeries(data));
    } else {
      const result = await getSeriesByName(searchType);
      updateFormattedSeries(formatSearch(result));
    }
  }, []);

  useEffect(() => {
    fetchSeries(RANDOM);
  }, [fetchSeries]);

  console.log("values :>> ", values);

  return (
    <main>
      <SearchBar
        searchValue={updateSearchValue}
        fetchSeries={() => fetchSeries(values.searchValue)}
      />
      <Series currentSeries={values.formattedSeries} />
    </main>
  );
}
