import { useState } from "react";
import "../styles/PhotoCard.css";

function PhotoCard({ photo, onImageClick }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="photo-card">
      <div className="photo-image-wrapper">
        <img
          src={photo.image}
          alt={photo.title}
          className="photo-image"
          loading="lazy"
          onClick={() => onImageClick(photo)}
        />

        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Remove favorite" : "Add favorite"}
        >
          {liked ? "♥" : "♡"}
        </button>

        <button
          className="view-button"
          onClick={() => onImageClick(photo)}
        >
          View Image ↗
        </button>
      </div>

      <div className="photo-info">
        <div>
          <h3>{photo.title}</h3>
          <p>{photo.category}</p>
        </div>

        <span className="photo-arrow">↗</span>
      </div>
    </article>
  );
}

export default PhotoCard;