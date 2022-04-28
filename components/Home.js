import React from "react";
import Countdown from "react-countdown";

import Header from "./Header";
// import { Link } from "react-router-dom";

const endCount = `2022-03-05T00:00:00`;
const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

export default function Home() {
  const [mintStatus, setMintStatus] = React.useState(false);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setMintStatus(true);
      return <></>;
    } else {
      // Render a countdown
      return (
        <span style={{ color: "black" }}>
          {addZero(days)} : {addZero(hours)} : {addZero(minutes)} :{" "}
          {addZero(seconds)}
        </span>
      );
    }
  };
  return (
    <>
      <div id="home" className="hero-section">
        <Header />
        <video
          autoPlay
          muted
          // loop
          id="myVideo"
          style={{ width: "101%", top: "-10%" }}
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>
        <div
          className="container centered-text w-container"
          style={{
            padding: "35% 0 7% 0",
            // paddingTop: "5%",
            // paddingBottom: "15%",
            // backgroundImage: "",
          }}
        >
          {/* <img
            className="zoomInPop animation_delay_0"
            src="/4.png"
            // src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c01209f79682eed6141b_wonderpal%20head.svg"
            loading="lazy"
            style={{
              width: "300px",
              // transform:
              //   "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              // transformStyle: "preserve-3d",
            }}
            data-w-id="fc1a33ef-b652-8213-b8f3-30bd1307a44c"
            alt="WonderPal logo"
          /> */}
          {/* <h1 className="heading nav_lk_cl">Beauty Brain MetaSpa</h1> */}
          {/* <img src="/banner2.png" alt="" style={{ width: "130%" }} /> */}
          {/* <img src="/1.png" alt="" style={{ maxWidth: "25%" }} /> */}
          <h3 className="text_grad" style={{ fontSize: "28px" }}>
            A 3D virtual world focus on optimizing every human’s spa experience
          </h3>
          {/* <img src="/spa_card.jpg" alt="" /> */}
          {/* <Link
            // disabled={mintStatus}
            data-w-id="57408da1-b59b-fad3-0308-861394b4b6b8"
            href="/mint"
          >
            <a
              // className="button w-button animate__animated animate__zoomIn"
              className="button w-button zoomInPop animation_delay_1"
              style={{
                border: "none",
                background:
                  "linear-gradient(to right, #c1702c, #f6de7d, #c1702c)",
                // width: "0",
                // disabled: mintStatus,
                // transform:
                //   "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                // transformStyle: "preserve-3d",
                pointerEvents: mintStatus ? "all" : "none",
                opacity: mintStatus ? "1" : "0.5",
                marginTop: "10%",
              }}
            >
              MINT!
            </a>
          </Link> */}
          <div className="timer">
            {/* <Countdown date={Date.now() + 10000} /> */}
            <Countdown
              date={new Date(endCount).getTime()}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
    </>
  );
}
