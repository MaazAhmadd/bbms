import React, { useState } from "react";

export default function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div role="listitem" className="w-dyn-item">
      <div
        className="faq-parent"
        style={{ backgroundColor: "var(--palette-light-1)" }}
      >
        <div className="faq-title-area">
          {title}
          <img
            onClick={() => setShowInfo(!showInfo)}
            src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9d27a7d3d18755d2236eb_Vector%20(14).svg"
            loading="lazy"
            alt="Expand"
            className="faq-plus"
          />
        </div>
        <div
          //   ref={faqButton}
          className="faq-content-holder"
          style={{ height: showInfo ? "100%" : "0" }}
        >
          {info}
        </div>
      </div>
    </div>
  );
}
