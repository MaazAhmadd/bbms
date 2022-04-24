import React, { useRef, useState } from "react";
import Question from "./Question";

export default function FAQ() {
  return (
    <>
      <div
        id="faq"
        className="mint-green-section wf-section"
        style={{ backgroundColor: "var(--palette-dark-3)" }}
      >
        <div className="container _750 w-container">
          {/* <img
            src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0108012782683157ddc_flower.svg"
            loading="lazy"
            alt=""
            className="emoji-on-top flower"
          /> */}
          <h2 className="centered-heading nav_lk_cl">FAQ</h2>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <Question
                title={<div className="faq-question">What is SpaVerse?</div>}
                info={
                  <div className="faq-content w-richtext">
                    <p>
                      Join us on this luxurious journey in May 2022 to witness a
                      new NFT collection that is as lavish as your dreams. Our
                      initial launch is Beauty Brain NFT collection of 2500
                      living on the Ethereum blockchain in the form of an
                      ERC-721 token. Brain Beauty card holders will have early
                      access to an upcoming SpaVerse projects that are related
                      to health, wellness, and beauty.
                    </p>
                  </div>
                }
              />
              <Question
                title={
                  <div className="faq-question">What distinguishes us?</div>
                }
                info={
                  <div
                    className="faq-content w-richtext"
                    style={{ fontSize: "18px" }}
                  >
                    <h3>Two Key Points:</h3>
                    <p>
                      Our team&apos;s experience, straightaway thinking, the
                      background of long-term success, and affirmation of
                      short-term executions.
                      <br />
                      And,
                      <br />
                      Our willingness to put in the long, arduous hours day
                      after day until we achieve our objectives
                    </p>
                  </div>
                }
              />
              <Question
                title={<div className="faq-question">What is our process?</div>}
                info={
                  <div className="faq-content w-richtext">
                    Every single one of us is an innovator.
                    <br />
                    <br />
                    We are all motivators and change agents. It&apos;s a new way
                    of doing things.
                    <br />
                    <br />
                    We believe by putting ideas into blockchain technology, a
                    new wave of NFT initiatives and collections will emerge.
                    <br />
                    <br />
                    To be clear, this is not a duplicate project; we&apos;ve
                    looked at dozens of roadmaps and watched projects develop,
                    flourish, and collapse.
                  </div>
                }
              />
              <Question
                title={
                  <div className="faq-question">
                    What are the perks of holding SpaVerse NFT?
                  </div>
                }
                info={
                  <div className="faq-content w-richtext">
                    <p>
                      There will be several surprises for those who will
                      successfully mint.
                    </p>
                  </div>
                }
              />
              <Question
                title={<div className="faq-question">How to Mint NFT?</div>}
                info={
                  <div className="faq-content w-richtext">
                    <p>
                      Open an account with a crypto exchange
                      <br />
                      Set up an account
                      <br />
                      with a crypto wallet Transfer Ether from your exchange to
                      your wallet
                      <br />
                      Visit www.spaverse.com
                      <br />
                      Click on the Mint Connect it with your wallet
                      <br />
                      Welcome to SpaVerse!
                    </p>
                  </div>
                }
              />
              {/*<Question
                title={
                  <div className="faq-question">
                    How do I buy a WonderMfers NFT?
                  </div>
                }
                info={
                  <div className="faq-content w-richtext">
                    <p>
                      1. Sign up for Metamask or Coinbase Wallet and download
                      the extension on your internet browser.
                    </p>
                    <p>
                      2. Make sure you have enough Ethereum in your wallet to
                      cover the total cost including gas fees.
                    </p>
                    <p>
                      3. On mint day, there will be a <strong>Mint</strong>{" "}
                      button at the top of our website. Click on it and then{" "}
                      <strong>Connect</strong> to your wallet.
                    </p>
                    <p>
                      4. Click on the mint button and you will be prompted to
                      sign for your transaction. There will be a fee associated
                      with every transaction related to gas prices.
                    </p>
                    <p>
                      5. Once you have made your purchase, your WonderMfers NFTs
                      will appear in your wallet and on Opensea!
                      <strong></strong>
                    </p>
                  </div>
                }
              /> */}

              {/* ********************************************* */}

              {/* <div role="listitem" className="w-dyn-item">
                <div className="faq-parent">
                  <div className="faq-title-area">
                    <div className="faq-question">
                      What is the supply &amp; mint price?
                    </div>
                    <img
                      onClick={clicked}
                      src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9d27a7d3d18755d2236eb_Vector%20(14).svg"
                      loading="lazy"
                      alt="Expand"
                      className="faq-plus"
                    />
                  </div>
                  <div
                    ref={faqButton}
                    className="faq-content-holder"
                    style={{ height: expanded ? "100%" : "0" }}
                  >
                    <div className="faq-content w-richtext">
                      <p>
                        There will be a total of 10,000 WonderPals available.
                      </p>
                      <p>Mint price 0.08 ETH.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="faq-parent">
                  <div className="faq-title-area">
                    <div className="faq-question">When is the launch date?</div>
                    <img
                      src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9d27a7d3d18755d2236eb_Vector%20(14).svg"
                      loading="lazy"
                      alt="Expand"
                      className="faq-plus"
                    />
                  </div>
                  <div
                    className="faq-content-holder"
                    style={{ height: expanded ? "100%" : "0" }}
                  >
                    <div className="faq-content w-richtext">
                      <p>
                        We are launching soon. 
                      </p>
                      <p>
                        <em>
                          NOTE: We will never have a stealth-launch, please be
                          careful of scams. Official launch details will be
                          shared on our website, Discord, and our Twitter page.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="faq-parent">
                  <div className="faq-title-area">
                    <div className="faq-question">What is the utility?</div>
                    <img
                      src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9d27a7d3d18755d2236eb_Vector%20(14).svg"
                      loading="lazy"
                      alt="Expand"
                      className="faq-plus"
                    />
                  </div>
                  <div
                    className="faq-content-holder"
                    style={{ height: expanded ? "100%" : "0" }}
                  >
                    <div className="faq-content w-richtext">
                      <p>
                        Holders of WonderPals will have a fun &amp; cute piece
                        of art, plus access to our close-knit community,
                        holder-exclusive giveaways, contests, priority in future
                        collections, and more!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="faq-parent">
                  <div className="faq-title-area">
                    <div className="faq-question">What are NFTs?</div>
                    <img
                      src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9d27a7d3d18755d2236eb_Vector%20(14).svg"
                      loading="lazy"
                      alt="Expand"
                      className="faq-plus"
                    />
                  </div>
                  <div
                    className="faq-content-holder"
                    style={{ height: expanded ? "100%" : "0" }}
                  >
                    <div className="faq-content w-richtext">
                      <p>
                        NFT stands for “non-fungible token” which are unique
                        digital items that are stored and encrypted on the
                        blockchain that people can buy, own, and trade. NFTs can
                        simply be digital art but can have various benefits.
                        They can be treated like membership cards where holders
                        get exclusive access to things like websites, events,
                        merchandise, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="faq-parent">
                  <div className="faq-title-area">
                    <div className="faq-question">
                      How do I buy a WonderPals NFT?
                    </div>
                    <img
                      src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9d27a7d3d18755d2236eb_Vector%20(14).svg"
                      loading="lazy"
                      alt="Expand"
                      className="faq-plus"
                    />
                  </div>
                  <div
                    className="faq-content-holder"
                    style={{ height: expanded ? "100%" : "0" }}
                  >
                    <div className="faq-content w-richtext">
                      <p>
                        1. Sign up for Metamask or Coinbase Wallet and download
                        the extension on your internet browser.
                      </p>
                      <p>
                        2. Make sure you have enough Ethereum in your wallet to
                        cover the total cost including gas fees.
                      </p>
                      <p>
                        3. On mint day, there will be a <strong>Connect</strong>{" "}
                        button at the top of our website to connect to your
                        wallet.
                      </p>
                      <p>
                        4. Click on the mint button and you will be prompted to
                        sign for your transaction. There will be a fee
                        associated with every transaction related to gas prices.
                      </p>
                      <p>
                        5. Once you have made your purchase, your WonderPals
                        NFTs will appear in your wallet and on Opensea!
                        <strong></strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <img
          src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b0fe0ff651fc9082_egg.png"
          loading="lazy"
          width="152"
          data-w-id="347b8bfa-6b83-de36-4143-cabe0a9340b4"
          alt=""
          className="froggy-boi animate__animated animate__heartBeat"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        />
        <img
          src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011a8f37c6d4ffbca5a_bunny.png"
          loading="lazy"
          width="152"
          data-w-id="45b8b426-e5da-c430-a2c2-cf9c64437e53"
          alt=""
          className="ear-dealio  animate__animated animate__heartBeat"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        />
        <img
          src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0112bb860f801f7c761_music.png"
          loading="lazy"
          width="152"
          data-w-id="ccf32dbc-2ff9-27c9-c47c-3ac0c0b4c32f"
          alt=""
          className="left-bottom-wonderpal  animate__animated animate__heartBeat"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        />
        <img
          src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b0fe0ffe6ffc9081_cat%20(1).png"
          loading="lazy"
          width="152"
          data-w-id="ab351f2e-4206-4bb5-7f7b-2a819d55ba8f"
          alt=""
          className="mid-kitty  animate__animated animate__heartBeat"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        />
        <img
          src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011463538148fdd0543_apple.png"
          loading="lazy"
          width="152"
          data-w-id="9035fe08-d73d-5292-80a9-e04604b906e7"
          alt=""
          className="mid-lemon  animate__animated animate__heartBeat "
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        /> */}
      </div>
    </>
  );
}
