import { useState } from "react";
import hamburgerIcon from "../../public/assets/icon-hamburger.svg";
import imageIcon from "../../public/assets/icon-chevron.svg";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const toggleNavigation = () => {
    setShow(!show);
  };

  const handleMouseEnter = (planetName: string) => {
    setIsHovered(planetName);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
      <div className="dk:flex dk:flex-row dk:items-center dk:justify-between dk:pl-[32px] dk:pr-[40px] dk:pt-[22px] dk:pb-[27px]">
        <header className="flex flex-col py-[16px] px-[24px] border-b-[1px] border-b-[#FFFFFF]/20 tb:border-none tb:py-0 tb:pt-[32px] dk:pt-0 dk:px-0">
          <div className="main-header flex flex-row justify-between items-center">
            <h1 className="text-[#FFFFFF] text-[28px] font-normal tracking-[-1.05px] tb:text-center w-full dk:w-[180px] ">
              THE PLANETS
            </h1>
            <img
              src={hamburgerIcon}
              alt="hamburger icon"
              onClick={toggleNavigation}
              className="tb:hidden"
            />
          </div>
        </header>
        <nav
          className={`${
            show ? "block" : "hidden"
          } tb:block px-[24px] pt-[24px] mb-[67px] bg-nav tb:pt-[39px] tb:px-[52px] tb:mb-[27px] dk:w-full dk:mb-0 dk:pt-0 dk:px-0`}
        >
          <ul className="tb:flex tb:flex-row tb:items-center tb:justify-between dk:justify-end dk:items-center dk:gap-[33px]">
            {data.map((planet) => {
              return (
                <div
                  key={planet.name}
                  className="planents flex flex-row justify-between items-center  border-b-[1px] border-b-[#FFFFFF]/20 py-[20px] tb:border-none"
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(planet.name)}
                    onMouseLeave={handleMouseLeave}
                    className="planet-name flex flex-row gap-[25px]"
                  >
                    <img
                      className="tb:hidden"
                      style={{
                        width: planet.images.sizes.mobileNavigation.width,
                        height: planet.images.sizes.mobileNavigation.height,
                      }}
                      src={planet.images.planet}
                    />
                    <li
                      key={planet.name}
                      className="text-[#fff] text-[15px] font-bold tracking-[1.36px] tb:text-[11px] flex flex-col items-center justify-center"
                    >
                      <Link to={planet.name}>{planet.name}</Link>
                      {isHovered === planet.name && (
                        <div
                          style={{ backgroundColor: planet?.rectangleColor }}
                          className={`mb:hidden dk:block tb:hidden dk:w-[50px] dk:h-[5px] dk:absolute dk:top-[1px]`}
                        ></div>
                      )}
                    </li>
                  </div>
                  <div className="arrow tb:hidden">
                    <img src={imageIcon} alt="chevron icon" />
                  </div>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="line mb:hidden tb:block tb:w-full tb:border-[1px] tb:border-[#fff]/20"></div>
    </>
  );
}
