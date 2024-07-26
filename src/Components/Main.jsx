import React from "react";
import logo from "../assets/logo.svg";
import about from "../assets/about.svg";
import x from "../assets/icons/x.svg";
import screener from "../assets/icons/screener.svg";
import tool from "../assets/icons/tool.svg";
import telegram from "../assets/icons/telegram.svg";
import pump from "../assets/icons/pump.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

function Main() {
  return (
    <div id="main" className="min-h-screen w-full bg-white relative">
      <div className="container flex justify-center flex-col items-center pt-12 gap-7">
        <img src={logo} alt="logo" />
        <img src={about} alt="logo" className="pointer-events-none" />

        <h2 className="font-main break-all text-center text-2xl text-white stroke-black font-bold special">
          <span className="text-4xl">CA:</span> <br />{" "}
          74UV5osocdAH4TLpncTPsaups1tnyQE8b4w7onWhpump
        </h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mt-12">
          <a href="https://t.me/oreoportalsol">
            <img src={telegram} alt="" />
          </a>{" "}
          <a href="https://x.com/OreoDogSolana">
            <img src={x} alt="" />
          </a>{" "}
          <a href="https://dexscreener.com/solana/8ur5qbrzwtgzdtsjm64s3rhwxqawwujftnfqzjmaviac">
            <img src={screener} alt="" />
          </a>{" "}
          <a href="https://www.dextools.io/app/solana/pair-explorer/74UV5osocdAH4TLpncTPsaups1tnyQE8b4w7onWhpump">
            <img src={tool} alt="" />
          </a>{" "}
          <a href="https://pump.fun/74UV5osocdAH4TLpncTPsaups1tnyQE8b4w7onWhpump">
            <img src={pump} alt="" />
          </a>
        </div>
      </div>
      <img
        src={left}
        alt=""
        className="absolute left-0 bottom-0 w-[10rem] lg:w-auto"
      />
      <img
        src={right}
        alt=""
        className="absolute right-0 bottom-0 w-[10rem] lg:w-auto"
      />
    </div>
  );
}

export default Main;
