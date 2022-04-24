import Link from "next/link";
import React from "react";

export default function TandC() {
  return (
    <>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <Link href="/">
          <a className="nav-logo w-nav-brand w--current">
            <img loading="lazy" src="/imgs/logo.png" alt="Wonder Pals" />
          </a>
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          {/* <a href="#about" className="nav-link w-nav-link">
              About
            </a> */}
          <Link href="/">
            <a className="nav-link w-nav-link">Back To Home</a>
          </Link>
          {/* <a href="#wondermap" className="nav-link w-nav-link">
              Wondermap
            </a> */}
          {/* <a href="#faq" className="nav-link w-nav-link">
              FAQ
            </a>
            <a href="#roadmap" className="nav-link w-nav-link">
              Roadmap
            </a> */}
          {/* <a href="#team" className="nav-link w-nav-link">
              Team
            </a> */}
          <div className="right-nav">
            <a
              href="https://opensea.io/collection/wonderpals"
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
              href="https://looksrare.org/collections/0x3Acce66cD37518A6d77d9ea3039E00B3A2955460"
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
              href="https://twitter.com/WonderPals"
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

      <div className="section wf-section">
        <div className="container-3 w-container">
          <div className="w-richtext">
            <h2>
              Terms and Conditions
              <br />
            </h2>
            <p>
              You accept to adhere to these terms and conditions, including our
              Privacy Policy, by accessing or continuing to use our Website and
              related services.
            </p>
            <p>
              <br />
            </p>
            <p>
              ●&nbsp;&nbsp;You must verify that your use of the Site and our
              Services is not illegal or restricted by the laws that apply to
              you in your region.
            </p>
            <p>
              <br />
            </p>
            <p>
              ●&nbsp;&nbsp;You should take your own precautions to make sure
              that the method you use to access the Website and our Services
              does not reveal you to the threat of malware or other forms of
              intervention that could harm your computer system.
            </p>
            <p>
              <br />
            </p>
            <p>
              ●&nbsp;&nbsp;All legal protections, ownership, and interests in
              and to the Website, our Services, and the Website&apos;s content are
              owned by us or licensed to us by third parties and are protected
              by applicable laws.
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
