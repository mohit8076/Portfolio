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
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={datas}
            time={2000}
            width="850px"
            height="150px"
            radius="10px"
            slideNumber={true}
            automatic={true}
            slideBackgroundColor="white"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
