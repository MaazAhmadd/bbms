import React from "react";
import Opensea from "./icons/Opensea";
import Rare from "./icons/Rare";
import Twitter from "./icons/Twitter";

export default function NavSub() {
  return (
    <nav
      role="navigation"
      className="nav-menu w-nav-menu animate__fadeIn animate__animated"
      style={{
        top: "55px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        background: "rgb(0 0 0 / 95%)",
        right: "240px",
        padding: "4% 5%",
        position: "absolute",
      }}
    >
      {/* <a href="#about" className="nav-link w-nav-link">
              About
            </a> */}
      <a href="#home" className="nav-link w-nav-link nav_lk_cl text_grad">
        Home
      </a>
      {/* <a href="#wondermap" className="nav-link w-nav-link nav_lk_cl">
              Wondermap
            </a> */}
      <a href="#roadmap" className="nav-link w-nav-link nav_lk_cl text_grad">
        Welcome
      </a>
      <a href="#faq" className="nav-link w-nav-link nav_lk_cl text_grad">
        FAQ
      </a>
      <a href="#team" className="nav-link w-nav-link nav_lk_cl text_grad">
        Team
      </a>
      {/* <div className="right-nav" style={{ position: "static" }}>
        <a
          href="https://opensea.io/collection/wondermfer"
          className="social-link w-inline-block"
        >
          <Opensea color={"#ede6db"} />
        </a>
        <a
          href="https://looksrare.org/collections/0x25937e8177c6A8C08266a4E17b2Ad09eD2DEb635"
          className="social-link w-inline-block"
        >
          <Rare color={"#ede6db"} />
        </a>
        <a
          href="https://twitter.com/MferWonder"
          className="social-link w-inline-block"
        >
          <Twitter color={"#ede6db"} />
        </a>
        <a href="#" className="connect-button w-button">
          Connect
        </a>
      </div> */}
    </nav>
  );
}
