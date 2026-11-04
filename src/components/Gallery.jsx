import PhotoCard from "./PhotoCard";
import "../styles/Gallery.css";

function Gallery({ photos, onImageClick }) {
  return (
    <div className="gallery-grid">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onImageClick={onImageClick}
          />
        ))
      ) : (
        <div className="no-results">
          <h3>No photos found</h3>
          <p>Try another search or category.</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;