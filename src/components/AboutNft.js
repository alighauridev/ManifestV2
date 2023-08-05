import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import btn1 from '../assests/btn-bac.svg'
import img2 from '../assests/p  (2).jpg'
import img3 from '../assests/p  (3).jpg'
import img1 from '../assests/p1.jpg'
import '../scss/about.scss'
import ProjectModal from './ProjectModal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'
const About = () => {
    const [active, setActive] = useState(null)
    console.log(active)

    const projects = [
        {
            name: 'Owlpha',
            description: '',
            banner: img1,
            nfts: ['https://i.seadn.io/gcs/files/00d65550349cd877d3e77bae9089813a.png?auto=format&dpr=1&w=384', 'https://i.seadn.io/gcs/files/00d65550349cd877d3e77bae9089813a.png?auto=format&dpr=1&w=384', 'https://i.seadn.io/gcs/files/adf7ccd62d9d5bb1f14db7189d7c6abd.png?auto=format&dpr=1&w=384', 'https://i.seadn.io/gcs/files/2b20db0d00b1dd09c483daea9334f44b.png?auto=format&dpr=1&w=384  ', 'https://i.seadn.io/gcs/files/ffab048aad6026289ccb91603adeacbc.png?auto=format&dpr=1&w=384', 'https://i.seadn.io/gcs/files/3452a6c4d4eba05d84f9418403f77faf.png?auto=format&dpr=1&w=384', 'https://i.seadn.io/gcs/files/c0a7aae89a8c1496ca169f4f432acbb4.png?auto=format&dpr=1&w=384', 'https://i.seadn.io/gcs/files/d16302f5428c46e003c837ef148e6a40.png?auto=format&dpr=1&w=384'],
            website: 'https://owlpha.io/',
            twitter: 'https://twitter.com/OwlphaNFT',
            discord: 'https://discord.gg/mnfstlabs',
            opensea: 'https://opensea.io/collection/owlpha',
            magicEden: 'https://magiceden.io/collections/polygon/owlpha',
        },
        {
            name: 'Galactic Eagles',
            description: '',
            banner: img2,
            nfts: ['', '', ''],
            website: '',
            twitter: 'https://twitter.com/GEGNFT',
            discord: 'https://discord.gg/mnfstlabs',
            opensea: 'https://opensea.io/collection/galactic-eagle-gang-1',
            magicEden:
                'https://magiceden.io/collections/polygon/galactic_eagle_gang',
        },
        {
            name: 'Ring Runnerz',
            description: '',
            banner: img3,
            nfts: ['', '', ''],
            website: 'https://ringrunnerz.xyz/',
            twitter: 'https://twitter.com/RingRunnerz',
            discord: 'https://discord.gg/mnfstlabs',
            opensea: 'https://opensea.io/collection/ringrunnerz-nft',
            magicEden: 'https://magiceden.io/collections/polygon/ring_runnerz',
        },
        {
            name: 'Bombas',
            description: '',
            banner: img1,
            nfts: [''],
            website: 'https://bombaclot.xyz/',
            twitter: 'https://twitter.com/bombaclotnft',
            discord: 'https://discord.gg/mnfstlabs',
            opensea: 'https://opensea.io/marketplace/bombaclot',
            magicEden: '',
        },
        {
            name: 'Region79',
            description: '',
            banner: img2,
            nfts: [''],
            website: 'https://www.region79.xyz/',
            twitter: 'https://twitter.com/Region79nft',
            discord: 'https://discord.gg/mnfstlabs',
            opensea: 'https://opensea.io/marketplace/region79',
            magicEden: '',
        },
    ]

    return (
        <>
            <section id='about'>
                <div className='container'>
                    <div className='heading'>
                        <h1 data-aos=''>PROJECTS</h1>
                    </div>
                    <div className='content'>
                        <div className='layer'></div>

                        <div className='imges' data-aos=''>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={15}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]} // Include Autoplay module here
                                loop={true}
                                autoplay={{ delay: 3000 }} // Set the autoplay delay to 3000 milliseconds (3 seconds)
                                className='mySwiper'
                            >
                                {projects.map((project) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                {' '}
                                                <div
                                                    className='box'
                                                    onClick={() => {
                                                        setActive(project)
                                                    }}
                                                >
                                                    <img
                                                        src={project.banner}
                                                        alt=''
                                                    />
                                                    <div className='upper'>
                                                        <div className='btn'>
                                                            <img
                                                                src={btn1}
                                                                alt=''
                                                            />
                                                            <span>
                                                                View Details
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className='layer'></div>
                    </div>
                </div>
                {active && (
                    <ProjectModal active={active} setActive={setActive} />
                )}
            </section>
        </>
    )
}

export default About
