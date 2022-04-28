import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Welcome() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 600);
    });
  }, []);
  return (
    <div
      className="white-section wf-section"
      id="roadmap"
      style={{
        display: "flex",
        backgroundColor: "var(--palette-dark-3)",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="container _120 w-container nav_lk_cl">
        <h3 className="text_grad">
          Join us on this luxurious journey to witness a new NFT project.
          SpaVerse is a collection of 2500 living on the Ethereum blockchain in
          the form of an &nbsp;&nbsp;&nbsp;&nbsp; ERC-721 token.
        </h3>
      </div>
      <img
        src="/spa_card_1.jpg"
        alt=""
        style={{ width: "22%", margin: "0 0 5% 0" }}
      />
      <Link
        // disabled={mintStatus}
        data-w-id="57408da1-b59b-fad3-0308-861394b4b6b8"
        href="/mint"
      >
        <a
          // className="button w-button animate__animated animate__zoomIn"
          className={
            scroll
              ? "button w-button zoomInPop animation_delay_1"
              : "button w-button "
          }
          style={{
            border: "none",
            background: "linear-gradient(to right, #c1702c, #f6de7d, #c1702c)",
            // width: "0",
            // disabled: mintStatus,
            // transform:
            //   "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            // transformStyle: "preserve-3d",
            // pointerEvents: mintStatus ? "all" : "none",
            // opacity: mintStatus ? "1" : "0.5",
            // margin: "10% 0 0 45%",
          }}
        >
          MINT!
        </a>
      </Link>

      {/* <img
        src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0124635386e3ddd0544_HI.png"
        loading="lazy"
        width="221"
        alt=""
        className="hi-image"
      /> */}
    </div>
  );
}
