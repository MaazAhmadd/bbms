import React from "react";

export default function Team() {
  return (
    <div
      id="team"
      className="blue-section wf-section"
      style={{ backgroundColor: "var(--palette-light-2)" }}
    >
      <div className="container _880 w-container">
        <img
          src="https://assets-global.website-files.com/61e9ad107f42425177667f64/62619dc7735ac66a99a483b1_Group%2092.png"
          loading="lazy"
          width="89.5"
          alt=""
          className="emoji-on-top flower"
        />
        <h2 className="centered-heading">Our Team</h2>
        <p>
          Beauty Brain MetaSpa is supported by physicians and healthcare
          professionals to build and educate the community on wellbeing.
        </p>
        <div
          className="team-flex"
          style={{ justifyContent: "space-evenly", flexDirection: "column" }}
        >
          <div className="team-member-card" style={{ width: "auto" }}>
            <a href="https://twitter.com/minasnft" className="w-inline-block">
              <img
                src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0652622fd9708f685c3_blank%205%20(1).png"
                loading="lazy"
                width="223"
                alt=""
                className="team-member-image"
              />
            </a>
            <h3 className="name">Name</h3>
            <p className="team-description">
              Physician
              {/* <br />
              Creative Director */}
            </p>
            <p>
              Physicians work with other healthcare professionals to make human
              safety and treat a variety of diseases, wounds, and illnesses. Mr.
              Brain is an award-winning physician with over 10 years of hospital
              experience across United States. He has collaborated on campaigns
              for some of the world&apos;s most recognized hospitals, delivering a
              multidisciplinary blend of consistently successful cases. Mr.
              Brain always deconstructs the boundaries between patient and
              doctor to save the case.
            </p>
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
          <div className="team-member-card" style={{ width: "auto" }}>
            <a href="https://twitter.com/ItShoPal" className="w-inline-block">
              <img
                src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c065613399d1450070f2_blank%204%20(1).png"
                loading="lazy"
                width="223"
                alt=""
                className="team-member-image"
              />
            </a>
            <h3 className="name">Name</h3>
            <p className="team-description">
              Healthcare Professional
              {/* <br />
              Project Manager */}
            </p>
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
          </div>
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
