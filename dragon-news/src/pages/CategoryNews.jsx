import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router"; // ✅ use

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
      console.log(filterData);
      setFilteredNews(filterData);
    }
  }, [data, id]);

  return (
    <div>
      <h2>{filteredNews.length}</h2>
    </div>
  );
};

export default CategoryNews;
