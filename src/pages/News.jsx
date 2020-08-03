import React from "react";
import { InfoTable } from "../components";
import {Button } from 'react-bootstrap'
import { useNews } from "../hooks";
import { Link } from "react-router-dom";

const News = () => {
  const news = useNews();

  return (
    <>
      <InfoTable data={news} />
      <Link to="/news/create">
        <Button>Додати новину</Button>
      </Link>
    </>
  );
};

export default News;
