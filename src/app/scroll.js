"use client" 
const { useEffect } = require("react");


export default function ScrollPercentage() {
    useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FBPixel);
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
    useEffect(() => {
        const handleScroll = (event) => {
            document.querySelector(".scroll_percentage").style.width = Math.round(window.scrollY/(document.body.offsetHeight - window.innerHeight) * 100)+"%"
         // console.log(Math.round(window.scrollY/(document.body.offsetHeight - window.innerHeight) * 100));
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className="bg-green-900 w-0 h-0 py-1 scroll_percentage sticky top-[99.3%] z-50">
            {/* If U See This That Mean You Are https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs */}
        </div>
    )


}