// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import btn1 from '../assests/btn-bac.svg'
import img2 from '../assests/p  (2).jpg'
import img3 from '../assests/p  (3).jpg'
import img1 from '../assests/p1.jpg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import '../scss/about.scss'
import './styles.css'
// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import ProjectModal from './ProjectModal'
import { useState } from 'react'

export default function About() {
  const [active, setActive] = useState(null)
  const projects = [
    {
      name: 'Owlpha',
      description: '',
      banner: "https://i.seadn.io/gcs/files/c3be9265597b9f94685d95024d99799d.jpg?auto=format&dpr=1&w=1920",
      logo: "https://i.seadn.io/gcs/files/48d0c6fe91b0432cb80d03f32673c842.jpg?auto=format&dpr=1&w=256",
      nfts: [
        'https://i.seadn.io/gcs/files/00d65550349cd877d3e77bae9089813a.png?auto=format&dpr=1&w=384',
        'https://i.seadn.io/gcs/files/00d65550349cd877d3e77bae9089813a.png?auto=format&dpr=1&w=384',
        'https://i.seadn.io/gcs/files/adf7ccd62d9d5bb1f14db7189d7c6abd.png?auto=format&dpr=1&w=384',
        'https://i.seadn.io/gcs/files/2b20db0d00b1dd09c483daea9334f44b.png?auto=format&dpr=1&w=384  ',
        'https://i.seadn.io/gcs/files/ffab048aad6026289ccb91603adeacbc.png?auto=format&dpr=1&w=384',
        'https://i.seadn.io/gcs/files/3452a6c4d4eba05d84f9418403f77faf.png?auto=format&dpr=1&w=384',
        'https://i.seadn.io/gcs/files/c0a7aae89a8c1496ca169f4f432acbb4.png?auto=format&dpr=1&w=384',
        'https://i.seadn.io/gcs/files/d16302f5428c46e003c837ef148e6a40.png?auto=format&dpr=1&w=384',
      ],
      website: 'https://owlpha.io/',
      twitter: 'https://twitter.com/OwlphaNFT',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/collection/owlpha',
      magicEden: 'https://magiceden.io/collections/polygon/owlpha',
    },
    {
      name: 'Galactic Eagles',
      description: '',
      banner: "https://i.seadn.io/gcs/files/f9004818c1446d4eafbccac65cb2af6d.png?auto=format&dpr=1&w=1920",
      logo: "https://i.seadn.io/gcs/files/5c4d6c6a4a958b28567c376f2ed2c8e8.png?auto=format&dpr=1&w=256",
      nfts: ['https://i.seadn.io/gcs/files/91983d47f737fc26308cd494819a779b.png?auto=format&dpr=1&w=256', 'https://i.seadn.io/gcs/files/302b9a9af78f96ba4b64811eb3df5b42.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/11b58bf81c887cb3ccfbdf8ecc6bbb52.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/2976cf2c4bccfe331d1df7eac72fe61d.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/735ca1ea14d910ce05f6c4cf5d97b63e.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/59524427ca5b19dd17d864fca1fd5dc4.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/926559692414fec5f551ce7688c48b46.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/4aef0ab4ab4bfd2291694d1fd7ca42f8.png?auto=format&dpr=1&w=256',

      ],
      website: '',
      twitter: 'https://twitter.com/GEGNFT',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/collection/galactic-eagle-gang-1',
      magicEden:
        'https://magiceden.io/collections/polygon/galactic_eagle_gang',
    },
    {
      name: 'Ring Runnerz',
      description: 'https://i.seadn.io/gcs/files/ab8897d354a264d1b823fb5f18872cf7.jpg?auto=format&dpr=1&w=1920',
      banner: "https://i.seadn.io/gcs/files/ab8897d354a264d1b823fb5f18872cf7.jpg?auto=format&dpr=1&w=1920",
      logo: "https://i.seadn.io/gcs/files/f530eb01ed817788a7388c93087e1ae1.gif?auto=format&dpr=1&w=256",
      nfts: ['https://i.seadn.io/gcs/files/6f2ca357bab5e0f904187bb5de5a3c0d.png?auto=format&dpr=1&w=256', 'https://i.seadn.io/gcs/files/d83fd93af857e6080c567af1e530cea1.png?auto=format&dpr=1&w=256',

        'https://i.seadn.io/gcs/files/e0aa03e5181fbe3612344fe8fce46ee4.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/421566e1ae829a633b2f60b8453e2bae.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/8f58a10b261e19700d3b2bab05557711.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/6e5f4cbe8c82cd458d1aa3732fd81e9d.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/e080b210c890971348dc1611026a0741.png?auto=format&dpr=1&w=256',
        'https://i.seadn.io/gcs/files/ed2875d21fd6a599b2f6bcef7fe90ac3.png?auto=format&dpr=1&w=256',

      ],
      website: 'https://ringrunnerz.xyz/',
      twitter: 'https://twitter.com/RingRunnerz',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/collection/ringrunnerz-nft',
      magicEden: 'https://magiceden.io/collections/polygon/ring_runnerz',
    },
    {
      name: 'Region79',
      description: '',
      banner: 'https://pbs.twimg.com/profile_banners/1587005047140818945/1681838624/600x200',
      logo: "https://pbs.twimg.com/profile_images/1648376776371077120/Qdhl8CI4_400x400.jpg",
      nfts: [''],
      website: 'https://www.region79.xyz/',
      twitter: 'https://twitter.com/Region79nft',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/marketplace/region79',
      magicEden: '',
    },
    {
      name: 'Bombas',
      description: '',
      banner: img1,
      logo: "",
      nfts: [''],
      website: 'https://bombaclot.xyz/',
      twitter: 'https://twitter.com/bombaclotnft',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/marketplace/bombaclot',
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
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className='mySwiper'
            >
              {projects.map((project) => {
                return (
                  <>
                    <SwiperSlide>
                      <div
                        className='box'
                        onClick={() => {
                          setActive(project)
                        }}
                      >
                        <img
                          src={project.logo}
                          alt=''
                        />
                        <div className='upper'>
                          <div className='btn'>
                            <img
                              src={btn1}
                              alt=''
                            />
                            <span>
                              {project.name}
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
        </div>
        {active && (
          <ProjectModal active={active} setActive={setActive} />
        )}
      </section>

    </>
  )
}
