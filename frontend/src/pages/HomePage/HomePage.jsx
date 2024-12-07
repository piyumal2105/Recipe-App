// eslint-disable-next-line no-unused-vars
import React from "react";
import img01 from "../../assets/04.avif";
import img02 from "../../assets/05.webp";
import { useSelector } from "react-redux";

function HomePage() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`bg-gradient-to-r ${
          theme === "dark"
            ? "from-gray-800 to-gray-900"
            : "from-pink-100 to-white"
        } py-16 px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-y-8 lg:gap-y-0 lg:gap-x-6`}
      >
        <div className="lg:w-[45%] text-center lg:text-left">
          <h1
            className={`text-4xl lg:text-5xl font-bold ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Your Daily Dish <span className="text-red-500">A Food Journey</span>
          </h1>
          <p
            className={`mt-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Discover, share, and explore a world of flavors. Create your own
            recipes, find inspiration, and embark on a culinary journey like
            never before!
          </p>
        </div>
        <div className="lg:w-[45%] flex justify-center lg:justify-end">
          <img
            src={img02}
            alt="Dish"
            className="rounded-full shadow-lg max-w-full lg:max-w-[90%]"
          />
        </div>
      </div>

      <div
        className={`py-16 px-6 lg:px-20 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-200"
            : "bg-white text-gray-800"
        } text-center lg:text-left`}
      >
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <img
              src={img01}
              alt="Share Recipes"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10">
            <h2 className="text-4xl font-bold">
              Share Your <span className="text-red-500">Recipes</span>
            </h2>
            <p
              className={`mt-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Discover a world of flavors with our recipe app! Whether you are a
              seasoned chef or a kitchen newbie, explore a diverse collection of
              recipes tailored to your taste. From quick meals to gourmet
              dishes, plan, share, and savor your culinary journey with ease.
              Your perfect recipe companion awaits!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
