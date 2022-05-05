import React from "react";
import useWindowDimensions from "./useDimensions";

export default function Team() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      id="team"
      className="blue-section wf-section nav_lk_cl"
      style={{ backgroundColor: "var(--palette-dark-3)" }}
    >
      <div className="container _880 w-container">
        <h2 className="centered-heading text_grad" style={{ width: "35%" }}>
          Team
        </h2>
        <p
          className="text_grad"
          style={{ width: width < 640 ? "100%" : "110%" }}
        >
          SpaVerse is supported by medical professionals to build and educate
          the community on health, beauty and wellness.
        </p>
        <div
          className="team-flex"
          style={{ justifyContent: "space-evenly", flexDirection: "column" }}
        >
          {width < 640 ? (
            <>
              <div
                className="team-member-card"
                style={{ width: "auto", margin: "5% 0" }}
              >
                <div
                  className="team_top"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 18%",
                    alignItems: "center",
                  }}
                >
                  <a href="#" className="w-inline-block">
                    <img
                      src="/5.png"
                      alt=""
                      style={{ marginTop: "20px", maxWidth: "230px" }}
                    />
                  </a>
                </div>

                <p className="text_grad">
                  Beauty is a medical spa entrepreneur, blockchain fanatic, and
                  Wharton fintech grad. A 6-month immersion into research within
                  the NFT space revealed the time is right for SpaVerse to be
                  established.
                </p>
              </div>
              <div
                className="team-member-card"
                style={{ width: "auto", margin: "5% 0" }}
              >
                <div
                  className="team_top"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 9%",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#"
                    className="w-inline-block"
                    style={{ marginRight: "8%" }}
                  >
                    <img src="/2.png" alt="" style={{ maxWidth: "200px" }} />
                  </a>
                </div>
                <p className="text_grad">
                  Brain is an early investor in crypto and an award-winning
                  physician with over 22 years of experience across the United
                  States. He has collaborated on campaigns for some of the
                  world&apos;s most recognized healthcare and SPA facilities.
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                className="team-member-card"
                style={{ width: "auto", flexDirection: "row", margin: "5% 0" }}
              >
                <div
                  className="team_top"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 18%",
                    alignItems: "center",
                  }}
                >
                  <a href="#" className="w-inline-block">
                    <img
                      src="/5.png"
                      alt=""
                      style={{ marginTop: "20px", maxWidth: "230px" }}
                    />
                  </a>
                </div>
                <a
                  href="#"
                  className="w-inline-block"
                  style={{ marginRight: "8%" }}
                >
                  <img src="/2.png" alt="" style={{ maxWidth: "200px" }} />
                </a>
              </div>
              <div
                className="team-member-card"
                style={{ width: "auto", flexDirection: "row", margin: "5% 0" }}
              >
                <div
                  className="team_top"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 9%",
                    alignItems: "center",
                  }}
                >
                  <p className="text_grad">
                    Beauty is a medical spa entrepreneur, blockchain fanatic,
                    and Wharton fintech grad. A 6-month immersion into research
                    within the NFT space revealed the time is right for SpaVerse
                    to be established.
                  </p>
                </div>
                <p className="text_grad">
                  Brain is an early investor in crypto and an award-winning
                  physician with over 22 years of experience across the United
                  States. He has collaborated on campaigns for some of the
                  world&apos;s most recognized healthcare and SPA facilities.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
