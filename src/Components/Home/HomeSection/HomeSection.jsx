import React, { useLayoutEffect, useRef, useState } from "react";
import HomeSe from "./HomeSe";
import Loader from "../../Loader/Loader";
export default function HomeSection({ itemdetails }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const header = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  function handleImageChange(p) {
    const index =
      p !== undefined ? p : Math.floor(Math.random() * itemdetails.length);
    setActiveIndex(index);
    if (header.current) {
      header.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${itemdetails[index].backdrop_path})`;
    }
  }
  function startSlider(startIndex) {
    if (startIndex !== undefined) {
      handleImageChange(startIndex);
    }
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        handleImageChange();
      }, 5000);
    }, 10000);
  }
  useLayoutEffect(() => {
    if (itemdetails && itemdetails.length > 0) {
      handleImageChange();
      startSlider();
    }
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [itemdetails]);

  if (!itemdetails || itemdetails.length === 0) return <Loader />;

  return (
    <div
      ref={header}
      className="grid relative p-5 grid-cols-1 lg:justify-start justify-center lg:items-end items-center min-h-dvh bg-no-repeat bg-center bg-cover  transition-all duration-1000 ease-in-out"
    >
      <div className="col-span-1 md:max-w-[900px] md:min-h-[370px]">
        <HomeSe itemdetails={itemdetails[activeIndex].id} />
      </div>
      <div className="absolute md:end-0 md:top-1/2 md:bottom-auto md:start-auto transform md:-translate-y-1/2 md:-translate-x-0 bottom-2 start-1/2 -translate-x-1/2 -translate-y-0 flex md:flex-col flex-row md:gap-0 gap-2 md:pe-3 px-1">
        {itemdetails.map((_, index) => (
          <p
            key={index}
            className={`page w-[18px] h-[18px] rounded-full my-2 cursor-pointer ${
              activeIndex === index ? "bg-active" : "border-2 border-border"
            }`}
            onClick={() => startSlider(index)}
          ></p>
        ))}
      </div>
    </div>
  );
}
