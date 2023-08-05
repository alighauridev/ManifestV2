import AOS from 'aos'
import 'aos/dist/aos.css'
import { Back, gsap } from 'gsap'
import { Power4 } from 'gsap/gsap-core'
import { useEffect, useRef, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../scss/Collection.scss'

const Collection = ({ ease }) => {
    const [modal, setModal] = useState(false)
    const [id, setId] = useState([])
    const modalanim = useRef(null)
    const [item, setItem] = useState(3)
    const [padding, setPadding] = useState(40)
    function sliderResponsive() {
        if (window.innerWidth > 1200) {
            setItem(4)
        }
        if (window.innerWidth < 1000) {
            setItem(2.5)
        }
        if (window.innerWidth < 1200) {
            setItem(3)
        }
        if (window.innerWidth < 780) {
            setItem(2)
            setPadding(10)
        }
        if (window.innerWidth < 520) {
            setItem(1)
            setPadding(60)
        }
    }
    const crossBtn = () => {
        setModal(false)
        tl.to('.widdd', 0, {
            width: 0,
            ease: Power4.easeOut,
        })
        setId(null)
    }
    useEffect(() => {
        sliderResponsive()
    }, [item])
    console.log(id)
    const tl = new gsap.timeline()
    // const handleModel = (idd) => {
    //     const filterItem = collection.filter((ite) => {
    //         return ite.id === idd
    //     })

    //     setModal(true)
    //     setId(filterItem)
    // }
    window.addEventListener('scroll', () => { })
    useEffect(() => {
        tl.to('.contain', 0.5, {
            scale: modal ? 1 : 0,
            ease: Back.easeOut,
            opacity: modal ? 1 : 0,
            // delay: 100,
        })
        tl.fromTo(
            '.pop-image',
            0.5,
            {
                x: -50,
                scale: 1,
                ease: Power4.easeIn,
            },
            {
                x: 0,
                scale: 1,
                ease: Power4.easeIn,
            },
        )
        tl.from('.widdd', 0.5, {
            width: 0,
            ease: Power4.easeOut,
        })
    }, [modal])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        })
    }, [])
    // SwiperCore.use([Autoplay])

    return (
        <>
            <section className='collection' id='collection'>
                <img src='images/topGrad.png' alt='' />
                <div className='heading' style={{ overflow: 'hidden' }}>
                    <h1 data-aos='fade-down' class='aos-init aos-animate'>
                        The CHARACTERS
                    </h1>
                    <p
                        data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-easing='ease-out'
                        class='aos-init aos-animate'
                    >
                        The Collection you all have been waiting for!
                    </p>
                </div>
                <div className='container'>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={item}
                        spaceBetween={20}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 0,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        parallax={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className='mySwiper'
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
                            return (
                                <SwiperSlide key={i} className='item'>
                                    <div
                                        className={`nft `}
                                        data-aos-delay={10 * i}
                                    // onClick={() => handleModel(item.id)}
                                    >
                                        <div className='top'>
                                            <img
                                                src='https://static.cdprojektred.com/cms.cdprojektred.com/16x9_middle/70f9ff31d3b5769cdc6163953466eaaedd9532ac-592x334.jpg'
                                                alt=''
                                            />
                                            {/* <h4>{item.name}</h4> */}
                                        </div>
                                        <div className='img'>
                                            <img
                                                src={
                                                    "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_middle/70f9ff31d3b5769cdc6163953466eaaedd9532ac-592x334.jpg"
                                                }
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </section>
        </>
    )
}

export default Collection
