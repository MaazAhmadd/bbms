import React, { useEffect, useState } from "react";
import Link from "next/link";
import useWindowDimensions from "./useDimensions";

export default function Welcome() {
  const [scroll, setScroll] = useState(false);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setScroll(true);
      }
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
      <div
        className="container _120 w-container nav_lk_cl"
        // style={{ padding: "8% 5%" }}
        style={{ padding: width < 640 ? "8% 5%" : null }}
      >
        <h3
          className="text_grad"
          // style={{ width: "115%" }}
          style={{ width: width < 640 ? "100%" : "115%" }}
        >
          Join us on this luxurious journey to witness a new NFT project.
          SpaVerse&apos;s First edition: Beauty Brain is a collection of 10,000
          nft on the Ethereum blockchain in the form of an ERC-721 token.
        </h3>
      </div>
      <img
        src="/png_copy.png"
        alt=""
        style={{ width: width < 640 ? "65%" : "35%", margin: "0 0 5% 0" }}
        // style={{ width: "22%", margin: "0 0 5% 0" }}
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
            // margin: "7% 0",
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
