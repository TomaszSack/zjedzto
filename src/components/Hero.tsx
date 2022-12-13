import "./Hero.css";
import HeroImg from "../assets/hero-img.jpeg";

const Hero = () => {
  return (
    <div className="flex justify-end w-screen h-screen">
      <img className="absolute left-0 h-full z-minus" src={HeroImg} />
      <div className="flex justify-end h-full w-7/12">
        <svg className="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon
            className="fill-primary-white"
            points="100 0, 0 100, 100 100, 100 0"
          />
        </svg>
        <div className="flex flex-col justify-center items-center w-full h-full bg-primary-white text-black">
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
