import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id === id);
    setNews(newsDetails);
  },[data,id]);
  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto">
      <NewsDetailsCard news={news} key={news.id}></NewsDetailsCard>
     </section>
    </div>
  );
};

export default NewsDetails;
