
"use client";

import { useState } from "react";

const memories = [
  {
    image: "/images/kenangan-1.jpg",
    title: "My Favorite Person ♡",
    caption: "Salah satu foto yang pengen aku simpan lama-lama.",
  },
  {
    image: "/images/litlemoment.jpg",
    title: "Little Moments ✿",
    caption: "Hari sederhana yang akhirnya jadi kenangan berharga.",
  },
  {
    image: "/images/kenangan-3.jpg",
    title: "You & Me ♡",
    caption: "Semoga masih banyak cerita indah yang bisa kita simpan.",
  },
  {
    image: "/images/everymoment.jpg",
    title: "With you every moment",
    caption: "Selalu sama kamuu ngapain ajaa",
  },
  {
    image: "/images/timeline2.jpg",
    title: "A Moment to Remember",
    caption: "Ada momen kecil yang ternyata berarti begitu besar.",
  },
  {
    image: "p/images/remember.jpg",
    title: "Every Little Day ♡",
    caption: "Karena hal sederhana bersama kamu juga istimewa.",
  },
];

export default function MemoryAlbum() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMemory = memories[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((index) =>
      index === 0 ? memories.length - 1 : index - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((index) =>
      index === memories.length - 1 ? 0 : index + 1
    );
  };

  return (
    <section className="memory-album-section">
      <p className="memory-album-kicker">LITTLE MOMENTS, BIG MEMORIES ♡</p>

      <h2 className="memory-album-heading">
        Our Memory
        <br />
        <span>Album</span>
      </h2>

      <p className="memory-album-description">
        Setiap foto punya cerita. Ini beberapa halaman kecil dari cerita kita.
      </p>

      <div className="memory-album-card">
        <span className="memory-album-sticker">୨୧</span>

        <div className="memory-album-photo-wrap">
          <img
            key={currentMemory.image}
            src={currentMemory.image}
            alt={currentMemory.title}
            className="memory-album-photo"
          />
        </div>

        <div className="memory-album-details">
          <p className="memory-album-counter">
            MEMORY {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(memories.length).padStart(2, "0")}
          </p>

          <h3>{currentMemory.title}</h3>
          <p>{currentMemory.caption}</p>
        </div>

        <div className="memory-album-controls">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Foto sebelumnya"
          >
            ← Previous
          </button>

          <div className="memory-album-dots">
            {memories.map((memory, index) => (
              <button
                key={memory.image}
                type="button"
                className={`memory-album-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Buka foto ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Foto berikutnya"
          >
            Next →
          </button>
        </div>
      </div>

      <p className="memory-album-footer">
        a little piece of us, kept forever in this little corner ♡
      </p>
    </section>
  );
}
