import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  return (
    <div>
      <img src={news.image_url} alt="" />
      {news.details} <br />
      <Link to={`/category/${news.category_id}`} className="btn" >Back to Category</Link>
    </div>
  );
};

export default NewsDetailsCard;
