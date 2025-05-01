import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
        <NavBar></NavBar>
      </section>
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
