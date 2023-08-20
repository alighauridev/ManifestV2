// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import btn1 from '../assests/btn-bac.svg'
import img2 from '../assests/p  (2).jpg'
import img3 from '../assests/p  (3).jpg'
import reg from "../assests/PROJECTS IMAGES/R79.png"
import reg1 from "../assests/R79 ASSETS/1-1_s/5540.jpg"
import reg2 from "../assests/R79 ASSETS/1-1_s/5541.jpg"
import reg3 from "../assests/R79 ASSETS/1-1_s/5542.jpg"
import reg4 from "../assests/R79 ASSETS/1-1_s/5543.jpg"
import reg5 from "../assests/R79 ASSETS/1-1_s/5551.jpg"
import reg6 from "../assests/R79 ASSETS/1-1_s/5553.jpg"
import reg7 from "../assests/R79 ASSETS/1-1_s/5554.jpg"
import reg8 from "../assests/R79 ASSETS/1-1_s/5539 (1).jpg"
import img1 from '../assests/p1.jpg'
// Import Swiper styles
import bomb from "../assests/PROJECTS IMAGES/BOMBAS.jpeg"
import bomb1 from "../assests/Bombas/1-1s/10a42b8b65d2cf73a6444f59e3425639.jpg"
import bomb2 from "../assests/Bombas/1-1s/1ca1d6fd5a5ce02f5d01f31c35f3cd45.jpg"
import bomb3 from "../assests/Bombas/1-1s/3033.jpg"
import bomb4 from "../assests/Bombas/1-1s/4047.jpg"
import bomb5 from "../assests/Bombas/1-1s/4223.jpg"
import bomb6 from "../assests/Bombas/1-1s/5279.jpg"
import bomb7 from "../assests/Bombas/1-1s/688.jpg"
import bomb8 from "../assests/Bombas/1-1s/d0db220e1d87bc58a6be9e4deeef9b12.jpg"

import owl from "../assests/PROJECTS IMAGES/OWLPHA.png"
import owl1 from "../assests/OWLPHA ASSETS/1-1s/BATOWL.png"
import owl2 from "../assests/OWLPHA ASSETS/1-1s/bowser.png"
import owl3 from "../assests/OWLPHA ASSETS/1-1s/BUZZ LIGHTOWL.png"
import owl4 from "../assests/OWLPHA ASSETS/1-1s/cell.png"
import owl5 from "../assests/OWLPHA ASSETS/1-1s/OWLBEE.png"
import owl6 from "../assests/OWLPHA ASSETS/1-1s/OWLIZARD.png"
import owl7 from "../assests/OWLPHA ASSETS/1-1s/OWLMINATOR.png"
import owl8 from "../assests/OWLPHA ASSETS/1-1s/SAMUROWL.png"
import gal from "../assests/PROJECTS IMAGES/GALACTIC EAGLES.jpeg"
import gal1 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/1d0fb00c1a260ed8ac58a90b8e4159af.jpg"
import gal2 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/3d1654e2fd8645e620472b9d8cd5220e.jpg"
import gal3 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/4c3803d0b967bb8de78cb5b143e14b61.jpg"
import gal4 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/6f50d4479fe4e6ce56638789acbecb76.jpg"
import gal5 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/893b9c5193a4918af4aad6073fd7299d.jpg"
import gal6 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/a35d263ce447ed28d2f2f49e505b05ee.jpg"
import gal7 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/ab9225f2087800b1680a5e415ad060f6.jpg"
import gal8 from "../assests/GALACTIC EAGLES ASSETS/1-1_s/f3295abcd382fe4fce56ba2f166d7705.jpg"


