import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cross from "../assests/bb (2).png"
import "../scss/contactForm.scss";
const InquiryForm = ({ setInquiryFormShow }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        twitter: "",
        company: "",
    });
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();
        setloading(true);
        emailjs
            .send(
                "service_2ur2ldk",
                "template_p0zefpf",
                { ...form },
                "Xj2jv7BvQrywwCPht"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    navigate("/");
                    toast.success("Submitted Successfully!");
                    setInquiryFormShow(false);
                    setloading(false);
                },
                (error) => {
                    console.log(error.text);
                    toast.error(error.text);
                    setInquiryFormShow(false);
                    setloading(false);
                }
            );
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
                    {/* <svg width="98" height="95" viewBox="0 0 98 95" fill="none" xmlns="http://www.w3.org/2000/svg" class="border border-up" data-v-0e7db233=""><g filter="url(#filter0_d_0_1)" data-v-0e7db233=""><path d="M86.2031 85.959L86.2031 34.7976C86.2031 22.6473 76.3534 12.7976 64.2031 12.7976L10.643 12.7976" stroke="#9C47DA" stroke-width="2" data-v-0e7db233=""></path></g> <path d="M89 20.5858C89 21.4767 87.9229 21.9229 87.2929 21.2929L76.7071 10.7071C76.0771 10.0771 76.5233 9 77.4142 9L88 9C88.5523 9 89 9.44772 89 10L89 20.5858Z" fill="#9C47DA" data-v-0e7db233=""></path> <defs data-v-0e7db233=""><filter id="filter0_d_0_1" x="0.644531" y="0.797607" width="96.5586" height="94.1614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-0e7db233=""><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-0e7db233=""></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-0e7db233=""></feColorMatrix> <feOffset dy="-1" data-v-0e7db233=""></feOffset> <feGaussianBlur stdDeviation="5" data-v-0e7db233=""></feGaussianBlur> <feComposite in2="hardAlpha" operator="out" data-v-0e7db233=""></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.278431 0 0 0 0 0.854902 0 0 0 1 0" data-v-0e7db233=""></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" data-v-0e7db233=""></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" data-v-0e7db233=""></feBlend></filter></defs></svg>
                    <svg width="97" height="95" viewBox="0 0 97 95" fill="none" xmlns="http://www.w3.org/2000/svg" class="border border-down" data-v-0e7db233=""><g filter="url(#filter0_d_0_1)" data-v-0e7db233=""><path d="M11 11.0117L11 62.1731C11 74.3234 20.8497 84.1731 33 84.1731L86.5601 84.1731" stroke="#9C47DA" stroke-width="2" data-v-0e7db233=""></path></g> <path d="M8 76.4142C8 75.5233 9.07714 75.0771 9.70711 75.7071L20.2929 86.2929C20.9229 86.9229 20.4767 88 19.5858 88H9C8.44772 88 8 87.5523 8 87L8 76.4142Z" fill="#9C47DA" data-v-0e7db233=""></path> <defs data-v-0e7db233=""><filter id="filter0_d_0_1" x="0" y="0.0117188" width="96.5586" height="94.1614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-0e7db233=""><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-0e7db233=""></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-0e7db233=""></feColorMatrix> <feOffset dy="-1" data-v-0e7db233=""></feOffset> <feGaussianBlur stdDeviation="5" data-v-0e7db233=""></feGaussianBlur> <feComposite in2="hardAlpha" operator="out" data-v-0e7db233=""></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.278431 0 0 0 0 0.854902 0 0 0 1 0" data-v-0e7db233=""></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" data-v-0e7db233=""></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" data-v-0e7db233=""></feBlend></filter></defs></svg> */}
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
                                    id="twitter-personal"
                                    required={true}
                                    type="text"
                                    placeholder="Twitter Personal"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="item">
                                <input
                                    id="twitter-business"
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
                                    id="stage"
                                    required={true}
                                    type="text"
                                    placeholder="Which stage is your business "
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="item">
                                <input
                                    id="help"
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellat deserunt debitis culpa laborum vel distinctio? Sapiente qui adipisci dicta repudiandae sint id aperiam iusto ratione neque asperiores hic, ex nisi, error voluptates alias placeat voluptatibus, et itaque ducimus ea culpa laborum reiciendis. Error aliquam, explicabo eligendi corrupti a tempora!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dignissimos quibusdam provident repellat, nisi reprehenderit praesentium ipsum! Minus doloremque obcaecati explicabo deleniti nisi adipisci impedit vero, illo vel modi nam reiciendis dolorem earum animi cupiditate. Voluptatum iure quas impedit quo.</p>
                </div>
            </div>
        </div>
    );
};

export default InquiryForm;
