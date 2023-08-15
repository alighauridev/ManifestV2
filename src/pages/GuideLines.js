import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../scss/conditions.scss'
const Guidelines = () => {
    window.scroll(0, 0)
    return (
        <>
            <Navigation />
            <section className='terms'>
                <div className='container'>
                    <h1>MNFST Labs Website Guidelines.</h1>
                    <h2>1.Responsible Participation:
                    </h2>
                    <p>
                        <span>
                            Ensure that all interactions, including content submissions and engagement in our incubator program, comply with applicable laws and regulations. Always act responsibly and ethically.

                        </span>
                    </p>
                    <h2>2.Intellectual Property:

                    </h2>
                    <p>
                        <span>
                            Respect all intellectual property rights, including NFT copyrights, trademarks, and patents. When sharing or creating content with us, ensure that you own the rights or have appropriate permissions.

                        </span>
                    </p>

                    <h2>3.Privacy and Personal Information:
                    </h2>
                    <p>
                        Protect your personal information and respect others' privacy in any interactions with us. Personal information shared with MNFST Labs, such as for the incubator program, will be handled with utmost confidentiality.

                    </p>
                    <h2>4.Prohibited Activities:</h2>
                    <p>
                        Engaging in activities that violate laws, promote harm, or infringe on others' rights is strictly prohibited. Spamming, advertising, or spreading harmful content in our community areas will not be allowed.

                    </p>
                    <h2>
                        5. Respect Our Platform's Purpose:</h2>
                    <p>
                        Utilize our website in alignment with its intended purpose, which includes providing information, engaging with our content creation section, and exploring our incubator program.
                    </p>
                    <p>
                        These guidelines may change as our initiatives grow and evolve, so please check back regularly for updates.

                    </p>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Guidelines
