import "daisyui/dist/full.css";

function Hero() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/pw/ABLVV86JGEnAoVsWg8vcIQbxjltIKnyXJPwGVDbZ3EyMJjfuNIYJ9b5tQtc2onScl7liOpRMOVWwTUSJVqW7YM97qZB-xhi01zsDymY3DFXvqHGP1qJ2J9nIIjz8HMhMnQEprW4Pv3q2aNjp2-rr7RHkwBPE=w955-h1273-s-no-gm)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hola por ahí</h1>
      <p className="mb-5">Bienvenidos a mi babyShower. Este es un esfuerzo de mis papitos hacia ustedes. Espero les guste un monton y se diviertan mucho ♥️</p>
      <button className="btn btn-error">Empecemos</button>
    </div>
  </div>
</div>
  );
}

export default Hero;
