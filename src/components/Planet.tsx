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
      <div className="mb:block tb:hidden dk:hidden">
        <div
          className={`info flex flex-row justify-between items-center py-[20px] px-[24px] border-b-[1px] border-b-[#FFFFFF]/20 tb:border-none tb:flex-col tb:gap-[16px] `}
        >
          <div className="buttons flex flex-col items-center ">
            <button
              className={`${
                overviewClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
              } tb:flex tb:flex-row tb:py-[12px] tb:pl-[28px] tb:border-[1px] tb:w-[281px] tb:items-start`}
              onClick={toggleOverview}
            >
              <span className="mr-[17px] hidden tb:block">01</span>OVERVIEW
            </button>
            <div
              style={{ backgroundColor: planet?.rectangleColor }}
              className={`${overviewClicked ? "w-[80px]" : ""} ${
                overviewClicked ? "h-[4px]" : ""
              } relative top-5 tb:hidden`}
            ></div>
          </div>
          <div className="buttons flex flex-col items-center ">
            <button
              className={`${
                structureClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
              } tb:flex tb:flex-row tb:py-[12px] tb:pl-[28px] tb:border-[1px] tb:w-[281px] tb:items-start `}
              onClick={toggleStructure}
            >
              <span className="mr-[17px] hidden tb:block">02</span>STRUCTURE
            </button>
            <div
              style={{ backgroundColor: planet?.rectangleColor }}
              className={`${structureClicked ? "w-[94px]" : ""} ${
                structureClicked ? "h-[4px]" : ""
              } relative top-5 tb:hidden`}
            ></div>
          </div>
          <div className="buttons flex flex-col items-center  ">
            <button
              className={`${
                surfaceClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
              } tb:flex tb:flex-row tb:py-[12px] tb:pl-[28px] tb:border-[1px] tb:w-[281px] tb:items-start`}
              onClick={toggleSurface}
            >
              <span className="mr-[17px] hidden tb:block">03</span>SURFACE
            </button>
            <div
              style={{ backgroundColor: planet?.rectangleColor }}
              className={`${surfaceClicked ? "w-[80px]" : ""} ${
                surfaceClicked ? "h-[4px]" : ""
              } relative top-5 tb:hidden`}
            ></div>
          </div>
        </div>

        <div className="planet-image flex flex-col items-center justify-center mt-[95px] ">
          <img
            className={`${
              overviewClicked || surfaceClicked ? "block" : "hidden"
            }`}
            style={{
              width: planet?.images.sizes.mobile.width,
              height: planet?.images.sizes.mobile.height,
            }}
            src={planet?.images.planet}
            alt="planet image"
          />
          <img
            className={`${structureClicked ? "block" : "hidden"}`}
            style={{
              width: planet?.images.sizes.mobile.width,
              height: planet?.images.sizes.mobile.height,
            }}
            src={planet?.images.internal}
            alt="planet image"
          />
          <img
            className={`${
              surfaceClicked ? "block" : "hidden"
            } absolute top-[370px]`}
            style={{
              width: "70px",
              height: "85px",
            }}
            src={planet?.images.geology}
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
      </div>

      {/*}    after mobile build        {*/}
      <div className="position-dekstop mb:hidden tb:block dk:block dk:flex dk:flex-col dk:pl-[165px] dk:pr-[165px]">
        <div className="big mb:hidden tb:block dk:block dk:flex dk:flex-row dk:justify-between">
          <div className="planet-image flex flex-col items-center justify-center mt-[95px] tb:mt-[112px]">
            <img
              className={`${
                overviewClicked || surfaceClicked ? "block" : "hidden"
              }  tb:hidden`}
              style={{
                width: planet?.images.sizes.mobile.width,
                height: planet?.images.sizes.mobile.height,
              }}
              src={planet?.images.planet}
              alt="planet image"
            />
            <div className="tablet hidden tb:block dk:hidden tb:flex tb:flex-col tb:items-center tb:justify-center">
              <img
                className={`${structureClicked ? "block" : "hidden"}`}
                style={{
                  width: planet?.images.sizes.tablet.width,
                  height: planet?.images.sizes.tablet.height,
                }}
                src={planet?.images.internal}
                alt="planet image"
              />
              <img
                className={`${
                  surfaceClicked ? "block" : "hidden"
                } absolute top-[450px]`}
                style={{
                  width: "130px",
                  height: "160px",
                }}
                src={planet?.images.geology}
                alt="planet image"
              />
            </div>

            <img
              className={`dk:hidden ${
                structureClicked ? "tb:hidden" : "tb:block"
              }`}
              style={{
                width: planet?.images.sizes.tablet.width,
                height: planet?.images.sizes.tablet.height,
              }}
              src={planet?.images.planet}
              alt="planet image"
            />

            <div className="desktop hidden dk:block dk:flex dk:flex-col dk:items-center dk:justify-center">
              <img
                className={`${structureClicked ? "block" : "hidden"}`}
                style={{
                  width: planet?.images.sizes.desktop.width,
                  height: planet?.images.sizes.desktop.height,
                }}
                src={planet?.images.internal}
                alt="planet image"
              />
              <img
                className={`${
                  surfaceClicked ? "block" : "hidden"
                } absolute top-[600px]`}
                style={{
                  width: "163px",
                  height: "199px",
                }}
                src={planet?.images.geology}
                alt="planet image"
              />
            </div>

            {/* Desktop Image */}
            <img
              className={`hidden ${
                structureClicked ? "dk:hidden" : "dk:block"
              }`}
              style={{
                width: planet?.images.sizes.desktop.width,
                height: planet?.images.sizes.desktop.height,
              }}
              src={planet?.images.planet}
              alt="planet image"
            />
          </div>
          <div className="position-div flex flex-row items-center justify-between tb:mt-[130px] tb:px-[40px] dk:flex-col dk:items-end">
            <div className="planet-info flex flex-col items-center justify-center gap-[16px] tb:gap-0 mt-[98px] px-[24px] tb:mt-0 tb:items-start tb:px-0">
              <h2 className="text-[#fff] text-[40px] font-normal leading-[100%] mb-[16px] tb:text-[48px] dk:text-[80px]">
                {planet?.name}
              </h2>
              <p className="w-[327px] text-center tb:text-left font-normal text-[#fff]/50 text-[13.3px] leading-[22px] dk:text-[15.6px] dk:mt-[7px]">
                {overviewClicked ? planet?.overview.content : ""}
              </p>
              <p className="w-[327px] text-center tb:text-left font-normal text-[#fff]/50 text-[13.3px] leading-[22px] dk:text-[15.6px]  dk:mt-[7px]">
                {structureClicked ? planet?.structure.content : ""}
              </p>
              <p className="w-[327px] text-center tb:text-left font-normal text-[#fff]/50 text-[13.3px] leading-[22px] dk:text-[15.6px]  dk:mt-[7px]">
                {surfaceClicked ? planet?.geology.content : ""}
              </p>
              <div className="link flex flex-row items-center justify-center gap-[4px] tb:mt-[32px] dk:mt-[24px]">
                <p className="text-[12px] text-[#fff]/50 font-normal dk:text-[14px]">
                  Source :
                </p>
                {overviewClicked ? (
                  <a
                    className="text-[12px] text-[#fff]/50 font-bold dk:text-[14px] "
                    href={planet?.overview.source}
                  >
                    Wikipedia
                  </a>
                ) : (
                  ""
                )}
                {structureClicked ? (
                  <a
                    className="text-[12px] text-[#fff]/50 font-bold dk:text-[14px]"
                    href={planet?.structure.source}
                  >
                    Wikipedia
                  </a>
                ) : (
                  ""
                )}
                {surfaceClicked ? (
                  <a
                    className="text-[12px] text-[#fff]/50 font-bold dk:text-[14px]"
                    href={planet?.geology.source}
                  >
                    Wikipedia
                  </a>
                ) : (
                  ""
                )}
                <img src={sourceIcon} alt="link image " />
              </div>
            </div>
            <div
              className={`info flex flex-row justify-between items-center py-[20px] px-[24px] border-b-[1px] border-b-[#FFFFFF]/20 tb:border-none tb:flex-col tb:gap-[16px] tb:px-0`}
            >
              <div className="buttons flex flex-col items-center ">
                <button
                  style={{
                    backgroundColor: overviewClicked
                      ? planet?.rectangleColor
                      : "",
                    border: overviewClicked ? planet?.rectangleColor : "",
                  }}
                  className={`${
                    overviewClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
                  } tb:flex tb:flex-row tb:py-[12px] tb:pl-[28px] tb:border-[1px] tb:w-[281px] tb:items-start dk:w-[350px]`}
                  onClick={toggleOverview}
                >
                  <span className="mr-[17px] hidden tb:block">01</span>OVERVIEW
                </button>
                <div
                  style={{ backgroundColor: planet?.rectangleColor }}
                  className={`${overviewClicked ? "w-[80px]" : ""} ${
                    overviewClicked ? "h-[4px]" : ""
                  } relative top-5 tb:hidden`}
                ></div>
              </div>

              <div className="buttons flex flex-col items-center ">
                <button
                  style={{
                    backgroundColor: structureClicked
                      ? planet?.rectangleColor
                      : "",
                    border: structureClicked ? planet?.rectangleColor : "",
                  }}
                  className={`${
                    structureClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
                  } tb:flex tb:flex-row tb:py-[12px] tb:pl-[28px] tb:border-[1px] tb:w-[281px] tb:items-start dk:w-[350px]`}
                  onClick={toggleStructure}
                >
                  <span className="mr-[17px] hidden tb:block">02</span>INTERNAL
                  STRUCTURE
                </button>
                <div
                  style={{ backgroundColor: planet?.rectangleColor }}
                  className={`${structureClicked ? "w-[94px]" : ""} ${
                    structureClicked ? "h-[4px]" : ""
                  } relative top-5 tb:hidden`}
                ></div>
              </div>
              <div className="buttons flex flex-col items-center  ">
                <button
                  style={{
                    backgroundColor: surfaceClicked
                      ? planet?.rectangleColor
                      : "",
                    border: surfaceClicked ? planet?.rectangleColor : "",
                  }}
                  className={`${
                    surfaceClicked ? "text-[#FFFFFF]" : "text-[#FFFFFF]/50"
                  } tb:flex tb:flex-row tb:py-[12px] tb:pl-[28px] tb:border-[1px] tb:w-[281px] tb:items-start dk:w-[350px]`}
                  onClick={toggleSurface}
                >
                  <span className="mr-[17px] hidden tb:block">03</span>SURFACE
                </button>
                <div
                  style={{ backgroundColor: planet?.rectangleColor }}
                  className={`${surfaceClicked ? "w-[80px]" : ""} ${
                    surfaceClicked ? "h-[4px]" : ""
                  } relative top-5 tb:hidden`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="general-info-box flex flex-col items-center justify-center mt-[28px] px-[24px] mb-[47px] gap-[8px] tb:flex-row tb:gap-[11px] tb:px-[40px] dk:mt-[222px] dk:px-[165px] dk:mb-[56px]">
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center tb:flex-col tb:items-start tb:pt-[16] tb:pl-[15px] tb:pb-[19px] dk:pt-[20px] dk:pl-[23px] dk:pb-[27px]">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px]  dk:text-[11px]">
            ROTATION TIME
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75] tb:text-[24px] tb:mt-[6px] dk:text-[40px]">
            {planet?.rotation}
          </p>
        </div>
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center tb:flex-col  tb:items-start tb:pt-[16] tb:pl-[15px] tb:pb-[19px] dk:pt-[20px] dk:pl-[23px] dk:pb-[27px]">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px]  dk:text-[11px]">
            REVOLUTION TIME
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75] tb:text-[24px] tb:mt-[6px] dk:text-[40px]">
            {planet?.revolution}
          </p>
        </div>
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center tb:flex-col  tb:items-start tb:pt-[16] tb:pl-[15px] tb:pb-[19px] dk:pt-[20px] dk:pl-[23px] dk:pb-[27px]">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px]  dk:text-[11px]">
            RADIUS
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75] tb:text-[24px] tb:mt-[6px] dk:text-[40px]">
            {planet?.radius}
          </p>
        </div>
        <div className="box w-[327px] px-[24px] pt-[9px] pb-[13px] border-[1px] border-[#FFFFFF]/20 flex flex-row justify-between items-center tb:flex-col  tb:items-start tb:pt-[16] tb:pl-[15px] tb:pb-[19px] dk:pt-[20px] dk:pl-[23px] dk:pb-[27px]">
          <p className="font-bold text-[#fff]/50 text-[8px] tracking-[0.73px] dk:text-[11px]">
            AVERAGE TEMP.
          </p>
          <p className="font-normal text-[#fff] text-[20px] tracking-[-0.75] tb:text-[24px] tb:mt-[6px] dk:text-[40px]">
            {planet?.temperature}
          </p>
        </div>
      </div>
    </>
  );
}
