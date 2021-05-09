import React, { useEffect, useState } from "react";
import {
  getRandomSeries,
  getSeriesByName,
} from "../../services/tv-maze-api-client";
import { formatSeries } from "../../services/utils/tv-maze-util";
import SearchBar from "../searchBar/search-bar";
import Series from "../series/series";
import { formatSearch } from "../utils/formatters";

export default function Main() {
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

  const fetchSeries = React.useCallback(async (searchValue = "") => {
    if (searchValue) {
      const result = await getSeriesByName(searchValue);
      updateFormattedSeries(formatSearch(result));
    } else {
      await getRandomSeries().then((data) => updateFormattedSeries(data));
    }
  }, []);

  useEffect(() => {
    fetchSeries();
  }, [fetchSeries]);

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
