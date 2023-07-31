import React, { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./banner.scss";

import vid from "../assests/justsul.47fae79695fcc23c0454.mp4"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Banner = () => {
    const [height, setHeight] = useState();
    window.addEventListener("scroll", () => {
        setHeight((window.scrollY / 4918) * 100);
    });
    const {
        account,
        library,
        provider,
        connectWallet,
        getAccBalance,
        networkId,
    } = useContext(AppContext)
    const navigate = useNavigate();
    useEffect(() => {
        document.getElementById('meri').play()
    }, [])

    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="grid">
                        <div className="item">
                            <div>          <video id="meri" autoPlay muted playsInline loop src={vid} /></div>


                            <div className="btns">
                                <a>Buy Now!</a>
                                <a href="https://t.me/JustSulPortal" target={"_blank"}>
                                    Telegram{" "}
                                </a>
                                <a>View Chart</a>
                            </div>

                        </div>
                        <div
                            onClick={
                                connectWallet(true)

                            }
                            className='btns'
                        >
                            <button>CONNECT WALLET</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
