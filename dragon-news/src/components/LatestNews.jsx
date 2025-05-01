import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-base-200 p-3">
      <span className="bg-secondary text-base-100 py-2 px-3">Latest</span>
      <div className="font-bold w-full">
        <Marquee pauseOnHover={true} speed={60}>
          Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
          Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
