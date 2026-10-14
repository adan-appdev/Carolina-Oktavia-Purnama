"use client";

import { useRef, useState } from "react";

const song = {
  title: "Bulan bintang garis menyilang",
  artist: "Sal Priadi & Wijaya",
  audio: "/music/lagu-1.mp3",
  spotify: "https://open.spotify.com/playlist/37i9dQZF1EJKMN2FqcHf6s?si=48ccca55f8dd4d4e",
};

export default function FavoriteSongs() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Audio gagal diputar:", error);
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="favorite-songs-section">
      <audio
        ref={audioRef}
        src={song.audio}
        preload="metadata"
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration)
        }
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />

      <p>OUR LITTLE PLAYLIST ♡</p>
      <h2>Our Favorite Songs</h2>
      <p>A little melody that reminds me of you.</p>

      <div className="favorite-song-card">
        <div className="favorite-song-cover" aria-hidden="true">
          ♫
        </div>

        <div className="favorite-song-info">
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause lagu" : "Putar lagu"}
        >
          {playing ? "❚❚" : "▶"}
        </button>

        <div className="favorite-song-progress">
          <input
            type="range"
            min={0}
            max={duration || 1}
            step={1}
            value={Math.min(currentTime, duration || 0)}
            aria-label="Posisi lagu"
            onChange={(event) => {
              const audio = audioRef.current;
              if (!audio) return;

              const nextTime = Number(event.target.value);
              audio.currentTime = nextTime;
              setCurrentTime(nextTime);
            }}
          />

          <div>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <a
          href={song.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Spotify ↗
        </a>
      </div>
    </section>
  );
}