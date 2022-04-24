import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../components/redux/blockchain/blockchainActions";
import { fetchData } from "../components/redux/data/dataActions";
import * as s from "../components/styles/globalStyles";
import styled from "styled-components";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #29629a;
  font-weight: bold;
  color: #dae7f8;
  width: 140px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  border-radius: 100%;
  border: none;
  background-color: #5d6c7b;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  } */
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

export default function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    async function test() {
      let totalsupply = await blockchain.smartContract.methods
        .totalSupply()
        .call({
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
        });
      console.log(totalsupply);
      console.log("asdasdasdasdasdasdasd");

      if (totalsupply >= 1000) {
        blockchain.smartContract.methods
          .mint(mintAmount)
          .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
          })
          .then((receipt) => {
            console.log(receipt);
            setFeedback(
              `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
          });
      } else if (totalsupply < 1000) {
        console.log("asdasdsadasdasd");
        let overAmount1 = parseInt(totalsupply) + parseInt(mintAmount);
        console.log(overAmount1);
        if (overAmount1 > 1000) {
          console.log("asdasdsadasdasd11111111");
          console.log(totalsupply);
          console.log(mintAmount);

          let overAmount = overAmount1 - 1000;
          console.log(overAmount);
          totalCostWei = String(cost * overAmount);
          console.log(totalCostWei);

          blockchain.smartContract.methods
            .mint(mintAmount)
            .send({
              gasLimit: String(totalGasLimit),
              to: CONFIG.CONTRACT_ADDRESS,
              from: blockchain.account,
              value: totalCostWei,
            })
            .once("error", (err) => {
              console.log(err);
              setFeedback(
                "Sorry, something went wrong please try again later."
              );
              setClaimingNft(false);
            })
            .then((receipt) => {
              console.log(receipt);
              setFeedback(
                `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
              );
              setClaimingNft(false);
              dispatch(fetchData(blockchain.account));
            });
        } else {
          blockchain.smartContract.methods
            .mint(mintAmount)
            .send({
              gasLimit: String(totalGasLimit),
              to: CONFIG.CONTRACT_ADDRESS,
              from: blockchain.account,
            })
            .once("error", (err) => {
              console.log(err);
              setFeedback(
                "Sorry, something went wrong please try again later."
              );
              setClaimingNft(false);
            })
            .then((receipt) => {
              console.log(receipt);
              setFeedback(
                `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
              );
              setClaimingNft(false);
              dispatch(fetchData(blockchain.account));
            });
        }
      }
    }
    test();
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <>
      <div
        id="home"
        className="hero-section"
        // style={{ height: "100vh" }}
      >
        {/* <div className="absolute-clouds">
          <img
            src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011ce5e644d48e10e61_Vector%2096.svg"
            loading="lazy"
            style={{
              transform:
                "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            data-w-id="4b10e664-d74c-bbd5-51f8-24921901f93f"
            alt=""
            className="right-cloud"
          />
          <img
            src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c0121ccbd5dd9fb6e82e_Vector%2097.svg"
            loading="lazy"
            style={{
              transform:
                "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            data-w-id="ec55ca2d-d790-5b75-1a1f-3a44acd6c689"
            alt=""
            className="left-cloud"
          />
        </div> */}
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
            <a>
              <img
                loading="lazy"
                className="nav-logo w-nav-brand w--current"
                src="/imgs/logo.png"
                alt="Wonder Pals"
              />
            </a>
          </Link>
          <nav role="navigation" className="nav-menu w-nav-menu">
            {/* <a href="#about" className="nav-link w-nav-link">
              About
            </a> */}
            <Link href="/">
              <a className="nav-link w-nav-link nav_lk_cl">Back To Home</a>
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
        <div className="container centered-text w-container">
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--palette-dark-1)",
              padding: 24,
              color: "white",
              borderRadius: 24,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Every WMF is free to mint
                </s.TextTitle>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}
                  {CONFIG.NETWORK.SYMBOL}.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Excluding gas fees.
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerMedium />
          </s.Container>
        </div>
      </div>
    </>
  );
}
