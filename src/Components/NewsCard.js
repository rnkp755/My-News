import React from "react";
import { defaultimage } from "./Navbar";

export default function NewsCard(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div
        className="card"
        style={{ cursor: "pointer",height: '30 rem',overflow: 'hidden'}}
      >
        <div
          className="d-flex"
          style={{ justifyContent: "flex-end", zIndex: "1" }}
        >
          <span className="badge rounded-pill text-bg-primary">{source}</span>
        </div>
        <img
          src={imageUrl ? imageUrl : defaultimage}
          className="card-img-top"
          alt="..."
          style={{ marginTop: "-20.4px" }}
        />
        <div className="card-body">
          <h5 className="card-title" onClick={() => window.open(newsUrl, "_blank")}>{title}</h5>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
}
