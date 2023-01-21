import React from "react";
import { Link } from "react-router-dom";
import img from '../../assests/hero-banner.png.webp'
import Products from "./Products";
import Stats from "./Stats";

const Home = () => {
  return (
    <section className="text-gray-600 bg-slate-200 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-gray-500 text-2xl font-semibold mb-5">
            Shop is fun
          </h1>
          <h1 className="title-font sm:text-4xl lg:text-5xl mb-4 font-bold text-gray-900">
            BROWSE OUR
            <br className="hidden lg:inline-block" />
            PREMIUM PRODUCT
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link to='/shop'>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg w-48">
                Browse Product
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-[500px]"
            alt="hero"
            src={img}
          />
        </div>
      </div>
      <Products/>
      <Stats/>
    </section>
  );
};

export default Home;
