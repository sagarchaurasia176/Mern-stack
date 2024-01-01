import React from "react";
function ConditionalRenderingUsingJsx() {
  const IMAGES = [
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg",
  ];

  const Login = () => (
    <div>
      <h3>Login to Continue</h3>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
  const Home = () => (
    <div>
      <h3>Welcome to home!</h3>
      <h5>Enjoy this catalog of pictures</h5>
      {IMAGES.map((i) => (
        <img key={i} src={i} />
      ))}
    </div>
  );

  const App = () => {
    // create variable here
    let userLoggedIn = false;
    // return with ternary operator here
    return <></>;
  };
  let userLoggedIn = true;
  return (
    <>
      <h1> user {userLoggedIn && <Home />}</h1>
    </>
  );
}

export default ConditionalRenderingUsingJsx;
