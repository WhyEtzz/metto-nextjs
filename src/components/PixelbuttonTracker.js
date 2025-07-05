import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelButtonTracker = () => {
  useEffect(() => {
    const pixelId = process.env.FBPixel;
    ReactPixel.init(pixelId);
    ReactPixel.track("Track", {message: "Buy From Metto.id", timestamp: Date.now(), readableTimestamp: new Date()});
    console.log({message: "Buy From Metto.id", timestamp: Date.now(), readableTimestamp: new Date()}    )
  }, []);
  return null;
};
export default PixelButtonTracker;