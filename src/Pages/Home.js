import React from "react";
import HomeSlider from "../Components/Sliders/HomeSlider";

const Home = () => {
    return (
        <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to my website!</h1>
        <p className="text-lg text-gray-700">Coming Soon...<br />:D</p>
      </div>
    </div>
    <HomeSlider />
    </div>
    )
}

export default Home