import { useParams } from "react-router-dom";
import data from "../data.json";
import { useState } from "react";
import sourceIcon from "../../public/assets/icon-source.svg";

export default function Planet() {
  const { planetName } = useParams();
  const planet = data.find((planet) => planet.name == planetName);

  const [overviewClicked, setOverviewClicked] = useState<boolean>(true);
  const [structureClicked, setStructureClicked] = useState<boolean>(false);
  const [surfaceClicked, setSurfaceClicked] = useState<boolean>(false);

  const toggleOverview = () => {
    setOverviewClicked(true);
    setStructureClicked(false);
    setSurfaceClicked(false);
  };
  const toggleStructure = () => {
    setOverviewClicked(false);
    setStructureClicked(true);
    setSurfaceClicked(false);
  };
  const toggleSurface = () => {
    setOverviewClicked(false);
    setStructureClicked(false);
    setSurfaceClicked(true);
  };

  return (
    <>
      <div
        className={`info flex flex-row justify-between items-center py-[20px] px-[24px] border-b-[1px] border-b-[#FFFFFF]/20  `}
      >
        <div className="buttons flex flex-col items-center">
          <button
            className={`${
              overviewClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
            }`}
            onClick={toggleOverview}
          >
            OVERVIEW
          </button>
          <div
            style={{ backgroundColor: planet?.rectangleColor }}
            className={`${overviewClicked ? "w-[80px]" : ""} ${
              overviewClicked ? "h-[4px]" : ""
            } relative top-5`}
          ></div>
        </div>
        <div className="buttons flex flex-col items-center">
          <button
            className={`${
              structureClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
            }`}
            onClick={toggleStructure}
          >
            STRUCTURE
          </button>
          <div
            style={{ backgroundColor: planet?.rectangleColor }}
            className={`${structureClicked ? "w-[94px]" : ""} ${
              structureClicked ? "h-[4px]" : ""
            } relative top-5`}
          ></div>
        </div>
        <div className="buttons flex flex-col items-center">
          <button
            className={`${
              surfaceClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
            }`}
            onClick={toggleSurface}
          >
            SURFACE
          </button>
          <div
            style={{ backgroundColor: planet?.rectangleColor }}
            className={`${surfaceClicked ? "w-[80px]" : ""} ${
              surfaceClicked ? "h-[4px]" : ""
            } relative top-5`}
          ></div>
        </div>
      </div>

      <div className="planet-image flex flex-col items-center justify-center mt-[95px]">
        <img
          style={{
            width: planet?.images.sizes.mobile.width,
            height: planet?.images.sizes.mobile.height,
          }}
          src={planet?.images.planet}
          alt="planet image"
        />
      </div>
      <div className="planet-info flex flex-col items-center justify-center gap-[16px] mt-[98px] px-[24px]">
        <h2 className="text-[#fff] text-[40px] font-normal leading-[100%] mb-[16px]">
          {planet?.name}
        </h2>
        <p className="w-[327px] text-center font-normal text-[#fff]/50 text-[13.3px] leading-[22px]">
          {overviewClicked ? planet?.overview.content : ""}
        </p>
        <p className="w-[327px] text-center font-normal text-[#fff]/50 text-[13.3px] leading-[22px]">
          {structureClicked ? planet?.structure.content : ""}
        </p>
        <p className="w-[327px] text-center font-normal text-[#fff]/50 text-[13.3px] leading-[22px]">
          {surfaceClicked ? planet?.geology.content : ""}
        </p>
        <div className="link flex flex-row items-center gap-[4px] ">
          <p className="text-[12px] text-[#fff]/50 font-normal">Source :</p>
          {overviewClicked ? (
            <a
              className="text-[12px] text-[#fff]/50 font-bold"
              href={planet?.overview.source}
            >
              Wikipedia
            </a>
          ) : (
            ""
          )}
          {structureClicked ? (
            <a
              className="text-[12px] text-[#fff]/50 font-bold"
              href={planet?.structure.source}
            >
              Wikipedia
            </a>
          ) : (
            ""
          )}
          {surfaceClicked ? (
            <a
              className="text-[12px] text-[#fff]/50 font-bold"
              href={planet?.geology.source}
            >
              Wikipedia
            </a>
          ) : (
            ""
          )}
          <img src={sourceIcon} alt="link image" />
        </div>
      </div>
      <div className="general-info-box flex flex-col items-center justify-center mt-[28px] px-[24px] mb-[47px] gap-[8px]">
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px]">
            ROTATION TIME
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75]">
            {planet?.rotation}
          </p>
        </div>
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px]">
            REVOLUTION TIME
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75]">
            {planet?.revolution}
          </p>
        </div>
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px]">
            RADIUS
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75]">
            {planet?.radius}
          </p>
        </div>
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px]">
            AVERAGE TEMP.
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75]">
            {planet?.temperature}
          </p>
        </div>
      </div>
    </>
  );
}
