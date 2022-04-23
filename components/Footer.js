import Link from "next/link";
import React from "react";
import Opensea from "./icons/Opensea";
import Rare from "./icons/Rare";
import Twitter from "./icons/twitter";

export default function Footer() {
  return (
    <>
      <div
        className="dark-blue-footer wf-section"
        style={{
          backgroundColor: "var(--palette-light-1)",
          color: "var(--palette-dark-1)",
        }}
      >
        <div className="footer-container w-container">
          <div className="hold-logos">
            <a
              href="https://opensea.io/collection/wondermfer"
              className="footer-logo-link w-inline-block"
            >
              <Opensea color={"#417d7a"} />
            </a>
            <a
              href="https://looksrare.org/collections/0x25937e8177c6A8C08266a4E17b2Ad09eD2DEb635"
              className="footer-logo-link looksrare w-inline-block"
            >
              <Rare color={"#417d7a"} />
            </a>
            <a
              href="https://twitter.com/MferWonder"
              className="footer-logo-link w-inline-block"
            >
              <Twitter color={"#417d7a"} />
            </a>
          </div>
          <div>
            © 2022 WONDERMFERS&nbsp; LLC |
            <Link href="/TandC">
              <a className="link" style={{ color: "var(--palette-dark-1)" }}>
                Terms &amp; Conditions
              </a>
            </Link>
            <span className="hide-mobile"></span>
          </div>
          <a href="#home" className="wp-logo-bottom w-inline-block">
            <img
              src="/imgs/logo.png"
              // src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0104ff4c6fa0735fe40_Group%2085.png"
              loading="lazy"
              width="82"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
