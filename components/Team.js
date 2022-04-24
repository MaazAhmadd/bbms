import React from "react";

export default function Team() {
  return (
    <div
      id="team"
      className="blue-section wf-section nav_lk_cl"
      style={{ backgroundColor: "var(--palette-dark-3)" }}
    >
      <div className="container _880 w-container">
        {/* <img
          src="https://assets-global.website-files.com/61e9ad107f42425177667f64/62619dc7735ac66a99a483b1_Group%2092.png"
          loading="lazy"
          width="89.5"
          alt=""
          className="emoji-on-top flower"
        /> */}
        <h2 className="centered-heading">Our Team</h2>
        <p>
          SpaVerse is supported by professionals to build and educate the
          community on health and beauty treatment.
        </p>
        <div
          className="team-flex"
          style={{ justifyContent: "space-evenly", flexDirection: "column" }}
        >
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
              <a href="https://twitter.com/minasnft" className="w-inline-block">
                <img src="/2.png" alt="" style={{ maxWidth: "200px" }} />
              </a>
              {/* <h3 className="name">Name</h3> */}
              <p className="team-description">Physician</p>
              <a
                href="https://twitter.com/minasnft"
                className="twitter-link w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"
                  loading="lazy"
                  alt="Twitter"
                />
              </a>
            </div>
            <p>
              Mr. Brain is an early investor in crypto and award-winning
              physician with over 10 years of hospital experience across United
              States. He has collaborated on campaigns for some of the world's
              most recognized hospitals, delivering a multidisciplinary blend of
              consistently successful cases.
            </p>
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
              <a href="https://twitter.com/minasnft" className="w-inline-block">
                <img src="/5.png" alt="" style={{ maxWidth: "200px" }} />
              </a>
              {/* <h3 className="name">Name</h3> */}
              <p className="team-description">Healthcare Professional</p>
              <a
                href="https://twitter.com/minasnft"
                className="twitter-link w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"
                  loading="lazy"
                  alt="Twitter"
                />
              </a>
            </div>
            <p>
              Ms Beauty is an entrepreneur, blockchain fanatic and Wharton grad.
              A 6-month immersion into research within the NFT space revealed
              the time was ripe for SpaVerse to be established.
            </p>
          </div>
          {/* <div className="team-member-card" style={{ width: "auto" }}>
            <a href="https://twitter.com/ItShoPal" className="w-inline-block">
              <img src="/5.png" alt="" style={{ maxWidth: "20%" }} />
            </a>
            <h3 className="name">Name</h3>
            <p className="team-description">Healthcare Professional</p>
            <p>
              Health professionals play a crucial role in enhancing population
              accessibility and the quality of the healthcare system. With over
              ten years of experience in healthcare, medication, and drug
              therapy, Ms. Beauty built Wisdom Lab into a prosperous
              non-traditional professional clinic. After many successful cases
              over the last six years, she is the best healthcare professional
              in the city. A 6-month immersion into research within the NFT
              space revealed the time was ripe for Wisdom Labs to be
              established. X will be stepping down as a healthcare professional
              of Beauty Brain MetaSpa to focus on labs.
            </p>
            <a
              href="https://twitter.com/ItShoPal"
              className="twitter-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"
                loading="lazy"
                alt="Twitter"
              />
            </a>
          </div> */}
          {/* <div className="team-member-card">
            <a
              href="https://twitter.com/buenonft"
              
              className="w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0657e89e94fd954ec59_RobotoPal.png"
                loading="lazy"
                width="223"
                alt=""
                className="team-member-image"
              />
            </a>
            <h3 className="name">Bueno</h3>
            <p className="team-description">
              Development team behind{" "}
              <a
                href="https://twitter.com/robotosNFT"
                
                className="inline-link underlined"
              >
                Robotos
              </a>
            </p>
            <a
              href="https://twitter.com/buenonft"
              
              className="twitter-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"
                loading="lazy"
                alt="Twitter"
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
