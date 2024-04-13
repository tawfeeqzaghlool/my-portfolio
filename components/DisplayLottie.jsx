import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import { fetchLottieAnimation } from "../hook/lottieUtils"; // Adjust path if needed

const GreetingLottie = ({ animationPath }) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLottieAnimation(animationPath);
        setAnimationData(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching Lottie animation:", error);
      }
    };

    fetchData();
  }, [animationPath]);

  const handleClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div onClick={handleClick} className="animation-container">
      {error ? (
        <p>Error loading animation: {error.message}</p>
      ) : (
        animationData && (
          <Lottie
            animationData={animationData}
            play={isPlaying} // Set play state
            loop // Loop by default
          />
        )
      )}
    </div>
  );
};

export default GreetingLottie;
