import { useState } from 'react'
import { BsDiscord, BsGlobe, BsTwitter } from 'react-icons/bs'
import { SiOpensea } from 'react-icons/si'
import { Link } from 'react-router-dom'
import mg from '../assests/me.png'
const ProjectModal = ({ setActive, active }) => {
    const [mainImg, setMainImg] = useState(null)
    const [activeImage, setActiveImage] = useState(null)
    return (
        <div
            className='model'
            style={active ? { display: 'flex', opacity: '1' } : null}
        >
            <div
                className='center'
                data-aos={'fade-up'}
                data-aos-duration='300'
            >
                <div
                    className='cross'
                    onClick={() => {
                        setActive(null)
                    }}
                >
                    <img loading='lazy' src='/images/bb (2).png' alt='' />
                </div>
                <div className='start'>
                    <div className='main'>
                        <img loading='lazy' src={active?.banner} alt='' />
                    </div>
                    <div className='gallery'>
                        {active.nfts.map((img) => {
                            return (
                                <img
                                    onClick={() => setActiveImage(img)}
                                    src={img}
                                    alt=''
                                    loading='lazy'
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='upper'>
                    <h2>{active.name}</h2>
                    <div className='flex'>
                        <div className='links'>
                            <a
                                className='website'
                                href={active.website}
                                target='_blank'
                            >
                                <BsGlobe />
                            </a>
                            <a
                                className='twitter'
                                href={active.twitter}
                                target='_blank'
                            >
                                <BsTwitter />
                            </a>
                            <a
                                className='discord'
                                href={active.discord}
                                target='_blank'
                            >
                                <BsDiscord />
                            </a>
                            {active.opensea && (
                                <a
                                    className='opensea'
                                    href={active.opensea}
                                    target='_blank'
                                >
                                    <SiOpensea />
                                </a>
                            )}

                            <a
                                className='magicEden'
                                href={active.magicEden}
                                target='_blank'
                            >
                                <img src={mg} alt='' />
                            </a>
                            {/* <a className='magicEden' href={active.magicEden}>
                            <BsGlobe />
                        </a> */}
                        </div>
                        <Link to={active.magicEden} target='_blank'>
                            <button>View Collection!</button>
                        </Link>
                    </div>
                    <p>{active.description}</p>
                </div>
            </div>

            {activeImage && (
                <div
                    className='img__model'
                    style={active ? { display: 'flex', opacity: '1' } : null}
                >
                    <div className='img'>
                        <div
                            className='cross'
                            onClick={() => {
                                setActiveImage(false)
                            }}
                        >
                            <img
                                loading='lazy'
                                src='/images/bb (2).png'
                                alt=''
                            />
                        </div>
                        <img src={activeImage} loading='lazy' alt='' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectModal
