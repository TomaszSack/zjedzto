import "./Hero.css";
import HeroImg from "../assets/hero-img.jpeg";

const Hero = () => {
  return (
    <div className="flex justify-end h-screen">
      <img className="absolute left-0 h-screen z-minus" src={HeroImg} />
      <div className="flex justify-end h-full w-7/12">
        <svg className="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon
            className="fill-primary-white"
            points="100 0, 0 100, 100 100, 100 0"
          />
        </svg>
        <div className="flex flex-col justify-center items-center w-full h-full px-8 bg-primary-white text-black space-y-6">
          <h1 className="text-7xl">Głodny?</h1>
          <h2 className="text-4xl text-center leading-normal">
            Burgery z najwyszczej jakości mięsa już na Ciebie czekają!
          </h2>
          <a
            href="#test"
            className="bg-secondary-orange py-2 px-10 text-white text-3xl rounded-2xl"
          >
            Sprawdź menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
