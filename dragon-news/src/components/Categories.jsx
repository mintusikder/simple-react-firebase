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
          <NavLink
          className={({ isActive }) =>
            `btn border-0 justify-start text-left ${isActive ? "bg-base-200" : "bg-base-100 hover:bg-base-200"}`
          }
            to={`category/${categorie.id}`}
            key={categorie.id}
          >
            {categorie.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
