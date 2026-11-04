import { useEffect } from "react";
import "../styles/ImageModal.css";

function ImageModal({ photo, photos, onClose, onNavigate }) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [photo, onClose, onNavigate]);

  if (!photo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <button
          className="modal-nav modal-prev"
          onClick={() => onNavigate(-1)}
          aria-label="Previous image"
        >
          ‹
        </button>

        <img src={photo.image} alt={photo.title} />

        <button
          className="modal-nav modal-next"
          onClick={() => onNavigate(1)}
          aria-label="Next image"
        >
          ›
        </button>

        <div className="modal-caption">
          <h3>{photo.title}</h3>
          <p>{photo.category}</p>
          <small>
            {photos.findIndex((item) => item.id === photo.id) + 1}
            {" / "}
            {photos.length}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;