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
        objective: '',
        socialMedia: '',
        playVideoGames: '',
        videoGameType: '',
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
                                        onChange={(selectedOption) => handleChange('playVideoGames', selectedOption)}
                                        placeholder='Do you play video games?
'
                                    />

                                </div>
                                {/* ... */}
                                <div className='item'>
                                    <Select
                                        id='videoGameType'
                                        options={videoGameTypeOptions}
                                        value={form.videoGameType}
                                        onChange={(selectedOption) => handleChange('videoGameType', selectedOption)}
                                        placeholder={"What type of video games?"}
                                    />

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