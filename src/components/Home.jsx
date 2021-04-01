import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="pb-2">
        <img
          className="headshot rounded-circle m-2"
          src={process.env.PUBLIC_URL + "/assets/headshot1.jpg"}
        />
      </div>

      <div className="bg-dark pb-2 text-center">
        <span className="section-title m-5 text-white">Hi!</span>
      </div>

      <div className="pb-2 text-end">
        <img
          className="headshot rounded-circle m-2"
          src={process.env.PUBLIC_URL + "/assets/headshot2.jpg"}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
