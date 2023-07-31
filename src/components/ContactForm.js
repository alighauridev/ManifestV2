import React, { useState, } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import cross from "../assests/bb (2).png"
import "../scss/contactForm.scss"
import Select from 'react-select';
const ContactForm = ({ setCreatorsForm }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        website: '',
        twitter: '',
        objective: ''
    });
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const sendEmail = (e) => {
        e.preventDefault();
        setloading(true)
        emailjs.send('service_bi0twsh', 'template_p1ciihs', { ...form }, '9Pkw4rOqj4QdNqhxr')
            .then((result) => {
                console.log(result.text);
                navigate('/');
                toast.success("Submitted Successfully!")
                setCreatorsForm(false)
                setloading(false)
            }, (error) => {
                console.log(error.text);
                toast.error(error.text)
                setCreatorsForm(false)
                setloading(false)
            });
    }

    const handleChange = (field, selectedOption) => {
        setForm({ ...form, [field]: selectedOption });
    };


    const socialMediaOptions = [
        { value: 'Twitter', label: 'Twitter' },
        { value: 'TikTok', label: 'TikTok' },
        { value: 'Instagram', label: 'Instagram' },
        { value: 'YouTube', label: 'YouTube' },
    ];

    const blockchainOptions = [
        { value: 'Ethereum', label: 'Ethereum' },
        { value: 'Binance Smart Chain', label: 'Binance Smart Chain' },
        { value: 'Polygon (Matic)', label: 'Polygon (Matic)' },
        // Add more options as needed
    ];
    const playVideoGamesOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

    const videoGameTypeOptions = [
        { value: 'action', label: 'Action' },
        { value: 'adventure', label: 'Adventure' },
        { value: 'sports', label: 'Sports' },
        { value: 'rpg', label: 'RPG' },
        { value: 'strategy', label: 'Strategy' },
        // Add more options as needed
    ];

    return (
        <div className="contact" data-aos={'fade-up'} data-aos-duration="300" >
            <div className="grid__">
                <div className="container "  >
                    {/* <svg width="98" height="95" viewBox="0 0 98 95" fill="none" xmlns="http://www.w3.org/2000/svg" class="border border-up" data-v-0e7db233=""><g filter="url(#filter0_d_0_1)" data-v-0e7db233=""><path d="M86.2031 85.959L86.2031 34.7976C86.2031 22.6473 76.3534 12.7976 64.2031 12.7976L10.643 12.7976" stroke="#9C47DA" stroke-width="2" data-v-0e7db233=""></path></g> <path d="M89 20.5858C89 21.4767 87.9229 21.9229 87.2929 21.2929L76.7071 10.7071C76.0771 10.0771 76.5233 9 77.4142 9L88 9C88.5523 9 89 9.44772 89 10L89 20.5858Z" fill="#9C47DA" data-v-0e7db233=""></path> <defs data-v-0e7db233=""><filter id="filter0_d_0_1" x="0.644531" y="0.797607" width="96.5586" height="94.1614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-0e7db233=""><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-0e7db233=""></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-0e7db233=""></feColorMatrix> <feOffset dy="-1" data-v-0e7db233=""></feOffset> <feGaussianBlur stdDeviation="5" data-v-0e7db233=""></feGaussianBlur> <feComposite in2="hardAlpha" operator="out" data-v-0e7db233=""></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.278431 0 0 0 0 0.854902 0 0 0 1 0" data-v-0e7db233=""></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" data-v-0e7db233=""></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" data-v-0e7db233=""></feBlend></filter></defs></svg>
                    <svg width="97" height="95" viewBox="0 0 97 95" fill="none" xmlns="http://www.w3.org/2000/svg" class="border border-down" data-v-0e7db233=""><g filter="url(#filter0_d_0_1)" data-v-0e7db233=""><path d="M11 11.0117L11 62.1731C11 74.3234 20.8497 84.1731 33 84.1731L86.5601 84.1731" stroke="#9C47DA" stroke-width="2" data-v-0e7db233=""></path></g> <path d="M8 76.4142C8 75.5233 9.07714 75.0771 9.70711 75.7071L20.2929 86.2929C20.9229 86.9229 20.4767 88 19.5858 88H9C8.44772 88 8 87.5523 8 87L8 76.4142Z" fill="#9C47DA" data-v-0e7db233=""></path> <defs data-v-0e7db233=""><filter id="filter0_d_0_1" x="0" y="0.0117188" width="96.5586" height="94.1614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-0e7db233=""><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-0e7db233=""></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-0e7db233=""></feColorMatrix> <feOffset dy="-1" data-v-0e7db233=""></feOffset> <feGaussianBlur stdDeviation="5" data-v-0e7db233=""></feGaussianBlur> <feComposite in2="hardAlpha" operator="out" data-v-0e7db233=""></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.278431 0 0 0 0 0.854902 0 0 0 1 0" data-v-0e7db233=""></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" data-v-0e7db233=""></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" data-v-0e7db233=""></feBlend></filter></defs></svg> */}
                    <div
                        className="cross"
                        onClick={() => {
                            setCreatorsForm(false);
                        }}
                    >
                        <img src={cross} alt="" />
                    </div>
                    {/* <div className="heading">
                        <h2>Fill Out the details</h2>
                    </div> */}
                    <form onSubmit={sendEmail}>
                        <div className='first'>
                            <div className='item'>
                                <input id='name' required={true} type='text' placeholder='Enter Your Name' onChange={(e) => handleChange('name', e.target.value)} />
                            </div>
                            <div className='item'>
                                <input id='twitter' required={true} type='text' placeholder='Twitter Handle' onChange={(e) => handleChange('twitter', e.target.value)} />
                            </div>
                            <div className="first grid__two">
                                <div className='item'>
                                    <Select
                                        id='socialMedia'
                                        placeholder='Preferred Social Media Platform'
                                        options={socialMediaOptions}
                                        value={form.socialMedia}
                                        onChange={(selectedOption) => handleChange('socialMedia', selectedOption)}
                                    />
                                </div>
                                <div className='item'>
                                    <input id='tiktokIgYoutubeLinks' required={true} type='text' placeholder='TikTok/IG/YouTube Links' onChange={(e) => handleChange('tiktokIgYoutubeLinks', e.target.value)} />
                                </div>
                            </div>
                            <div className='item'>
                                <input id='contentCreated' required={true} type='text' placeholder='Type of Content Created' onChange={(e) => handleChange('contentCreated', e.target.value)} />
                            </div>
                            <div className='item'>
                                <Select
                                    id='preferredBlockchain'
                                    placeholder='Your Preferred Blockchain'
                                    options={blockchainOptions}
                                    value={form.preferredBlockchain}
                                    onChange={(selectedOption) => handleChange('preferredBlockchain', selectedOption)}
                                />
                            </div>
                            <div className="first grid__two">
                                <div className='item'>
                                    <Select id='playVideoGames'
                                        options={playVideoGamesOptions}
                                        value={form.playVideoGames}
                                        onChange={(e) => handleChange('playVideoGames', e.target.value)}
                                        placeholder='Do you play video games?
'
                                    >

                                    </Select>
                                </div>
                                {/* ... */}
                                <div className='item'>
                                    <Select
                                        id='videoGameType'
                                        options={videoGameTypeOptions}
                                        value={form.videoGameType}
                                        onChange={(e) => handleChange('videoGameType', e.target.value)}
                                        placeholder={"What type of video games?"}
                                    >

                                    </Select>
                                </div>
                            </div>

                            <div className='item'>
                                <input id='contentCreationExperience' required={true} type='text' placeholder='Content Creation Experience' onChange={(e) => handleChange('contentCreationExperience', e.target.value)} />
                            </div>
                            <div className='item'>
                                <textarea
                                    id='briefDescription'
                                    required={true}
                                    cols='20'
                                    placeholder='Brief Description of Yourself'
                                    rows='5'
                                    onChange={(e) => handleChange('briefDescription', e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <div className="first">
                            <button>{loading ? "Submitting..." : "Submit"}</button>
                        </div>
                    </form>
                </div>
                <div className="content">
                    <h2>Content Creators Form</h2>
                    <p>The CONTENT CREATORS FORM is a comprehensive platform designed to empower and engage content creators across various digital mediums. It serves as a bridge between aspiring creators and their audience, providing an intuitive interface to share their unique creations with the world. Whether it's creating captivating videos, crafting compelling blog posts, or curating visually stunning images, this form caters to a diverse range of creative talents.</p>

                    <p>With a user-friendly layout and a wealth of features, the CONTENT CREATORS FORM allows creators to showcase their work, connect with their target audience, and receive valuable feedback. It also facilitates collaborations and networking opportunities, enabling creators to grow their influence and reach new heights in their creative endeavors. From seasoned professionals to budding enthusiasts, the platform welcomes all content creators, fostering a vibrant community of individuals passionate about making an impact through their artistry.




                    </p>
                </div>
            </div>

        </div>
    );
}

export default ContactForm;