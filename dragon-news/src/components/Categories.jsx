import React, { Suspense, use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div className="flex flex-col">
        {categories.map((categorie) => (
          <NavLink key={categorie.id}>{categorie.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
