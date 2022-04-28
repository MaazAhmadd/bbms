import React, { useEffect, useState } from "react";

export default function Card() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setScroll(true);
      }
    });
  }, []);
  return (
    <div
      className="white-section wf-section"
      style={{ backgroundColor: "black" }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          padding: "6% 15%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "0 15% 0 0%" }}>
          <img
            src="/BB_card.jpg"
            alt=""
            className={scroll ? "animate__animated animate__slideInLeft" : ""}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "125%",
            gap: "15px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="text_grad"
        >
          <h3 style={{ fontSize: "24px" }}>ORIGINAL COLLECTION</h3>
          <h2 style={{ fontSize: "45px", fontFamily: "sans-serifs" }}>
            Brain Beauty
          </h2>
          <p>
            There will be several surprises for those who will successfully
            mint. One must hold the SpaVerse pass to get Beauty Brain initial
            collection. Membership includes:
            <br />
            - Collaboration with beauty brands. Names will be revealed after the
            mint
            <br />
            - Access to private health, beauty, and wellness webinars
            <br />
            - In-person glamorous events
            <br />- Early excess to future SpaVerse projects
          </p>
        </div>
      </div>
      {/* <div class="grid md:grid-cols-2 pt-12">
        <div class="flex items-start justify-center md:justify-start px-12 pb-20">
          <div class="relative">
            <img
              src="/proof-pass.svg"
              alt="PROOF Collective membership card"
              class="rotate-[-16deg] relative"
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: "-1",
                transform: "translate(-50%, -50%)",
                width: "40%",
                aspectRatio: "1 / 1",
                background: "black",
                filter: "drop-shadow(0 0 80px rgba(117, 0, 208, 1))",
              }}
            ></div>
            <img
              src="/proof-pass-shadow.svg"
              alt=""
              aria-hidden="true"
              class="absolute -left-10 -z-1"
            />
          </div>
        </div>
        <div class="space-y-8 md:space-y-12 pb-24 md:pb-36 lg:pb-48 text-center md:text-left">
          <div class="space-y-4">
            <div class="text-white text-4xl font-poppins">
              Proof Collective NFT
            </div>
            <div class="leading-relaxed">
              To join, one must hold the PROOF Collective NFT. Membership
              includes access to our private Discord, early access to the PROOF
              podcast, in-person events, and other collaborations created
              exclusively for PROOF Collective members.
            </div>
          </div>
          <a
            class="inline-flex py-3 px-6 gap-3 items-center rounded-full font-poppins uppercase text-sm leading-none tracking-wider text-black bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://opensea.io/collection/proof-collective"
          >
            <span class="text-2xl">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.36 0 0 5.36 0 12s5.36 12 12 12 12-5.36 12-12S18.64 0 12 0ZM5.92 12.4l.053-.08 3.12-4.88c.054-.08.16-.053.187.027.533 1.173.96 2.613.773 3.52-.08.373-.346.88-.613 1.333-.027.08-.08.133-.107.187-.026.026-.053.053-.08.053h-3.2c-.133 0-.186-.08-.133-.16Zm13.92 1.68c0 .053-.027.08-.053.107-.24.106-1.067.48-1.414.96-.88 1.226-1.546 2.96-3.04 2.96H9.04c-2.213 0-4-1.814-4-4.027V14c0-.053.053-.107.107-.107H8.64c.08 0 .107.054.107.134-.027.24.026.453.133.666.213.427.64.694 1.093.694h1.734v-1.36H10c-.08 0-.133-.107-.08-.16.027-.027.027-.054.053-.08.16-.24.4-.587.614-.987.16-.267.32-.56.426-.853.027-.054.054-.107.054-.16.026-.107.08-.187.08-.267.026-.08.053-.16.053-.213.053-.24.08-.507.08-.774 0-.106 0-.213-.027-.32 0-.106-.026-.24-.026-.346 0-.107-.027-.214-.054-.32a3.096 3.096 0 0 0-.106-.48l-.027-.054-.08-.32a20.218 20.218 0 0 0-.32-.96c-.053-.133-.08-.24-.133-.346-.08-.187-.16-.347-.214-.48a.43.43 0 0 0-.106-.187c-.027-.08-.08-.133-.107-.213l-.08-.16-.133-.454c-.027-.053.026-.106.08-.106l1.306.346.187.054.187.053.08.027v-.774c0-.373.293-.693.666-.693.187 0 .347.08.48.213a.642.642 0 0 1 .187.48v1.174l.133.026s.027 0 .027.027c.027.027.08.053.16.107.053.026.107.08.16.133.133.107.267.24.453.373.054.027.08.08.134.107.213.187.453.427.693.693.053.08.133.16.187.214.053.08.133.16.186.24l.24.32c.027.053.08.106.107.16.107.133.187.293.267.426.026.08.08.134.106.214.08.186.16.4.214.586.026.054.026.08.026.134a.453.453 0 0 1 .027.186c.027.214 0 .4-.027.614-.026.08-.053.16-.08.266-.026.08-.053.16-.106.267-.08.16-.16.347-.267.507-.027.053-.08.133-.107.186-.053.054-.08.134-.133.187-.053.08-.107.16-.16.213-.053.08-.107.134-.16.214a2.41 2.41 0 0 1-.24.266l-.16.16-.16.16c-.08.08-.16.16-.213.187l-.134.133c-.026.027-.053.027-.08.027h-1.066v1.36H14.4c.293 0 .587-.107.8-.293.08-.08.427-.374.827-.8.026-.027.026-.027.053-.027l3.653-1.067c.08-.026.134.027.134.107v.8h-.027Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            View on OpenSea
          </a>
        </div>
      </div> */}
    </div>
  );
}
