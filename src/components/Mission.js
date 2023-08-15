import React, { useState, useEffect } from "react";
import m1 from "../assests/m.1.jpg";
import m2 from "../assests/m.2.jpg";
import m3 from "../assests/m.3.jpg";
import "../scss/mission.scss";
const Mission = () => {
  const [tabs, setTabs] = useState("tab1");

  useEffect(() => { }, []);
  return (
    <>
      <section id="mission">
        <div className="container">
          <div className="start">
            <div className="heading" data-aos="">Our Mission</div>

            <div className="list">
              <ul>
                <li
                  className={tabs === "tab1" ? "set" : null}
                  onClick={() => {
                    setTabs("tab1");
                  }}
                  data-aos=""
                >
                  Creating Tangible Connections.
                </li>
                <li
                  className={tabs === "tab2" ? "set" : null}
                  onClick={() => {
                    setTabs("tab2");
                  }}
                  data-aos=""
                >
                  Crafting Immersive Narratives
                </li>
                <li
                  className={tabs === "tab3" ? "set" : null}
                  onClick={() => {
                    setTabs("tab3");
                  }}
                  data-aos=""
                >
                  Pioneering Real-World Tech Innovations.
                </li>
              </ul>
              <span className="line"></span>
            </div>
          </div>
          <div className="img-wrapper" data-aos="">
            {tabs === "tab1" && (
              <>
                <div
                  className="img"
                  data-aos-not="fade"
                  style={tabs === "tab1" ? { transform: "scale(1)" } : null}
                >
                  <img src={m1} alt="" />
                  <div className="para" data-aos-not="fade">
                    <p>
                      We envision a future where digital collectibles come to life, transcending the screen to take physical form.
                    </p>
                    <p>From exclusive toys to hoot energy products, we offer a unique blend of physical activations.</p>
                    <p>These initiatives are designed to resonate with our community, setting the stage for immersive experiences.</p>
                  </div>
                </div>
              </>
            )}
            {tabs === "tab2" && (
              <>
                <div
                  className="img"
                  data-aos-not="fade"
                  style={tabs === "tab2" ? { transform: "scale(1)" } : null}
                >
                  <img src={"https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt="" />
                  <div className="para" data-aos-not="fade">
                    <p>
                      At MNFST Labs, storytelling transforms digital assets into an immersive journey.
                    </p>
                    <p>We create animation anime that brings our IPs to life, weaving intricate storylines.</p>
                    <p>Our ambition goes beyond mere jpegs, building a big picture that resonates with our audience.</p>
                  </div>
                </div>
              </>
            )}
            {tabs === "tab3" && (
              <>
                <div
                  className="img"
                  data-aos-not="fade"
                  style={tabs === "tab3" ? { transform: "scale(1)" } : null}
                >
                  <img src={"https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt="" />
                  <div className="para" data-aos-not="fade">
                    <p>
                      Innovation drives MNFST Labs, fueling our exploration of real-world tech that aligns with our digital universe.
                    </p>
                    <p>We're at the forefront of crafting a new era of digital and physical integration, whether it's groundbreaking technology for creators, startups, or innovators.</p>
                    <p> Our pursuit connects communities and sets new standards in the Web 3.0 landscape. </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
