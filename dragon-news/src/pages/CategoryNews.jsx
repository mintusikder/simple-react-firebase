import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router"; // ✅ use
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setFilteredNews(data);
      return;
    } else if (id == "1") {
      const filterData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setFilteredNews(filterData);
    } else {
      const filterData = data.filter((news) => news.category_id == id);
      setFilteredNews(filterData);
    }
  }, [data, id]);

  return (
    <div className="grid grid-cols-1 gap-6">
      {filteredNews.map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
