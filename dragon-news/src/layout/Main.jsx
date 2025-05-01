import React from "react";
import { Outlet } from "react-router"; // ✅ Make sure this is from react-router-dom
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

const Main = () => {
  return (
    <div>
      <Header />
      <section className="w-11/12 mx-auto">
        <LatestNews />
        <NavBar />
      </section>

      {/* Responsive Grid */}
      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Aside (hidden or stacked on mobile) */}
        <aside className="md:col-span-3">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="md:col-span-6">
          <Outlet />
        </section>

        {/* Right Aside */}
        <aside className="md:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Main;
