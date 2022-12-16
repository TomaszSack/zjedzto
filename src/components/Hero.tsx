import "./Hero.css";
import HeroImg from "../assets/hero-img.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-end h-screen">
      <img className="absolute left-0 h-screen z-minus" src={HeroImg} alt="soczysty burger z bekonem" />
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
          <Button href="#menu">Sprawdź menu</Button>
        </div>
      </div>
      <a href="#menu">
        <FontAwesomeIcon
          className="bounce-top absolute right-1/2 bottom-4 h-10 translate-x-1/2 text-secondary-orange"
          icon={faChevronDown}
        />
      </a>
    </div>
  );
};

export default Hero;
