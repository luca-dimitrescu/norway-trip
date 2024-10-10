function Home() {



    return (
        <>
            <nav>
                <div className="header-bar">
                    <h1 className="logo-name-header">LogoName</h1>
                    <div className="tools-elements">
                        <ul className="tools-elements-ul">
                            <li className="tools-elements-li home-header"><a href="#Home">Home</a></li>
                            <li className="tools-elements-li pricing-header"><a href="#Pricing">Pricing</a></li>
                            <li className="tools-elements-li contact-header"><a href="#Contact">Contact</a></li>
                            <li className="tools-elements-li support-header"><a href="#Support">Support</a></li>
                        </ul>
                    </div>
                    <div className="accounts-header">
                        <button className="button-header-register">Register</button>
                        <button className="button-header-login">Login</button>
                    </div>
                </div>
            </nav>
            <div className="main-home-title">
                <h1 className="h1-main-home-title">Experience <span className="norway-home-title">Norway</span></h1>
                <h2 className="h2-main-home-title">A land of breathtaking beauty and unforgettable experiences.</h2>
                <button className="main-home-button">Check out now</button>
            </div>
            <section className="section-first">
                <div className="activities">
                    <h2 className="activities-h2">What you experience there</h2>
                </div>
            </section>
        </>
    )
}

export default Home