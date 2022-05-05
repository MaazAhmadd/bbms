import React, { useRef, useState } from "react";
import Question from "./Question";
import useWindowDimensions from "./useDimensions";

export default function FAQ() {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div
        id="faq"
        className="mint-green-section wf-section"
        style={{ backgroundColor: "var(--palette-dark-3)" }}
      >
        <div
          className="container _750 w-container"
          style={width < 640 ? { padding: "15% 4%" } : {}}
        >
          {/* <img
            src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0108012782683157ddc_flower.svg"
            loading="lazy"
            alt=""
            className="emoji-on-top flower"
          /> */}
          <h2
            className="centered-heading nav_lk_cl text_grad"
            style={{ width: "16%", marginBottom: "5%" }}
          >
            FAQ
          </h2>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <Question
                title={
                  <div className="faq-question text_grad m0">
                    What is so special about this NFT collection?
                  </div>
                }
                info={
                  <div className="faq-content w-richtext">
                    <p className="text_grad ">
                      We believe that a new wave of NFT initiatives and
                      collections will emerge on blockchain technology. After
                      understanding and analyzing all the successful projects,
                      we believe our foundation and long-term vision set us
                      apart from other projects. SpaVerse is the first
                      groundbreaking medical spa project committed to optimizing
                      every human’s spa experience through the virtual world.
                    </p>
                  </div>
                }
              />
              <Question
                title={
                  <div className="faq-question text_grad m0">
                    How do I purchase a SpaVerse NFT?
                  </div>
                }
                info={
                  <div className="faq-content w-richtext text_grad">
                    <p>
                      To purchase a SpaVerse NFT, conduct the following steps:{" "}
                    </p>
                    <p>
                      1. You will need to buy ETH from a cryptocurrency exchange
                      like Coinbase, or Binance.
                    </p>
                    <p>
                      2. You will need to transfer your ETH into a digital
                      wallet like MetaMask, or WalletConnect compatible wallets.
                    </p>
                    <p>
                      3. These wallets connect to the SpaVerse website and allow
                      you to purchase an NFT.
                    </p>
                  </div>
                }
              />
              <Question
                title={
                  <div className="faq-question text_grad m0">
                    How many can we mint per wallet?
                  </div>
                }
                info={
                  <div
                    className="faq-content w-richtext text_grad"
                    style={{ fontSize: "18px" }}
                  >
                    <p>Presale: 4 per wallet</p>
                    <p>Public sale: 8 per wallet</p>
                  </div>
                }
              />
              <Question
                title={
                  <div className="faq-question text_grad m0">
                    How much does it cost to mint?
                  </div>
                }
                info={
                  <div className="faq-content w-richtext text_grad">
                    <p>Presale: 0.05</p>
                    <p>Public Sale: 0.07</p>
                  </div>
                }
              />
              {/* <Question
                title={
                  <div className="faq-question text_grad m0">
                    How do I find more information about this project?
                  </div>
                }
                info={<div className="faq-content w-richtext text_grad">


                </div>}
              /> */}

              {/* <Question
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
              /> */}
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
