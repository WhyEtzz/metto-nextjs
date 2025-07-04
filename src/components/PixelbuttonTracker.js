import { useEffect, useState } from 'react';
import { FacebookPixel } from 'react-meta-pixel';

const useFacebookPixel = () => {
  const [facebookPixel, setFacebookPixel] = useState<FacebookPixel | null>(null);

  useEffect(() => {
    const initializeFacebookPixel = async () => {
      const pixel = new FacebookPixel({
        pixelID: process.env.NEXT_PUBLIC_FBpixel,
      });

      pixel.init({});

      setFacebookPixel(pixel);
    };

    initializeFacebookPixel();
  }, []);

  return facebookPixel;
};

export default useFacebookPixel;