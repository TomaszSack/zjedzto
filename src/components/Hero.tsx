import "./Hero.css";
import HeroImg from "assets/hero-img.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-end h-screen">
      <img
        className="absolute bottom-0 pb-12 lg:left-0 h-8/18 bg-cover lg:w-auto lg:h-screen z-minus"
        src={HeroImg}
        alt="soczysty burger z bekonem"
      />
      <div className="flex flex-col lg:flex-row justify-end w-full h-14/18 lg:h-full lg:w-7/12 pt-16 lg:pt-0">
        <svg
          className="hidden lg:block svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            className="fill-primary-white"
            points="100 0, 0 100, 100 100, 100 0"
          />
        </svg>
        <div className="flex flex-col justify-center items-center w-full h-full px-8 bg-primary-white text-black space-y-6">
          <h1 className="text-4xl lg:text-6xl 3xl:text-7xl">Głodny?</h1>
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl text-center leading-normal">
            Burgery z najwyszczej jakości mięsa już na Ciebie czekają!
          </h2>
          <Button href="#menu">Sprawdź menu</Button>
        </div>
        <svg
          className="lg:hidden w-full h-1/4 lg:svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            className="fill-primary-white w-full"
            points="0 0, 100 70, 100 100, 100 0"
          />
        </svg>
      </div>
      <a href="#menu" data-testid="arrow-navigator">
        <FontAwesomeIcon
          className="bounce-top absolute right-1/2 bottom-16 h-10 translate-x-1/2 text-primary-orange"
          icon={faChevronDown}
        />
      </a>
    </div>
  );
};

export default Hero;
