import React, { Suspense } from "react";
import Categories from "./Categories";

const LeftAside = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Categories></Categories>
      </Suspense>
    </>
  );
};

export default LeftAside;
