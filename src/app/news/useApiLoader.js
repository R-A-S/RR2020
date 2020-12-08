import { useEffect, useState } from "react";

import { api } from "../api";
// eslint-disable-next-line
import { buildQueries } from "@testing-library/react";

export const useApiLoader = () => {
  console.log("hook render");
  const [db, setDb] = useState([]);

  let isFetching;

  useEffect(() => {
    (async () => {
      const response = await api.news.fetch();
      const data = await response.json();

      setDb(data);
    })();
  }, [isFetching]);

  if (Array.isArray(db) && db.length) {
    isFetching = false;
  } else {
    isFetching = true;
  }

  return {
    db,
    isFetching,
  };
};
