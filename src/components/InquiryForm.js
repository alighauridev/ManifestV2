import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cross from "../assests/bb (2).png"
import "../scss/contactForm.scss";
import axios from 'axios'
const InquiryForm = ({ setInquiryFormShow }) => {
    const [form, setForm] = useState({
        name: "",
        company: "",
        twitterPersonal: "",
        twitterBusiness: "",
        email: "",
        website: "",
        helpNeeded: "",
        stageOfBusiness: "",
        aboutProject: "",

    });
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const sendEmail = async (e) => {
        e.preventDefault();
        setloading(true);

        try {
            const response = await axios.post(
                'https://sheet.best/api/sheets/a4b3b761-fb85-4586-9155-a4d931d6ba00',
                {
                    Name: form.name,
                    Company: form.company,
                    TwitterPersonal: form.twitterPersonal,
                    TwitterBusiness: form.twitterBusiness,
                    Email: form.email,
                    Website: form.website,
                    HelpNeeded: form.helpNeeded,
                    StageOfBusiness: form.stageOfBusiness,
                    AboutProject: form.aboutProject,
                },
            )

            toast.success("Submitted Successfully!");
            setInquiryFormShow(false);
            setloading(false);
        } catch (error) {
            console.log(error.text);
            toast.error(error.text);
            setInquiryFormShow(false);
            setloading(false);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const investmentBudgetOptions = [
        { value: "$0 - $5k", label: " $0 - $5k" },
        { value: "$5k - $10k", label: "$5k - $10k" },
        { value: "$10k - $25k", label: "$10k - $25k" },
        { value: "$25k - $50k", label: "$25k - $50k" },
        { value: "$50k +", label: "  $50k +" },
    ];

    const bestTimeToContactOptions = [
        { value: "Morning", label: "Morning" },
        { value: "Afternoon", label: "Afternoon" },
        { value: "Evening", label: "Evening" },
    ];

    return (
        <div className="contact" data-aos={"fade-up"} data-aos-duration="300">

            <div className="grid__">
                <div className="container ">

                    <div
                        className="cross"
                        onClick={() => {
                            setInquiryFormShow(false);
                        }}
                    >
                        <img src={cross} alt="" />
                    </div>
                    <div className="heading">
                        {/* <h2>Fill Out the details</h2> */}
                    </div>
                    <form onSubmit={sendEmail}>
                        <div className="first">
                            <div className="item">
                                <input
                                    id="name"
                                    required={true}
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="first">
                            <div className="item">
                                <input
                                    id="company"
                                    required={true}
                                    type="text"
                                    placeholder="Company Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="first grid__two">
                            <div className="item">
                                <input
                                    id="twitterPersonal"
                                    required={true}
                                    type="text"
                                    placeholder="Twitter Personal"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="item">
                                <input
                                    id="twitterBusiness"
                                    required={true}
                                    type="text"
                                    placeholder="Twitter Business"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="second">
                            <div className="item">
                                <input
                                    id="email"
                                    required={true}
                                    type="email"
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="third">

                            <div className="item">
                                <input
                                    id="website"
                                    required={true}
                                    type="text"
                                    placeholder="Website Link"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="first grid__two">
                            <div className="item">
                                <input
                                    id="stageOfBusiness"
                                    required={true}
                                    type="text"
                                    placeholder="Which stage is your business "
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="item">
                                <input
                                    id="helpNeeded"
                                    required={true}
                                    type="text"
                                    placeholder="What do you need help with"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="first ">
                            <div className='item'>
                                <textarea name="" id="aboutProject" cols="15" placeholder='Tell us about your project' rows="10" onChange={handleChange} ></textarea>
                            </div>
                        </div>
                        <div className="first">

                            <button>{loading ? "Submitting..." : "Submit"}</button>
                        </div>
                    </form>
                </div>
                <div className="content">
                    <h2>Incubator Program</h2>
                    <p>Introducing the MNFST Lab Incubator Program — your gateway to transforming ideas into reality in the decentralized Web3 landscape.</p>
                    <p>As pioneers in the NFT space, we at MNFST recognize the limitless potential of creative minds. </p>
                    <p>Our Incubator Program is designed to empower creators, startups, and innovators to reach new heights. </p>
                    <p>Whether you have a nascent concept or an emerging business, our tailor-made support system is here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InquiryForm;
