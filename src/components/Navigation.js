import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import logo1 from "../assests/LABS2b.png";
import logo from "../assests/logo.png";
import { LinkOff, LinkOffOutlined, LinkRounded } from "@material-ui/icons";
import { AppContext } from "../context/AppContext";
import { ethers } from 'ethers';
const Navigation = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [toggleImage, setToggleImage] = useState(false)
  const [scroll, setScroll] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false); // Added state to track wallet connection status
  const NFT_COLLECTIONS = [
    "https://opensea.io/collection/owlpha",
    "https://opensea.io/collection/galactic-eagle-gang-1",
    "https://opensea.io/collection/ringrunnerz-nft",
    "https://opensea.io/collection/owlpha-core",
    "https://opensea.io/collection/maxxego",
    "https://magiceden.io/marketplace/bombaclot",
    "https://magiceden.io/marketplace/region79",
  ];
  const {
    account,
    library,
    provider,
    connectWallet,
    getAccBalance,
    networkId,
  } = useContext(AppContext);



  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }
  const logWalletBalance = async () => {
    try {
      const balance = await getAccBalance();
      console.log("Wallet Balance:", balance.toString());
    } catch (error) {
      console.log("Error fetching wallet balance:", error);
    }
  };
  const checkUserNFTs = async () => {

    try {
      if (!library || !account) return false;

      const ethersProvider = library.getSigner();
      const OpenSeaAssetContract = new ethers.Contract(
        "0x495f947276749ce646f68ac8c248420045cb7b5e",
        [
          "function balanceOf(address _owner) view returns (uint256)",
          "function tokenOfOwnerByIndex(address _owner, uint256 _index) view returns (uint256)",
        ],
        ethersProvider
      );
      console.log('kutt');
      console.log(ethersProvider, OpenSeaAssetContract);
      // Check each NFT collection
      for (const collectionUrl of NFT_COLLECTIONS) {
        const response = await fetch(collectionUrl);
        const collectionData = await response.json();
        const ownerNFTCount = await OpenSeaAssetContract.balanceOf(account);

        for (let i = 0; i < ownerNFTCount; i++) {
          const tokenId = await OpenSeaAssetContract.tokenOfOwnerByIndex(account, i);
          if (collectionData.assets.some((asset) => asset.token_id === tokenId.toString())) {
            console.log("User holds an NFT from", collectionUrl);
            console.log(collectionData, collectionData);
            return true;
          }
        }
      }

      console.log("User does not hold any NFT from the specified collections");
      return false;
    } catch (error) {
      console.log("Error checking user NFTs:", error);
      return false;
    }
  };
  // Modify the connectWallet function to check NFTs after connecting
  const connectWalletWithNFTCheck = async (switchChain) => {
    try {
      const connectResult = await connectWallet(switchChain);
      console.log(connectResult);
      if (connectResult.message === "success") {
        await checkUserNFTs();
      }
      return connectResult;
    } catch (error) {
      console.log("Error connecting wallet:", error);
      return Promise.reject({ message: 'Something went wrong.' });
    }
  };
  useEffect(() => {
    if (account) {
      setWalletConnected(true);
      console.log(account);
      logWalletBalance()
    } else {
      setWalletConnected(false);
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      if (window.scrollY >= 70) {
        setNavColor(true);
      } else {
        setNavColor(false);
        setNavToggler(false);
      }
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", () => { });
    };

  }, [account]);
  return (
    <>
      <header className={navToggler ? "nav__active" : ""} >
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <Link to="" onClick={() => setToggleImage(!toggleImage)}>
                  <img src={toggleImage ? logo1 : logo} alt="" />
                </Link>
              </div>
              <nav style={navToggler ? { display: "flex" } : null}>
                <ul className={navToggler ? "ul__active" : ""}>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind}>
                        <a
                          style={navColor ? { textShadow: "none" } : {}}
                          href={ite.path}
                        >
                          {ite.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="btn" onClick={() => { connectWalletWithNFTCheck(); }}>
                  {/* Display "CONNECT WALLET" or "CONNECTED" based on the wallet connection status */}
                  {walletConnected ? "CONNECTED" : "CONNECT WALLET"}
                </div>
              </nav>
              <div className="nav__btns">
                <i onClick={() => barBtn()} className="bars">
                  <img
                    src={
                      !navToggler ? "/images/bb (1).png" : "/images/bb (2).png"
                    }
                    alt=""
                    style={{
                      width: "33px",
                      height: "auto",
                      filter: "invert(1)",
                      cursor: "pointer",
                      transitions: "all 0.5s ease-in-out",
                    }}
                  />
                </i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <i>
          <MdKeyboardArrowUp />
        </i>
      </div>
    </>
  );
};

export default Navigation;
