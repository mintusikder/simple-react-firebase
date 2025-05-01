import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <main>
        {/* left */}
        <section></section>
        <section>
          <Outlet></Outlet>
        </section>
        {/* right */}
        <section></section>
      </main>
    </div>
  );
};

export default Main;
