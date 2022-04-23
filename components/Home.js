import Link from "next/link";
import React from "react";
import Countdown from "react-countdown";
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
        {/* <div className="absolute-clouds">
          <img
            src="/imgs/rightCloud.svg"
            loading="lazy"
            style={{
              color: "red",
              transform:
                "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(180deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            data-w-id="4b10e664-d74c-bbd5-51f8-24921901f93f"
            alt=""
            className="right-cloud"
          />
          <img
            src="/imgs/leftCloud.svg"
            loading="lazy"
            style={{
              transform:
                "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            data-w-id="ec55ca2d-d790-5b75-1a1f-3a44acd6c689"
            alt=""
            className="left-cloud"
          />
        </div> */}
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar w-nav header_cl"
        >
          <a href="#home" className="nav-logo w-nav-brand w--current">
            <img
              loading="lazy"
              src="/3.png"
              // src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0123a803c0cd9ae38b6_WP%20LOGO.svg"
              alt="WonderMfers"
              // style={{ maxWidth: "130%" }}
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            {/* <a href="#about" className="nav-link w-nav-link">
              About
            </a> */}
            <a href="#home" className="nav-link w-nav-link nav_lk_cl">
              Home
            </a>
            {/* <a href="#wondermap" className="nav-link w-nav-link nav_lk_cl">
              Wondermap
            </a> */}
            <a href="#faq" className="nav-link w-nav-link nav_lk_cl">
              FAQ
            </a>
            <a href="#roadmap" className="nav-link w-nav-link nav_lk_cl">
              Roadmap
            </a>
            <a href="#team" className="nav-link w-nav-link nav_lk_cl">
              Team
            </a>
            <div className="right-nav">
              <a
                href="https://opensea.io/collection/wondermfer"
                className="social-link w-inline-block"
              >
                <img
                  width="39"
                  loading="lazy"
                  alt="Open Sea"
                  src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c7fb7d3d18a3fe21d704_Group%20269%20(1).svg"
                />
              </a>
              <a
                href="https://looksrare.org/collections/0x25937e8177c6A8C08266a4E17b2Ad09eD2DEb635"
                className="social-link w-inline-block"
              >
                <img
                  width="44"
                  loading="lazy"
                  alt="Open Sea"
                  src="https://assets-global.website-files.com/61e9ad107f42425177667f64/621a74a9d8a81dc23e29a220_looksrare-logo.svg"
                />
              </a>
              <a
                href="https://twitter.com/MferWonder"
                className="social-link w-inline-block"
              >
                <img
                  width="39"
                  loading="lazy"
                  alt="Twitter"
                  src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0124635380edddd0545_Vector%20(12).svg"
                />
              </a>
              <a href="#" className="connect-button w-button">
                Connect
              </a>
            </div>
          </nav>
          <div
            className="menu-button w-nav-button"
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            role="button"
            tabIndex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="icon w-icon-nav-menu"></div>
          </div>
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-0"
          ></div>
        </div>
        <div className="container centered-text w-container">
          <img
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
          />
          {/* <h1 className="heading nav_lk_cl">Beauty Brain MetaSpa</h1> */}
          <img src="/banner2.png" alt="" style={{ width: "80%" }} />
          <Link
            // disabled={mintStatus}
            data-w-id="57408da1-b59b-fad3-0308-861394b4b6b8"
            href="/mint"
          >
            <a
              // className="button w-button animate__animated animate__zoomIn"
              className="button w-button zoomInPop animation_delay_1"
              style={{
                // width: "0",
                // disabled: mintStatus,
                // transform:
                //   "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                // transformStyle: "preserve-3d",
                pointerEvents: mintStatus ? "all" : "none",
                opacity: mintStatus ? "1" : "0.5",
              }}
            >
              MINT!
            </a>
          </Link>
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
