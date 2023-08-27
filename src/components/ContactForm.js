import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { toast } from 'react-toastify'
import cross from '../assests/bb (2).png'
import '../scss/contactForm.scss'
const ContactForm = ({ setCreatorsForm }) => {
    const [form, setForm] = useState({
        name: '',
        twitter: '',
        primarySocialPlatform: '',
        secondarySocialPlatform: '',
        typeOfContentCreated: '',
        preferredBlockchain: '',
        primaryInterestInWeb3: '',
        personalBranding: '',
        isPlayVideoGames: '',
        videoGameType: '',
        secondaryInterestInWeb3: '',
        favoritePartOfIndustry: '',
        briefDescription: '',
    })
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const sendEmail = async (e) => {
        e.preventDefault()
        setloading(true)

        try {
            const response = await axios.post(
                'https://sheet.best/api/sheets/62e408db-8c78-4c9b-90c0-02c74cae4f03',
                {
                    Name: form.name,
                    Twitter: form.twitter,
                    PrimarySocialPlatform: form.primarySocialPlatform,
                    SecondarySocialPlatform: form.secondarySocialPlatform,
                    TypeOfContentCreated: form.typeOfContentCreated,
                    PreferredBlockchain: form.preferredBlockchain,
                    PrimaryInterestInWeb3: form.primaryInterestInWeb3,
                    PersonalBranding: form.personalBranding,
                    IsPlayVideoGames: form.isPlayVideoGames,
                    VideoGameType: form.videoGameType,
                    SecondaryInterestInWeb3: form.secondaryInterestInWeb3,
                    favoritePartOfIndustry: form.favoritePartOfIndustry,
                    BriefDescription: form.briefDescription,
                },
            )

            toast.success('Submitted Successfully!')
            setCreatorsForm(false)
            setloading(false)
        } catch (error) {
            console.log(error.text)
            toast.error(error.text)
            setCreatorsForm(false)
            setloading(false)
        }
    }

    const handleChange = (field, selectedOption) => {
        setForm({ ...form, [field]: selectedOption })
    }

    const socialMediaOptions = [
        { value: 'Twitter', label: 'Twitter' },
        { value: 'TikTok', label: 'TikTok' },
        { value: 'Instagram', label: 'Instagram' },
        { value: 'YouTube', label: 'YouTube' },
    ]

    const blockchainOptions = [
        { value: 'Ethereum', label: 'Ethereum' },
        { value: 'Binance Smart Chain', label: 'Binance Smart Chain' },
        { value: 'Polygon (Matic)', label: 'Polygon (Matic)' },
        // Add more options as needed
    ]
    const playVideoGamesOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ]

    const videoGameTypeOptions = [
        { value: 'action', label: 'Action' },
        { value: 'adventure', label: 'Adventure' },
        { value: 'sports', label: 'Sports' },
        { value: 'rpg', label: 'RPG' },
        { value: 'strategy', label: 'Strategy' },
        // Add more options as needed
    ]
    const interestInWeb3 = [
        { value: 'NFTs', label: 'NFTs' },
        { value: 'defi', label: 'defi' },
        { value: 'content creation', label: 'content creation' },
        { value: 'community', label: 'community' },
        { value: 'networking', label: 'networking' },
        { value: 'personal branding', label: 'personal branding' },
        { value: 'gaming', label: 'gaming' },
        // Add more options as needed
    ]

    return (
        <div className='contact' data-aos={'fade-up'} data-aos-duration='300'>
            <div className='grid__'>
                <div className='container '>
                    <div
                        className='cross'
                        onClick={() => {
                            setCreatorsForm(false)
                        }}
                    >
                        <img src={cross} alt='' />
                    </div>

                    <form onSubmit={sendEmail}>
                        <div className='first'>
                            <div className='item'>
                                <input
                                    id='name'
                                    required={true}
                                    type='text'
                                    placeholder='Enter Your Name'
                                    onChange={(e) =>
                                        handleChange('name', e.target.value)
                                    }
                                />
                            </div>
                            <div className='item'>
                                <input
                                    id='twitter'
                                    required={true}
                                    type='text'
                                    placeholder='Twitter Handle'
                                    onChange={(e) =>
                                        handleChange('twitter', e.target.value)
                                    }
                                />
                            </div>
                            <div className='first grid__two'>
                                <div className='item'>
                                    <Select
                                        id='socialMedia'
                                        placeholder='Primary Social platform'
                                        options={socialMediaOptions}
                                        value={form.socialMedia}
                                        onChange={(selectedOption) =>
                                            handleChange(
                                                'primarySocialPlatform',
                                                selectedOption.value,
                                            )
                                        }
                                    />
                                </div>
                                <div className='item'>
                                    <Select
                                        id='socialMedia'
                                        placeholder='Secondary social platform '
                                        options={socialMediaOptions}
                                        value={form.socialMedia}
                                        onChange={(selectedOption) =>
                                            handleChange(
                                                'secondarySocialPlatform',
                                                selectedOption.value,
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className='item'>
                                <input
                                    id='contentType'
                                    required={true}
                                    type='text'
                                    placeholder='Type of Content Created'
                                    onChange={(e) =>
                                        handleChange(
                                            'typeOfContentCreated',
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                            <div className='item'>
                                <Select
                                    id='preferredBlockch'
                                    placeholder='Your Preferred Blockchain'
                                    options={blockchainOptions}
                                    onChange={(selectedOption) =>
                                        handleChange(
                                            'preferredBlockchain',
                                            selectedOption.value,
                                        )
                                    }
                                />
                            </div>
                            <div className='first grid__two'>
                                <div className='item'>
                                    <Select

                                        options={interestInWeb3}
                                        onChange={(selectedOption) =>
                                            handleChange(
                                                'primaryInterestInWeb3',
                                                selectedOption.value,
                                            )
                                        }
                                        placeholder='Primary interest in web3
'
                                    />
                                </div>
                                {/* ... */}
                                <div className='item'>
                                    <Select

                                        options={interestInWeb3}
                                        onChange={(selectedOption) =>
                                            handleChange(
                                                'secondaryInterestInWeb3',
                                                selectedOption.value,
                                            )
                                        }
                                        placeholder={
                                            'Secondary interest in web3'
                                        }
                                    />
                                </div>
                            </div>
                            <div className='item'>
                                <input
                                    id='contentType'
                                    required={true}
                                    type='text'
                                    placeholder='Personal Branding'
                                    onChange={(e) =>
                                        handleChange(
                                            'personalBranding',
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                            <div className='first grid__two'>
                                <div className='item'>
                                    <Select
                                        id='isPlayVideoGames'
                                        options={playVideoGamesOptions}
                                        value={form.playVideoGames}
                                        onChange={(selectedOption) =>
                                            handleChange(
                                                'isPlayVideoGames',
                                                selectedOption.value,
                                            )
                                        }
                                        placeholder='Do you play video games?
'
                                    />
                                </div>
                                {/* ... */}
                                <div className='item'>
                                    <Select
                                        id='videoGameType'
                                        options={videoGameTypeOptions}
                                        onChange={(selectedOption) =>
                                            handleChange(
                                                'videoGameType',
                                                selectedOption.value,
                                            )
                                        }
                                        placeholder={
                                            'What type of video games?'
                                        }
                                    />
                                </div>
                            </div>
                            <div className='item'>
                                <input
                                    id='favoritePartOfIndustry'
                                    required={true}
                                    type='text'
                                    placeholder='what is your favorite part of this industry?'
                                    onChange={(e) =>
                                        handleChange(
                                            'favoritePartOfIndustry',
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                            <div className='item'>
                                <textarea
                                    id='briefDescription'
                                    required={true}
                                    cols='20'
                                    placeholder='Brief Description of Yourself - include your social media handles, Discord and Telegram usernames'
                                    rows='5'
                                    onChange={(e) =>
                                        handleChange(
                                            'briefDescription',
                                            e.target.value,
                                        )
                                    }
                                ></textarea>
                            </div>
                        </div>

                        <div className='first'>
                            <button disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className='content'>
                    <h2>Content Creators Form</h2>
                    <p>
                        Get started with the MNFST Lab Content Creator Form, a
                        dynamic platform designed for artists and creators
                        across all digital mediums.
                    </p>

                    <p>
                        Whether you're a videographer, blogger, or visual
                        artist, this platform is your pathway to connect with
                        your audience, showcase your unique creations, and grow
                        your influence.
                    </p>
                    <p>
                        With user-friendly features for collaboration and
                        feedback, we support all talents in making an impact
                        through creativity.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
