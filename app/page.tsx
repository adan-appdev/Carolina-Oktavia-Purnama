"use client";

import { useState } from "react";
import FavoriteSongs from "./components/FavoriteSongs";
import MemoryAlbum from "./components/MemoryAlbum";
import SurpriseButton from "./components/SurpriseButton";
import CuteCursor from "./components/CuteCursor";

const timelineMemories = [
  {
    id: 1,
    date: "WAKTU KITA MASIH KECIL",
    title: "Pertama kali kenal ♡",
    story:
      "Kita tuhh dulu pas kecil udah saling kenal ga sii, trus kek bertumbuh besar kitaa kek gakenal satu sama laenn. Lucu yaa, ternyata kita pernah ada di cerita yang sama bahkan sebelum kita sedekat sekarang.",
    image: "/images/timeline1.jpg",
    alt: "Kenangan masa kecil kita",
    caption: "our little beginning ♡",
    sticker: "୨୧",
  },
  {
    id: 2,
    date: "21 AGUSTUS 2026",
    title: "Mulai dekat ✿",
    story:
      "Disini kamu ajak aku buat nonton DBL dan ini pertama kali aku keluar sama kamuu, dan pertama kalii aku nonton DBL dan pass juga di hari aku ulang tahun. Hari yang sederhana, tapi akhirnya jadi salah satu kenangan yang berharga buat aku.",
    image: "/images/kenangan-2.jpg",
    alt: "Kenangan pertama kali pergi bersama",
    caption: "a birthday to remember ♡",
    sticker: "♡",
  },
  {
    id: 3,
    date: "7 OKTOBER 2026",
    title: "Momen paling berkesan",
    story:
      "Di moment ini aku kek ngerasa bebener hadir di duniamu, kek semua effortku mbe tetemenku kebayar banget pas kamu ngucapin makasi sambil senyum dan aga nangis dikit.... Rasanya bahagia banget bisa jadi bagian dari momen itu.",
    image: "/images/timeline2.jpg",
    alt: "Momen paling berkesan bersama Ceng",
    caption: "a moment close to my heart ♡",
    sticker: "✿",
  },
  {
    id: 4,
    date: "SETIAP HARII",
    title: "Momen spesial lainnya ♡",
    story:
      "Aku seneng bangett ngelewatin hari harii bareng kamuuu. Entah itu jalan bareng, cerita hal random, ketawa karena hal kecil, atau cuma menghabiskan waktu bersama. Buat aku, momen sederhana sama kamu juga berarti banget.",
    image: "/images/timeline3.jpg",
    alt: "Kumpulan momen spesial kita",
    caption: "every little day with you ♡",
    sticker: "♡",
  },
];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [letterOpened, setLetterOpened] = useState(false);

  return (
    <main className="scrapbook-page min-h-screen overflow-hidden px-5 py-8 sm:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between">
          <a href="#" className="brand-logo">
            <span className="brand-heart">♥</span> little things about us
          </a>

          <span className="date-label">MADE WITH LOVE ♡</span>
        </nav>

        {/* Hero */}
        <section className="hero-section relative flex flex-col items-center py-16 text-center sm:py-24">
          <span className="floating-sticker sticker-one">♡</span>
          <span className="floating-sticker sticker-two">✿</span>
          <span className="floating-sticker sticker-three">୨୧</span>

          <p className="eyebrow">A LITTLE CORNER OF MY HEART</p>

          <h1 className="hero-title mt-5">
            For My
            <br />
            <span>Ceng ♡</span>
          </h1>

          <p className="hero-description mt-5">
            A little scrapbook filled with
            <br className="hidden sm:block" />
            the moments I never want to forget.
          </p>

          <button
            type="button"
            onClick={() => setOpened(!opened)}
            className="love-button mt-8"
          >
            {opened ? "You are my favorite ♡" : "Open my little world ♡"}
            <span aria-hidden="true"> ↗</span>
          </button>

          {opened && (
            <div className="welcome-note mt-5">
              <span>💌</span>
              <p>
                Hai, Ceng! Aku bikin sudut kecil ini khusus buat kamu.
                Semoga setiap halamannya bikin kamu senyum, ya.
              </p>
            </div>
          )}

          {/* Polaroid Gallery */}
          <div className="polaroid-area mt-14">
            <div className="polaroid polaroid-left">
              <div className="photo-placeholder photo-pink">
                <img
                  src="/images/kenangan-1.jpg"
                  alt="Kenangan manis pertama"
                  className="memory-photo"
                />
              </div>
              <p>my favorite person ♡</p>
            </div>

            <div className="polaroid polaroid-center">
              <div className="photo-placeholder photo-cream">
                <img
                  src="/images/kenangan-2.jpg"
                  alt="Kenangan manis kedua"
                  className="memory-photo"
                />
              </div>
              <p>little moments ✿</p>
            </div>

            <div className="polaroid polaroid-right">
              <div className="photo-placeholder photo-peach">
                <img
                  src="/images/kenangan-3.jpg"
                  alt="Kenangan manis ketiga"
                  className="memory-photo"
                />
              </div>
              <p>you & me ♡</p>
            </div>

            <span className="photo-heart">♥</span>
            <span className="photo-sparkle">✦</span>
          </div>

          <p className="scroll-hint mt-12">
            A SMALL WORLD, JUST FOR YOU
            <span>↓</span>
          </p>
        </section>

        {/* Intro Note */}
        <section className="intro-card mx-auto mb-10 max-w-2xl">
          <span className="tape-decoration" />

          <p className="intro-kicker">DEAR CENG,</p>

          <h2>
            Some people make
            <br />
            ordinary days feel special.
          </h2>

          <p className="intro-description">
            And somehow, you became one of my favorite parts of life.
            So I made this little place to keep our stories, our songs,
            and all the tiny things that mean so much to me.
          </p>

          <span className="intro-signature">with love, always ♡</span>
        </section>

        {/* Our Little Timeline */}
        <section className="timeline-section">
          <div className="timeline-header">
            <span className="timeline-kicker">
              OUR LITTLE STORYBOOK ♡
            </span>

            <h2 className="timeline-heading">
              Our Little
              <br />
              <span>Timeline</span>
            </h2>

            <p className="timeline-description">
              Dari dua anak kecil yang pernah saling kenal,
              sampai jadi dua orang yang punya banyak cerita bersama.
            </p>

            <span className="timeline-header-decoration">୨୧</span>
          </div>

          <div className="timeline-list">
            {timelineMemories.map((memory, index) => (
              <article
                key={memory.id}
                className={`timeline-item ${
                  index % 2 === 1 ? "timeline-item-reverse" : ""
                }`}
              >
                <div className="timeline-photo-wrap">
                  <span className="timeline-tape" />

                  <div className="timeline-photo">
                    <img src={memory.image} alt={memory.alt} />

                    <p className="timeline-photo-caption">
                      {memory.caption}
                    </p>
                  </div>

                  <span className="timeline-photo-sticker">
                    {memory.sticker}
                  </span>
                </div>

                <div className="timeline-dot-wrap">
                  <span className="timeline-dot">{memory.id}</span>
                </div>

                <div className="timeline-card">
                  <span className="timeline-date">{memory.date}</span>

                  <h3 className="timeline-card-title">
                    {memory.title}
                  </h3>

                  <p className="timeline-card-story">{memory.story}</p>

                  <span className="timeline-card-heart">♡</span>
                </div>
              </article>
            ))}
          </div>

          <div className="timeline-end-note">
            <span>♡</span>
            <p>
              And the story continues...
              <br />
              <strong>masih banyak cerita yang mau kita buat, Ceng.</strong>
            </p>
            <span>♡</span>
          </div>
        </section>

        {/* sal priadi */}
        <FavoriteSongs />

       {/* Our Memory Album */}
        <MemoryAlbum />

         {/* surprise ceng lov */}
        <SurpriseButton />


        {/* Love Letter */}
        <section className="letter-section mx-auto mb-16 max-w-2xl">
          <p className="letter-eyebrow">A LITTLE LETTER FOR YOU</p>

          <h2 className="letter-heading">
            Open when you miss me
            <span> ♡</span>
          </h2>

          {/* Amplop tetap seperti desain awal */}
          <button
            type="button"
            className="envelope"
            onClick={() => setLetterOpened(true)}
            aria-label="Buka surat cinta"
          >
            <span className="envelope-back" />

            <span className="envelope-paper">
              <span className="paper-heart">♡</span>
              <span className="paper-title">Dear Ceng,</span>
              <span className="paper-hint">a little note for you</span>
            </span>

            <span className="envelope-front" />
            <span className="envelope-flap" />
            <span className="envelope-seal">♥</span>
          </button>

          <p className="letter-instruction">
            tap the envelope to open your letter ♡
          </p>
        </section>

        {/* Footer */}
        <footer className="page-footer">
          <span>made with a little extra love</span>
          <span>♡ ceng ♡</span>
          <span>our little universe · 2026</span>
        </footer>
      </div>

      {/* Love Letter Popup */}
      {letterOpened && (
        <div
          className="letter-modal-overlay"
          onClick={() => setLetterOpened(false)}
        >
          <div
            className="letter-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="letter-modal-close"
              onClick={() => setLetterOpened(false)}
              aria-label="Tutup surat"
            >
              ×
            </button>

            <span className="modal-sticker modal-sticker-top">♡</span>
            <span className="modal-sticker modal-sticker-bottom">✿</span>

            <div className="letter-modal-content">
              <p className="modal-eyebrow">
                a little letter, just for you
              </p>

              <div className="letter-divider">୨୧ ── ♡ ── ୨୧</div>

              <h2 id="letter-title">
                Dear Ceng, <span>♡</span>
              </h2>

              <div className="letter-message">
                <p>Hai, Ceng sayanggg. ♡</p>

                <p>
               haiii sayang, sebenernya bingung mau ngomong apaa, 
               but there's something i really want you to know. aku 
               seneng banget bisa kenal kamu sampai sedekat ini. hal-hal
               kecil yang kita lewatin bareng, entah itu cerita random,
               ketawa bareng, atau sekadar ngabisin waktu sama kamu,
               ternyata bisa jadi hal yang sespesial itu buat aku.
               maybe it's just a little thing for you, but it's something  
               i'll always cherish.


                </p>

                <p>
                 makasiii yaa, udah hadir dan jadi diri kamu sendiri. makasiii
                 uda mau berbagi cerita sama aku, uda ngeluangin waktu, dan udah
                 bikin hari-hari aku punya cerita yang bisa aku inget sambil senyum
                 sendiri. mungkin buat kamu semuanya biasa aja, but trust me, it means 
                 a lot to me. i'm really grateful to have you in my life, sayang.
                </p>

                <p>
                  aku juga nggak tahu ke depannya bakal kayak gimana. i guess none of us
                 really knows what the future holds. aku nggak bisa janji kalau semuanya 
                 bakal selalu baik-baik aja, atau kalau kita nggak akan pernah ngelewatin 
                 hari yang berat. tapi aku harap, sesibuk atau secapek apa pun kita nanti, 
                 kita tetap bisa saling ngerti, saling dengerin, dan tetap menghargai satu 
                 sama lain. because at the end of the day, i just want us to keep being kind to each other.
                </p>

                <p>
                 aku cuma pengin kamu selalu punya alasan buat senyum, bahkan di hari-hari 
                 ketika semuanya terasa melelahkan. jangan terlalu keras sama diri sendiri, 
                 yaa. you don't have to be okay all the time, and you don't have to figure 
                 everything out by yourself. kamu mungkin nggak selalu sadar, tapi kamu itu 
                 berharga, and i hope you see yourself the way the people who care about you see you.
                </p>

                <p>
                 sekali lagi, makasih yaa, udah jadi bagian dari cerita aku. i'm happy i got 
                 to know you, and if there's one thing i wish for, it's that we still get to 
                 make more little memories together. no matter how simple they are, i hope 
                 they'll always be something worth remembering. 🤍
                </p>

                <p className="letter-last-line">
                  Stay happy, my favorite person. ♡
                </p>
              </div>

              <div className="letter-sign-off">
                <span>with lots of love,</span>
                <strong>your Ceng ♡</strong>
              </div>

              <div className="letter-divider letter-divider-bottom">
                made with love, just for you ♡
              </div>
            </div>

            <button
              type="button"
              className="letter-modal-bottom-button"
              onClick={() => setLetterOpened(false)}
            >
              Tutup surat dengan cinta ♡
            </button>
          </div>
        </div>
      )}
    </main>
  );
}