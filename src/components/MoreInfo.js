import React from "react";
import "../scss/moreinfo.scss";
import img1 from "../assests/moreInfo-img.webp";
const MoreInfo = () => {
  return (
    <>
      <section id="section-2">
        <div className="wrapper">
          <div className="container">
            <div className="heading" >
              <h1 data-aos="">WHO WE ARE??</h1>
            </div>

            <div className="para" data-aos="">
              <p>We are MNFST Labs, a visionary collective committed to shaping the decentralized Web 3.0 landscape's future.</p>
              <p>Through relentless innovation, we harness the potential of NFTs, weaving engaging and immersive experiences across our multiverse of interconnected projects and IPs. </p>
              <p>Our mission extends beyond merely pioneering the NFT space. We strive to democratize access, empowering creators, startups, and innovators to reach new heights.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default MoreInfo;
