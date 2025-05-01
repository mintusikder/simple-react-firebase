import React, { use } from "react";
import { NavLink } from "react-router"; 

const categoryPromise = fetch("categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold mb-4">All Categories</h2>

      {/* Mobile: Dropdown */}
      <details className="dropdown md:hidden mb-4">
        <summary className="btn w-full">Select a Category</summary>
        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-full mt-2">
          {categories.map((categorie) => (
            <li key={categorie.id}>
              <NavLink
                to={`/category/${categorie.id}`}
                className={({ isActive }) =>
                  `justify-start ${isActive ? "bg-base-200" : "hover:bg-base-200"}`
                }
              >
                {categorie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop: Vertical List */}
      <div className="hidden md:flex flex-col gap-2">
        {categories.map((categorie) => (
          <NavLink
            key={categorie.id}
            to={`category/${categorie.id}`}
            className={({ isActive }) =>
              `btn border-0 justify-start text-left ${
                isActive ? "bg-base-200" : "bg-base-100 hover:bg-base-200"
              }`
            }
          >
            {categorie.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
