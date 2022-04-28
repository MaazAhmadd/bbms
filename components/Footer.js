import Link from "next/link";
import React from "react";
import Opensea from "./icons/Opensea";
import Rare from "./icons/Rare";
import Twitter from "./icons/Twitter";

export default function Footer() {
  return (
    <>
      <div
        className="dark-blue-footer wf-section"
        style={{
          backgroundColor: "var(--palette-dark-3)",
          color: "var(--palette-light-1)",
        }}
      >
        <div className="footer-container w-container">
          <h3>Stay Connected</h3>
          {/* <br /> */}
          <div
            id="subscribe"
            style={{
              width: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <label
              htmlFor="email-2"
              id="contact-email"
              className="field-label-2"
              style={{ marginBottom: "0" }}
            >
              Email *
            </label>
            <input
              style={{ marginBottom: "0", width: "auto" }}
              type="email"
              className="w-input"
              maxLength="256"
              name="email"
              data-name="email"
              placeholder=""
              id="email-2"
              required=""
            />
            <input
              style={{
                padding: "12px 20px 12px 20px",
                border: "0",
                borderRadius: "50px",
                background:
                  "linear-gradient(to right, #c1702c, #f6de7d, #c1702c)",
                transition: "background-color 200ms ease-out",
                color: "#000",
                fontSize: "20px",
                // lineHeight: "1em",
                fontWeight: "600",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginTop: "0",
              }}
              type="submit"
              value="Submit"
              data-wait="Please wait..."
              // className="button w-button"
            />
          </div>
          <br />
          <div className="hold-logos">
            <a
              href="https://opensea.io/collection/wondermfer"
              className="footer-logo-link w-inline-block"
            >
              <Opensea color={"#ede6db"} />
            </a>
            <a
              href="https://looksrare.org/collections/0x25937e8177c6A8C08266a4E17b2Ad09eD2DEb635"
              className="footer-logo-link looksrare w-inline-block"
            >
              <Rare color={"#ede6db"} />
            </a>
            <a
              href="https://twitter.com/MferWonder"
              className="footer-logo-link w-inline-block"
            >
              <Twitter color={"#ede6db"} />
            </a>
          </div>
          {/* <div>
            © 2022 WONDERMFERS&nbsp; LLC |
            <Link href="/TandC">
              <a className="link" style={{ color: "var(--palette-dark-2)" }}>
                Terms &amp; Conditions
              </a>
            </Link>
            <span className="hide-mobile"></span>
          </div> */}

          <a href="#home" className="wp-logo-bottom w-inline-block">
            <img
              src="/3.png"
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
