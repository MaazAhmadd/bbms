import React from "react";
import Opensea from "./icons/Opensea";
import Rare from "./icons/Rare";
import Twitter from "./icons/Twitter";

export default function Header() {
  return (
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

      <div
        className="menu-button w-nav-button border-gradient border-gradient-gold"
        style={{
          WebkitUserSelect: "text",
          display: "block",
          padding: "3px",
        }}
        aria-label="menu"
        role="button"
        tabIndex="0"
        aria-controls="w-nav-overlay-0"
        aria-haspopup="menu"
        aria-expanded="false"
      >
        <div
          className="icon w-icon-nav-menu"
          style={{
            backgroundImage:
              "linear-gradient(to right, #c1702c, #f6de7d, #c1702c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        ></div>
      </div>
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
      ></div>
    </div>
  );
}
