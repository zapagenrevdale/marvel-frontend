import React, { useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
//custom imports
import style from "./Carrousel.module.css";
import List from "./List";
import SlidePageIndicator from "../shared/SlidePageIndicator";

const Carrousel = (props) => {
  // These variables are for the sliding functionalities
  const carrouselRef = useRef();

  const [slide, setSlide] = useState({
    nextDisabled: false,
    prevDisabled: true,
    scrollLocation: 0,
    index: 0,
  });

  const [hover, setHover] = useState(false);

  // important note:
  //    The author used the constant 0.96 as a result of the flex column-gap (0.5%) set and the 3.5% left padding
  //    in this component's css module

  const scroll = useCallback(
    (type) => {
      const clientWidth = carrouselRef.current.clientWidth;
      const scrollWidth = carrouselRef.current.scrollWidth;
      const widthLimit = scrollWidth - clientWidth;
      let scrollLocation = slide.scrollLocation;

      if (type === "NEXT") {
        scrollLocation += clientWidth * 0.96;
        carrouselRef.current.scrollTo({
          top: 0,
          left: scrollLocation,
          behavior: "smooth",
        });
        setSlide({
          prevDisabled: false,
          nextDisabled: scrollLocation >= widthLimit,
          scrollLocation: scrollLocation,
          index: Math.min(slide.index + 1, props.movies.length),
        });
      } else if (type === "PREV") {
        carrouselRef.current.scrollTo({
          top: 0,
          left: (scrollLocation -= clientWidth * 0.96),
          behavior: "smooth",
        });
        scrollLocation = Math.max(0, scrollLocation);
        setSlide({
          scrollLocation: scrollLocation,
          prevDisabled: scrollLocation === 0,
          nextDisabled: false,
          index: Math.max(slide.index - 1, 0),
        });
      }
    },
    [slide]
  );

  return (
    <>
      {hover && (
        <SlidePageIndicator
          length={Math.ceil(props.movies.length / 10)}
          active={slide.index}
        />
      )}
      <div
        className={style.carrousel}
        ref={carrouselRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <List movies={props.movies} />
      </div>
      <button
        className={`${style.slide__Button} ${style.left} ${
          hover && style.slide__Hover
        }`}
        onClick={() => scroll("PREV")}
        hidden={slide.prevDisabled}
        disabled={slide.prevDisabled}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <FontAwesomeIcon icon={faChevronLeft} className={style.icon} />
      </button>
      <button
        className={`${style.slide__Button} ${style.right} ${
          hover && style.slide__Hover
        }`}
        onClick={() => scroll("NEXT")}
        hidden={slide.nextDisabled}
        disabled={slide.nextDisabled}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <FontAwesomeIcon icon={faChevronRight} className={style.icon} />
      </button>
    </>
  );
};

export default Carrousel;