import rin from "../assests/PROJECTS IMAGES/RING RUNNERZ.png"
import rin1 from "../assests/RING RUNNERZ ASSETS/1-1_s/013180e61006a075d26b32911d3075de.jpg"
import rin2 from "../assests/RING RUNNERZ ASSETS/1-1_s/348e55f3eda62896c18dfcc9d3ea7e0a.jpg"
import rin3 from "../assests/RING RUNNERZ ASSETS/1-1_s/3cf3bbf71b23f1f6e79341c3c500cd12.jpg"
import rin4 from "../assests/RING RUNNERZ ASSETS/1-1_s/bb0c6ab6bdd25c346df53e5822539033.jpg"
import rin5 from "../assests/RING RUNNERZ ASSETS/1-1_s/c33a8cf1659fe49126239d0610ec73ba.jpg"
import rin6 from "../assests/RING RUNNERZ ASSETS/1-1_s/da15168f83cc35307293a92a9501c169.jpg"
import rin7 from "../assests/RING RUNNERZ ASSETS/1-1_s/dc9b06e7a4556c58c4b1ac1211420b4a.jpg"
import rin8 from "../assests/RING RUNNERZ ASSETS/1-1_s/fddc244c0316bf56266266b40006da30.jpg"
import bombBanner from "../assests/MNFST PROJECTS BANNERS/BOMBAZ-BANNER.png"
import owlBanner from "../assests/MNFST PROJECTS BANNERS/OWL-BANNER1 (2).png"
import R79Banner from "../assests/MNFST PROJECTS BANNERS/R79-BANNER.png"
import rrBanner from "../assests/MNFST PROJECTS BANNERS/RR-BANNER.png"
import galBanner from "../assests/MNFST PROJECTS BANNERS/GEG-BANNER1.png"
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
      description: "Owlpha is a distinctive genesis collection that marks the beginning of a creative revolution. As the flagship project of MNFST Labs, it captures the essence of wisdom and mystery in a series of unique digital art pieces. Each piece in the Owlpha collection is more than a collectible. It's a gateway to an exclusive and evolving world of creativity",
      banner: owlBanner,
      logo: owl,
      nfts: [owl1, owl2, owl3, owl4, owl5, owl6, owl7, owl8],
      website: 'https://owlpha.io/',
      twitter: 'https://twitter.com/OwlphaNFT',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/collection/owlpha',
      magicEden: 'https://magiceden.io/collections/polygon/owlpha',
    },
    {
      name: 'Galactic Eagles',
      description: 'Galactic Eagle Gang is an exhilarating airdrop collection for all Owlpha holders. Soaring beyond traditional boundaries, this project symbolizes freedom, unity, and exploration in the blockchain universe. It connects our community of holders with shared interests and passions, elevating the collective experience within the MNFST Labs ecosystem.',
      banner: galBanner,
      logo: gal,
      nfts: [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8],
      website: '',
      twitter: 'https://twitter.com/GEGNFT',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/collection/galactic-eagle-gang-1',
      magicEden:
        'https://magiceden.io/collections/polygon/galactic_eagle_gang',
    },
    {
      name: 'Ring Runnerz',
      description: "Ring Runnerz introduces a 'play-to-experience' model that engages users in an immersive gaming universe. It's more than a game. It's an innovative blend of entertainment and earning, where players can actively shape their destinies. Ring Runnerz brings a thrilling, interactive layer to the MNFST Labs multiverse, setting the stage for endless adventures and opportunities.",
      banner: rrBanner,
      logo: rin,
      nfts: [rin1, rin2, rin3, rin4, rin5, rin6, rin7, rin8],

      website: 'https://ringrunnerz.xyz/',
      twitter: 'https://twitter.com/RingRunnerz',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/collection/ringrunnerz-nft',
      magicEden: 'https://magiceden.io/collections/polygon/ring_runnerz',
    },

    {
      name: 'Bombas',
      description: 'Bombaz represents MNFST Labs innovative leap into the Solana blockchain, connecting it with our roots in Polygon.This collection is about accessibility, symbolizing our commitment to making creativity possible and affordable through low minting prices.Bombaz is a pioneering effort that reflects our vision, transcending barriers and embracing endless possibilities.',
      banner: bombBanner,
      logo: bomb,
      nfts: [bomb1, bomb2, bomb3, bomb4, bomb5, bomb5, bomb6, bomb7],
      website: 'https://bombaclot.xyz/',
      twitter: 'https://twitter.com/bombaclotnft',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: null,
      magicEden: 'https://magiceden.io/marketplace/bombaclot',
    },
    {
      name: 'Region79',
      description: "Region 79 is a gateway to Planet79, inviting our holders to explore a world brimming with unique challenges and experiences. Nestled within MNFST Lab's innovative gaming universe on the Solana NFT Space. Region 79 offers a community- driven adventure where the opportunities are as boundless as our holders' imaginations.",
      banner: R79Banner,
      logo: reg,
      nfts: [reg1, reg2, reg3, reg4, reg5, reg6, reg7, reg8],
      website: 'https://www.region79.xyz/',
      twitter: 'https://twitter.com/Region79nft',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: null,
      magicEden: 'https://magiceden.io/marketplace/region79',
    },

  ]
  return (
    <>
      <section id='about'>
        <div className='container'>
          <div className='heading'>
            <h1 data-aos=''>PROJECTS</h1>
          </div>
          <div className='content one__'>
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              navigation={true}
              // loop={true}
              // centeredSlides={true}
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
                          loading='lazy'
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
          <div className='content two__'>

            {projects.map((project) => {
              return (
                <>
                  <div
                    className='box'
                    onClick={() => {
                      setActive(project)
                    }}
                  >
                    <img
                      src={project.logo}
                      alt=''
                      loading='lazy'
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

                </>
              )
            })}
          </div>
        </div>
        {active && (
          <ProjectModal active={active} setActive={setActive} />
        )}
      </section>

    </>
  )
}
