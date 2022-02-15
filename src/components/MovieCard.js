import { Badge } from "@material-ui/core";
import React from "react";
import { img_300 } from "../config";
import { unavailable } from "../config";
import "../styles/MovieCard.css";
import DetailsModal from "./DetailsModal";

function MovieCard({ id, poster, title, date, media_type, vote_average }) {
  return (
    <DetailsModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
        className="poster"
      />
      <b className="title">{title}</b>
      <div className="subContainer">
        <span className="subTitle">
          {media_type === "tv" ? `TV Series` : `Movie`}
        </span>
        <span className="subTitle">{date}</span>
      </div>
    </DetailsModal>
  );
}

export default MovieCard;
