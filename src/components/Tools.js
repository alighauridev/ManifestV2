import { Link } from 'react-router-dom'
import btn1 from '../assests/btn-bac.svg'
import img3 from '../assests/MNFST-TOOLS.png'
import img4 from '../assests/tool4.png'
import '../scss/tools.scss'
const Tools = () => {
    return (
        <section className='tools'>
            <div className='container'>
                <div className='grid'>
                    <div className='start'>
                        <img src={img3} alt='' />
                    </div>
                    <div className='end'>
                        <img src={img4} alt='' />
                        <p>REAL-TIME NFT ANALYTICS & TRADING TOOLS</p>
                        <ul>
                            <li>- IN-DEPTH NFT INSIGHT</li>
                            <li>- TREND DISCOVERY</li>
                            <li>- LIVE CHARTING</li>
                            <li>- TRADING TOOLS</li>
                            <li>- AND MORE</li>
                        </ul>
                        <Link to={'https://mnfst.tools'} target='_blank'>
                            {' '}
                            <img src={btn1} alt='' />
                            <span>VIEW MNFST TOOLS</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools
