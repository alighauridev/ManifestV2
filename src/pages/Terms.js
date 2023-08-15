import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../scss/conditions.scss'
const Terms = () => {
    window.scroll(0, 0)
    return (
        <>
            <Navigation />
            <section className='terms'>
                <div className='container'>
                    <h1>TERMS & CONDITIONS  </h1>
                    <h2>Acceptance of Terms
                    </h2>
                    <p>
                        <span>
                            By accessing or using the MNFST Labs website, services, or content, you agree to comply with and be bound by these terms and conditions (the "Terms").
                            Please read these Terms carefully. If you do not agree with these Terms, please do not use this site.

                        </span>
                    </p>
                    <h2>Modifications to the Terms</h2>
                    <p>
                        <span>
                            MNFST Labs may change, modify, add, or remove portions of these Terms at any time. Please check these Terms periodically for changes. Your continued use of this site following the posting of changes will mean you accept those changes.
                        </span>


                    </p>

                    <h2>Use of Site Content
                    </h2>
                    <p>
                        All content on this site, including but not limited to text, graphics, logos, and images, is the property of MNFST Labs or its content suppliers and is protected by international copyright laws.
                    </p>
                    <h2>Limitation of Liability
                    </h2>
                    <p>

                        MNFST Labs will not be liable for any damages of any kind arising from the use of this site or its products, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.

                    </p>
                    <h2>Governing Law
                    </h2>
                    <p>

                        These Terms shall be governed by the laws of your jurisdiction, without regard to its conflict of law principles.

                    </p>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Terms
