import React, { useState } from "react";
import Plus from "./icons/Plus";

export default function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div role="listitem" className="w-dyn-item">
      <div
        className="faq-parent border-gradient border-gradient-gold"
        style={{
          backgroundColor: "var(--palette-dark-3)",
          backgroundImage:
            "linear-gradient(to right, rgb(193, 112, 44), rgb(246, 222, 125), rgb(193, 112, 44))",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          borderRadius: "0",
        }}
      >
        <div className="faq-title-area">
          {title}
          <span
            onClick={() => setShowInfo(!showInfo)}
            className="text_grad m0"
            style={{ fontWeight: "900", padding: "2px 12px" }}
          >
            +
          </span>
          {/* <Plus color={"gold"} onClick={() => setShowInfo(!showInfo)} /> */}
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
