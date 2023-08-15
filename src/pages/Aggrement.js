import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../scss/conditions.scss'
const Agreement = () => {
    window.scroll(0, 0)
    return (
        <>
            <Navigation />
            <section className='terms'>
                <div className='container'>
                    <h1>USER AGREEMENT</h1>
                    <h2>Acceptance of Agreement
                    </h2>
                    <p>
                        <span>
                            By accessing or using the MNFST Labs website, services, or content, you ("User") agree to comply with and be bound by this User Agreement (the "Agreement"). Please read this Agreement carefully. If you do not agree with these terms, please do not use this site.
                        </span>
                    </p>
                    <h2>User Conduct
                    </h2>
                    <p>
                        <span>
                            You agree to use the MNFST Labs website and services in a manner consistent with all applicable local, state, national, and international laws and regulations.
                        </span>
                    </p>

                    <h2>Intellectual Property Rights
                    </h2>
                    <p>
                        The content on the MNFST Labs website, including text, graphics, logos, and images, is the property of MNFST Labs and is protected by international copyright, trademark, and other intellectual property rights laws.
                    </p>
                    <h2>User Content</h2>
                    <p>
                        If you post, upload, or otherwise make available any content, you are responsible for ensuring that such content does not violate any third-party rights, including intellectual property rights, privacy rights, or other legal rights.

                    </p>
                    <h2>
                        Limitation of Liability</h2>
                    <p>
                        MNFST Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of your use or inability to use the site or services.
                    </p>
                    <h2>
                        Governing Law
                    </h2>
                    <p>
                        This Agreement shall be governed by the laws of your jurisdiction, without regard to its conflict of law principles.
                    </p>
                    <h2>Changes to this Agreement</h2>
                    <p>
                        MNFST Labs may change, modify, add, or remove portions of this Agreement at any time. Your continued use of the site following the posting of changes will mean you accept those changes.
                    </p>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy,
                        please contact us at{' '}
                        <a href='mailto:contact@mnfst.io' style={{
                            color: '#28e9e0',
                            fontFamily: '\'Fjalla One\'',
                            fontWeight: '100'
                        }}>contact@mnfst.io</a>.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Agreement
