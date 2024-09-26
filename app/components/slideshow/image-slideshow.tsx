'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Elephant from '../../../public/assets/Elephant.jpg';
import esperanceImg from '../../../public/assets/esperance.jpg';
import EsperanceMarina from '../../../public/assets/EsperanceMarina.jpg';
import FremantlePier from '../../../public/assets/FremantlePier.jpg';
import koalaImg from '../../../public/assets/koala.jpg';
import lakebonnyImg from '../../../public/assets/lakebonny.jpg';
import lincolnsrockImg from '../../../public/assets/lincolnsrock.jpg';
import SandyBeach from '../../../public/assets/SandyBeach.jpg';
import TravSunset from '../../../public/assets/TravSunset.jpg';
import SunsetWA from '../../../public/assets/SunsetWA.jpg';
import mga from '../../../public/assets/mga.jpg';



import classes from './image-slideshow.module.css';

const images = [
    { image: Elephant, alt: 'ElephantRocks' },
    { image: esperanceImg, alt: 'Western Australia Southern Coast' },
    { image: EsperanceMarina, alt: 'Esperance Marina' },
    { image: FremantlePier, alt: 'Fremantle Pier' },
    { image: koalaImg, alt: 'Native ' },
    { image: lakebonnyImg, alt: 'South Australian Riverland' },
    { image: lincolnsrockImg, alt: 'Named for Mountianeer' },
    { image: SandyBeach, alt: 'Sandy Beach, Hawaii' },
    { image: TravSunset, alt: 'Sunset, Hawaii' },
    { image: SunsetWA, alt: 'Sunset WA' },
    { image: mga, alt: 'mga' },

];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}