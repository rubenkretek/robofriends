import React from "react";

const Card = () => {
  return (
    <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <img src="https://robohash.org/test?200x200" alt="robot" />
      <div>
        <h2>John Doe</h2>
        <p>john.doe@hotmail.co.uk</p>
      </div>
    </div>
  );
};

export default Card;
