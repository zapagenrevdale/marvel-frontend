import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGooglePlay,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import style from "./Contents.module.css";
import Button from "../../buttons/Button";
import { ImageWidgetContainer } from "../layout/Layout";

export const Tag = (props) => {
  return (
    <div>
      <span className={style.tag__label}>{props.label + ": "}</span>
      <span className={style.tag__content}>{props.content}</span>
    </div>
  );
};

export const StreamItem = (props) => {
  return (
    <div className={style.stream__Item}>
      <FontAwesomeIcon icon={props.icon} className={style.stream__Icon} />
      <div>
        <p className={style.streamSite__Text}>{props.streamSite}</p>
        <a
          href={props.href || "#"}
          className={style.streamSite__Link}
          target="_blank"
          rel="noreferrer"
        >
          Watch Now <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
};

export const ImageContent = (props) => {
  return (
    <>
      <img src={props.backgroundUrl} alt="" className={style.image} />
      <ImageWidgetContainer>
        <p className={style.preview__Title}>{props.title}</p>
        <Button type="play-thin">
          <FontAwesomeIcon icon={faPlay} className={style.icon} /> Play
        </Button>
      </ImageWidgetContainer>
    </>
  );
};

export const MetaDataContent = (props) => {
  return (
    <>
      <span className={style.imdb__rating}>{props.rating} IMDb Rating</span>
      <span> {props.year}</span>
      <span className={style.pg__rating}>{props.rated}</span>
      <span>{props.runtime} min</span>
    </>
  );
};

export const PlotContent = (props) => {
  return <span className={style.plot}>{props.plot}</span>;
};

export const TagContent = (props) => {
  return (
    <>
      <Tag label="Cast" content={props.actors} />
      <Tag label="Genres" content={props.genres} />
      <Tag label="Awards" content={props.awards} />
    </>
  );
};

export const StreamContent = (props) => {
  return (
    <>
      <StreamItem
        streamSite="Youtube"
        icon={faYoutube}
        href={props.stream_sites[0]?.link}
      />
      <StreamItem
        streamSite="Google Play"
        icon={faGooglePlay}
        href={props.stream_sites[1]?.link}
      />
      <StreamItem
        streamSite="Apple TV"
        icon={faApple}
        href={props.stream_sites[2]?.link}
      />
    </>
  );
};
