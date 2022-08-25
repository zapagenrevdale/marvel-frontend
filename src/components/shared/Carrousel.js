import React, { useRef, useState, useCallback } from "react";
import style from "./Carrousel.module.css";
import List from "./List";
const Carrousel = (props) => {
  // These variables are for the sliding functionalities
  const carrouselRef = useRef();

  const [slide, setSlide] = useState({
    nextDisabled: false,
    prevDisabled: true,
    scrollLocation: 0,
  });

  // important note:
  //    The author used the constant 0.995 as a result of the flex column-gap set
  //    in this component's css module

  const scroll = useCallback(
    (type) => {
      const clientWidth = carrouselRef.current.clientWidth;
      const scrollWidth = carrouselRef.current.scrollWidth;
      const widthLimit = scrollWidth - clientWidth;
      let scrollLocation = slide.scrollLocation;

      if (type === "NEXT") {
        scrollLocation += clientWidth * 0.995;
        carrouselRef.current.scrollTo({
          top: 0,
          left: scrollLocation,
          behavior: "smooth",
        });
        setSlide({
          prevDisabled: false,
          nextDisabled: scrollLocation >= widthLimit,
          scrollLocation: scrollLocation,
        });
      } else if (type === "PREV") {
        carrouselRef.current.scrollTo({
          top: 0,
          left: (scrollLocation -= clientWidth * 0.995),
          behavior: "smooth",
        });
        scrollLocation = Math.max(0, scrollLocation);
        setSlide({
          scrollLocation: scrollLocation,
          prevDisabled: scrollLocation === 0,
          nextDisabled: false,
        });
      }
    },
    [slide]
  );

  return (
    <>
      <div className={style.carrousel} ref={carrouselRef}>
        <List movies={props.movies} />
      </div>
      <button
        onClick={() => scroll("PREV")}
        hidden={slide.prevDisabled}
        disabled={slide.prevDisabled}
      >
        left
      </button>
      <button
        onClick={() => scroll("NEXT")}
        hidden={slide.nextDisabled}
        disabled={slide.nextDisabled}
      >
        right
      </button>
    </>
  );
};

export default Carrousel;
