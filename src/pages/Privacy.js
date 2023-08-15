import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../scss/conditions.scss'
const Privacy = () => {
    window.scroll(0, 0)
    return (
        <>
            <Navigation />
            <section className='terms'>
                <div className='container'>
                    <h1>PRIVACY POLICY
                    </h1>
                    <h2>Personal Information Collection
                    </h2>
                    <p>
                        <span>
                            We collect information that you provide to us directly, such as your name, email address, and other contact information when you fill out a form.

                        </span>
                    </p>
                    <h2>
                        Use of Personal Information
                    </h2>
                    <p>
                        <span>

                            We may use your personal information to send you marketing communications, respond to your requests or inquiries, and improve our services.

                        </span>


                    </p>

                    <h2>
                        Sharing of Personal Information

                    </h2>
                    <p>
                        We do not sell, trade, or rent your personal information to others. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.
                    </p>
                    <h2>
                        Cookies

                    </h2>
                    <p>

                        We may use cookies to enhance your experience, gather general visitor information, and track visits to our website. You can choose to disable cookies through your browser settings.

                    </p>
                    <h2>Changes to this Privacy Policy

                    </h2>
                    <p>
                        We may update this Privacy Policy at any time. We encourage you to periodically review this page for the latest information on our privacy practices.

                    </p>
                    <h2>Contact Us


                    </h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@mnfst.io" style={{
                            color: '#28e9e0',
                            fontFamily: '\'Fjalla One\'',
                            fontWeight: '100'
                        }}>contact@mnfst.io</a>.

                    </p>

                </div>
            </section >
            <Footer />
        </>
    )
}

export default Privacy
