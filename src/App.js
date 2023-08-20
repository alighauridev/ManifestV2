import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home'
// import './scss/normalize.css'
import './scss/reset.css'
import './scss/style.css'
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga'
import Loader from './components/Loader';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Agreement from './pages/Aggrement';
import Guidelines from './pages/GuideLines';
import { ToastContainer } from 'react-toastify';
function App() {
    let [loading, setLoading] = useState(true)
    let [color, setColor] = useState('#fff')
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);


    return (
        <>
            {loading ? (
                <Loader setLoading={setLoading} />
            ) : (
                <>
                    <Routes>

                        <Route path='/' element={<Home />} />
                        <Route path='/terms' element={<Terms />} />
                        <Route path='/privacy-policy' element={<Privacy />} />
                        <Route path='/user-agreement' element={<Agreement />} />
                        <Route path='/guidelines' element={<Guidelines />} />
                    </Routes>

                </>
            )}
            <ToastContainer />
        </>
    )
}

export default App
