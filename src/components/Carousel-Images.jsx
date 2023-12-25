import "daisyui/dist/full.css";

function Carousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://lh3.googleusercontent.com/pw/ABLVV86JGEnAoVsWg8vcIQbxjltIKnyXJPwGVDbZ3EyMJjfuNIYJ9b5tQtc2onScl7liOpRMOVWwTUSJVqW7YM97qZB-xhi01zsDymY3DFXvqHGP1qJ2J9nIIjz8HMhMnQEprW4Pv3q2aNjp2-rr7RHkwBPE=w955-h1273-s-no-gm"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
