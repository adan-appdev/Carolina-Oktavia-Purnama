
"use client";

import { useEffect, useRef, useState } from "react";

export default function SurpriseButton() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      videoRef.current?.pause();
    };
  }, [isOpen]);

  const closePopup = () => {
    videoRef.current?.pause();
    setIsOpen(false);
  };

  return (
    <>
      <section className="surprise-section">
        <p className="surprise-kicker">A LITTLE SECRET FOR YOU ♡</p>

        <h2 className="surprise-title">
          Ceng, ada sesuatu buat kamu...
        </h2>

        <p className="surprise-description">
          Aku punya kejutan kecil yang ingin kamu lihat 🌷
        </p>

        <button
          type="button"
          className="surprise-open-button"
          onClick={() => setIsOpen(true)}
        >
          🎁 Psst... klik aku, Ceng!
        </button>
      </section>

      {isOpen && (
        <div
          className="surprise-overlay"
          onClick={closePopup}
        >
          <div
            className="surprise-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="surprise-heading"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="surprise-close-button"
              onClick={closePopup}
              aria-label="Tutup kejutan"
            >
              ×
            </button>

            <p className="surprise-modal-kicker">
              🌷 A SPECIAL SURPRISE 🌷
            </p>

            <h2
              id="surprise-heading"
              className="surprise-modal-title"
            >
              For My Ceng ♡
            </h2>

            <div className="surprise-floral-frame">
              <span className="surprise-flower flower-top-left">✿</span>
              <span className="surprise-flower flower-top-right">❀</span>
              <span className="surprise-flower flower-bottom-left">❀</span>
              <span className="surprise-flower flower-bottom-right">✿</span>

              <span className="surprise-flower flower-left">🌼</span>
              <span className="surprise-flower flower-right">🌷</span>

              <div className="surprise-video-inner">
                <video
                  ref={videoRef}
                  className="surprise-video"
                  src="/videos/surprise-ceng.mp4"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Browser kamu tidak mendukung pemutaran video.
                </video>
              </div>
            </div>

            <p className="surprise-message">
              A little video, made with love ♡
            </p>

            <div className="surprise-decoration">
              ✿ · · · ♡ · · · ✿
            </div>
          </div>
        </div>
      )}
    </>
  );
}
