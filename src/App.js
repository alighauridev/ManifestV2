import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home'
// import './scss/normalize.css'
import './scss/reset.css'
import './scss/style.css'

import ReactGA from 'react-ga'
import Loader from './components/Loader';
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
                    <Home />

                </>
            )}
        </>
    )
}

export default App
