import videoImgOne from "../../../public/assets/img/new/sc1.png";
import videoImgTwo from "../../../public/assets/img/new/sc2.png";
import videoImgThree from "../../../public/assets/img/new/sc3.png";
import videoImgFour from "../../../public/assets/img/new/sc4.png";
import videoImgFive from "../../../public/assets/img/new/sc5.png";
import VideoPlayer from '../shared/VideoPlayer/VideoPlayer';
import Image from 'next/image';
import React from 'react';

// Image imports with descriptive names
const VIDEO_IMAGES = [
  {
    image: videoImgOne,
    alt: "Video background 1",
    className: "d-none d-xl-block mb-25"
  },
  {
    image: videoImgTwo,
    alt: "Video background 2",
    className: "d-none d-xl-block mb-25"
  },
  {
    image: videoImgThree,
    alt: "Video background 3",
    className: "d-none d-xl-block"
  },
  {
    image: videoImgFour,
    alt: "Video background 4",
    className: "d-none d-xl-block"
  },
  {
    image: videoImgFive,
    alt: "Video background 5",
    className: "d-none d-xl-block"
  }
];

const HomeMainVideo = () => {
  return (
    <section className="tp-video-area fix" style={{ height: "100vh", maxHeight: "100vh" }}>
      <div className="container-fluid p-0">
        <div className="tp-video-thumb-wrap">
          {/* First image (hidden on mobile) */}
          <div className={`tp-video-thumb ${VIDEO_IMAGES[0].className}`}>
            <Image style={{ width: "100%", height: "100%" }} src={VIDEO_IMAGES[0].image} alt={VIDEO_IMAGES[0].alt} />
          </div>

          {/* Main video player (always visible) */}
          <div className="tp-video-thumb mb-25">
            <VideoPlayer videoUrl="https://html.aqlova.com/videos/liko/liko.mp4" />
          </div>

          {/* Remaining images */}
          {VIDEO_IMAGES.slice(1).map((img, index) => (
            <div key={`video-img-${index}`} className={`tp-video-thumb ${img.className}`}>
              <Image style={{ width: "100%", height: "100%" }} src={img.image} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMainVideo;