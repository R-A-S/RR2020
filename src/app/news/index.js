import React from "react";
import { Article } from "../article";
import { useApiLoader } from "./useApiLoader";
import { Loader } from "./Loader";

export const News = () => {
  const { db, isFetching } = useApiLoader();
  console.log(isFetching);

  let articleJsx;

  if (isFetching) {
    articleJsx = <Loader />;
  } else {
    articleJsx = db.map(({ id, ...props }) => {
      return <Article key={id} {...props} />;
    });
  }

  return (
    <section>
      <h3>News</h3>
      {articleJsx}
    </section>
  );
};
