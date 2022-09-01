import style from "./Layout.module.css";

export const ModalContainer = (props) => {
  return <div className={style.modal__Container}>{props.children}</div>;
};

export const ImageContainer = (props) => {
    return <div className={style.image__Container}>{props.children}</div>;
};

export const DetailsContainer = (props) => {
  return <div className={style.details__Container}>{props.children}</div>;
}

export const MetaDataContainer = (props) => {
  return <div className={style.metadata__Container}>{props.children}</div>;
};

export const LeftMetadaContainer = (props) => {
  return <div className={style.left__metadata__Container}>{props.children}</div>;
};

export const MetaDataDiv = (props) => {
  return <div className={style.metadata__Div}>{props.children}</div>;
};

export const RightMetaDataContainer = (props) => {
  return <div className={style.right__metadata__Container}>{props.children}</div>;
};

export const TagsDiv = (props) => {
  return <div className={style.tags__Div}>{props.children}</div>;
};

export const StreamContainer = (props) => {
  return <div className={style.stream__Container}>{props.children}</div>;
}

export const StreamDiv = (props) => {
  return <div className={style.stream__Div}>{props.children}</div>; 
}

export const ImageWidgetContainer = (props) => {
  return <div className={style.widget__Container}>{props.children}</div>; 
  
}