import { use, useState } from "react";
import hamburgerIcon from "../../public/assets/icon-hamburger.svg";
import imageIcon from "../../public/assets/icon-chevron.svg";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);

  const toggleNavigation = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="flex flex-col py-[16px] px-[24px] border-b-[1px] border-b-[#FFFFFF]/20">
        <div className="main-header flex flex-row justify-between items-center">
          <h1 className="text-[#FFFFFF] text-[28px] font-normal tracking-[-1.05px]">
            THE PLANETS
          </h1>
          <img
            src={hamburgerIcon}
            alt="hamburger icon"
            onClick={toggleNavigation}
          />
        </div>
      </header>
      <nav
        className={`${show ? "block" : "hidden"} px-[24px] pt-[24px] mb-[67px]`}
      >
        <ul>
          {data.map((planet) => {
            return (
              <div className="planents flex flex-row justify-between items-center  border-b-[1px] border-b-[#FFFFFF]/20 py-[20px]">
                <div className="planet-name flex flex-row gap-[25px]">
                  <img
                    style={{
                      width: planet.images.sizes.mobileNavigation.width,
                      height: planet.images.sizes.mobileNavigation.height,
                    }}
                    src={planet.images.planet}
                  />
                  <li key={planet.name}>
                    <Link to={planet.name}>{planet.name}</Link>
                  </li>
                </div>
                <div className="arrow">
                  <img src={imageIcon} alt="chevron icon" />
                </div>
              </div>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
