import React, { useRef, useState } from "react";
import Question from "./Question";

export default function FAQ() {
  return (
    <>
      <div
        id="faq"
        className="mint-green-section wf-section"
        style={{ backgroundColor: "var(--palette-dark-2)" }}
      >
        <div className="container _750 w-container">
          <img
            src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0108012782683157ddc_flower.svg"
            loading="lazy"
            alt=""
            className="emoji-on-top flower"
          />
          <h2 className="centered-heading">FAQ</h2>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <Question
                title={<div className="faq-question">What is NFT?</div>}
                info={
                  <div className="faq-content w-richtext">
                    <p>
                      The acronym NFT stands for &quot;non-fungible token.&quot;
                      An interchangeable item, such as a $1 bill, is
                      transferable with any other dollar bill. The only digital
                      asset that cannot be exchanged for another NFT is a
                      non-fungible token. Therefore, every NFT is distinctive.
                    </p>
                    <p>
                      NFTs are moved from one user to another using blockchain
                      solutions, which create data traces from the producer to
                      the consumer that confirms the purchase. This specifies
                      the buyer&apos;s one-of-a-kind ownership rights (new owner).
                    </p>
                  </div>
                }
              />
              <Question
                title={<div className="faq-question">How to Mint NFT?</div>}
                info={
                  <div
                    className="faq-content w-richtext"
                    style={{ fontSize: "18px" }}
                  >
                    <p>
                      You&apos;ll need three things before you can start minting your
                      own NFTs:
                    </p>
                    <ul>
                      <li>Music, a piece of artwork, or a collectible</li>
                      <li>
                        A cryptocurrency wallet to store your cryptocurrency
                      </li>
                      <li>Some ethereum to pay the minting fee</li>
                    </ul>
                    <p>
                      You&apos;ll also have to decide which blockchain your
                      non-fungible token will be built on. The technique for
                      minting NFTs varies in each marketplace. Most of the
                      techniques mentioned here, however, will apply to all
                      platforms in some way.
                    </p>
                    <ul>
                      <li>Open an account with a crypto exchange</li>
                      <li>Set up an account with a crypto wallet</li>
                      <li>Transfer Ether from your exchange to your wallet</li>
                      <li>Join up for the network using your wallet</li>
                      <li>Mint an NFT</li>
                      <li>Trade your NFT</li>
                    </ul>
                    <p>
                      Your first NFT would have been coined by now if you had
                      followed these instructions.
                    </p>
                  </div>
                }
              />
              {/* <Question
                title={<div className="faq-question">What is the utility?</div>}
                info={
                  <div className="faq-content w-richtext">
                    <p>
                      Holders have exclusive access to our best Alpha Group of
                      the NFT World, connections with most renowned underground
                      artists around the globe, big project WL giveaways and
                      receive IRL Collectibles
                    </p>
                  </div>
                }
              />
              <Question
                title={<div className="faq-question">What are NFTs?</div>}
                info={
                  <div className="faq-content w-richtext">
                    <p>
                      NFT stands for “non-fungible token” which are unique
                      digital items that are stored and encrypted on the
                      blockchain that people can buy, own, and trade. NFTs can
                      simply be digital art but can have various benefits. They
                      can be treated like membership cards where holders get
                      exclusive access to things like websites, events,
                      merchandise, and more.
                    </p>
                  </div>
                }
              />
              <Question
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
        <img
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
        />
      </div>
    </>
  );
}
