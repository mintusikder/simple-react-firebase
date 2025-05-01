import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
        <NavBar></NavBar>
      </section>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        {/* left */}
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        {/* right */}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Main;
