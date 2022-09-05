import Carousel from "./Corosel";

function Slider() {
  const datas = [
    {
      src: "html.png",
    },
    {
      src: "css.png",
    },
    {
      src: "js.png",
    },
    {
      src: "react.png",
    },
    {
      src: "next.png",
    },
    {
      src: "tailwind.png",
    },
    {
      src: "redux.png",
    },
    {
      src: "git.png",
    },
    {
      src: "github.png",
    },
  ];
  return (
    <div className="App bg-gradient-to-bl from-rose-100 to-teal-100">
      {/* <div style={{ textAlign: "center" }}> */}
        <Carousel
          data={datas}
          time={2000}
          width="100%"
          height="100%"
          radius="10px"
          slideNumber={true}
          automatic={true}
          // slideBackgroundColor="white"
          thumbnails={true}
          // thumbnailWidth="100px"
        />
      </div>
    // </div>
  );
}

export default Slider;
