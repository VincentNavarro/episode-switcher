import React, { useEffect, useState } from "react";
import { getRandomSeries } from "../../services/tv-maze-api-client";
import { formatSeries } from "../../services/utils/tv-maze-util";
import Series from "../series/series";

const BASE_URL = "http://api.tvmaze.com";

export default function Main() {
  let currentSeries;
  const [series, setSeries] = useState(null);
  useEffect(async () => {
    const response = await getRandomSeries().then((data) =>
      setSeries(formatSeries(data))
    );
  }, []);

  return (
    <main>
      <Series currentSeries={series} />
    </main>
  );
}
