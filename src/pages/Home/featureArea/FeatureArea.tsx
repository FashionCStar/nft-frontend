import * as FaIcons from 'react-icons/fa'
function FeatureArea() {
    return (
        <section className = "feature-area">
            <div className = "container">
                <div className = "row row--grid">
                    {/* title */}
                    <div className = "col-12">
                        <div className = "main__title main__title--border-top">
                            <h2>Getting Started With Starseas</h2>
                        </div>
                    </div>
                    {/* end title */}
                    
                    
                    <div className = "col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className = "feature feature--last">
                            <span className = "feature__icon feature__icon--red">
                                {/* <i className = "far fa-sack-dollar"></i> */}
                                <FaIcons.FaDollarSign />
                            </span>
                            <h3 className = "feature__title">Purchase SGE Token</h3>
                            <p className = "feature__text">
                                Starseas is fueled by the SGE token and community. You will need to purchase a minimum of 1 billion SGE tokens and hold them in your crypto wallet to use Starseas. If you are not sure how to purchase SGE, visit our resource center.
                            </p>
                        </div>
                    </div>

                    <div className = "col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className = "feature">
                            <span className = "feature__icon">
                                {/* <i className = "far fa-wallet"></i> */}
                                <FaIcons.FaWallet />
                            </span>
                            <h3 className = "feature__title">Connect Your Wallet</h3>
                            <p className = "feature__text">
                                Congrats! You are now a part of the Society of Galactic Exploration. You can now access Starseas by connecting your Metamask or Coinbase wallet to sign up or sign in to your Starseas account. 
                            </p>
                        </div>
                    </div>

                    <div className = "col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className = "feature">
                            <span className = "feature__icon feature__icon--green">
                                {/* <i className = "far fa-layer-plus"></i> */}
                                <FaIcons.FaLayerGroup />
                            </span>
                            <h3 className = "feature__title">Set Up Profile</h3>
                            <p className = "feature__text">
                                Verified creators attract a much larger following! Be sure to add your name, email, socials, and any other details you want to share on your profile page.
                            </p>
                        </div>
                    </div>

                    <div className = "col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className = "feature">
                            <span className = "feature__icon feature__icon--purple">
                                {/* <i className = "far fa-images"></i> */}
                                <FaIcons.FaImages />
                            </span>
                            <h3 className = "feature__title">Create NFTs</h3>
                            <p className = "feature__text">
                                You are now free to explore the galaxy and mint your very own stars! If you need any additional assistance navigating the Starseas Marketplace, remeber to use the resource center! 
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeatureArea