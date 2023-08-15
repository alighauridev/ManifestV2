// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import btn1 from '../assests/btn-bac.svg'
import img2 from '../assests/p  (2).jpg'
import img3 from '../assests/p  (3).jpg'
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
import bomb1 from "../assests/Bombas/1-1s/10a42b8b65d2cf73a6444f59e3425639.jpg"
import bomb2 from "../assests/Bombas/1-1s/1ca1d6fd5a5ce02f5d01f31c35f3cd45.jpg"
import bomb3 from "../assests/Bombas/1-1s/3033.jpg"
import bomb4 from "../assests/Bombas/1-1s/4047.jpg"
import bomb5 from "../assests/Bombas/1-1s/4223.jpg"
import bomb6 from "../assests/Bombas/1-1s/5279.jpg"
import bomb7 from "../assests/Bombas/1-1s/688.jpg"
import bomb8 from "../assests/Bombas/1-1s/d0db220e1d87bc58a6be9e4deeef9b12.jpg"
import bombBanner from "../assests/Bombas/PFP.png"
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
      description: 'Galactic Eagle Gang is an exhilarating airdrop collection for all Owlpha holders. Soaring beyond traditional boundaries, this project symbolizes freedom, unity, and exploration in the blockchain universe. It connects our community of holders with shared interests and passions, elevating the collective experience within the MNFST Labs ecosystem.',
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
      description: "Ring Runnerz introduces a 'play-to-experience' model that engages users in an immersive gaming universe. It's more than a game. It's an innovative blend of entertainment and earning, where players can actively shape their destinies. Ring Runnerz brings a thrilling, interactive layer to the MNFST Labs multiverse, setting the stage for endless adventures and opportunities.",
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
      description: "Region 79 is a gateway to Planet79, inviting our holders to explore a world brimming with unique challenges and experiences. Nestled within MNFST Lab's innovative gaming universe on the Solana NFT Space. Region 79 offers a community- driven adventure where the opportunities are as boundless as our holders' imaginations.",
      banner: 'https://pbs.twimg.com/profile_banners/1587005047140818945/1681838624/600x200',
      logo: "https://pbs.twimg.com/profile_images/1648376776371077120/Qdhl8CI4_400x400.jpg",
      nfts: [reg1, reg2, reg3, reg4, reg5, reg6, reg7, reg8],
      website: 'https://www.region79.xyz/',
      twitter: 'https://twitter.com/Region79nft',
      discord: 'https://discord.gg/mnfstlabs',
      opensea: 'https://opensea.io/marketplace/region79',
      magicEden: '',
    },
    {
      name: 'Bombas',
      description: 'Bombaz represents MNFST Labs innovative leap into the Solana blockchain, connecting it with our roots in Polygon.This collection is about accessibility, symbolizing our commitment to making creativity possible and affordable through low minting prices.Bombaz is a pioneering effort that reflects our vision, transcending barriers and embracing endless possibilities.',
      banner: bombBanner,
      logo: bomb1,
      nfts: [bomb1, bomb2, bomb3, bomb4, bomb5, bomb5, bomb6, bomb7],
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
            {/* <Swiper
              slidesPerView={3}
              spaceBetween={15}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className='mySwiper'
            > */}
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
            {/* </Swiper> */}
          </div>
        </div>
        {active && (
          <ProjectModal active={active} setActive={setActive} />
        )}
      </section>

    </>
  )
}
