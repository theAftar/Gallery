import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import Gallery from "./components/Gallery";
import ImageModal from "./components/ImageModal";
import Footer from "./components/Footer";

import photos from "./data/photos";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = photos.filter((photo) => {
    const matchesCategory =
      activeCategory === "All" ||
      photo.category === activeCategory;

    const matchesSearch = photo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleNavigate = (direction) => {
    if (!selectedPhoto || filteredPhotos.length === 0) return;

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const nextIndex =
      (currentIndex + direction + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <main>
        <Hero />

        <section className="gallery-section" id="gallery">
          <div className="section-heading">
            <div>
              <span className="section-label">OUR COLLECTION</span>
              <h2>Explore the Gallery</h2>
              <p>
                A collection of beautiful moments from around the world.
              </p>
            </div>

            <span className="photo-count">
              {filteredPhotos.length} Photos
            </span>
          </div>

          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <Gallery
            photos={filteredPhotos}
            onImageClick={setSelectedPhoto}
          />
        </section>
      </main>

      <Footer />

      <ImageModal
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={handleNavigate}
      />
    </>
  );
}

export default App;