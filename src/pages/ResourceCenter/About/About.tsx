import Breadcrumb from '../../Breadcrumb'
function About() {
    return(
        // <!-- main content -->
        <main className="main">
    
            {/* <!-- breadcrumb --> */}
            <Breadcrumb title={"About Starseas"} subTitle={"About"}/>
            {/* <!-- end breadcrumb --> */}
    
    
            {/* <!-- about area --> */}
            <div className="about-area pt-70">
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-md-6">
                            <img src="assets/img/about/about.png" className="w-100 mb-5" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="main__title main__title--page">
                                <h1>The First NFT Marketplace With A True Passion For Space Exploration</h1>
    
                                <p>
                                    Starseas was created by and for a community of space fans and cryptocurrency enthusiasts. That community is better well-known as the Society of Galactic Exploration. The Society of Galactic Exploration or "SGE" for short, was created on the Ethereum mainnet as an ERC-20 contract. Starseas is the first SGE token utility launched by the SGE community.  
                                </p>
                                <p>
                                    Whether you are a professional astrophotographer, or you are brand new to crypto, our community welcomes you! Starseas is a great platform to begin collecting, creating, and selling your very own NFTs. So what is a NFT? A NFT is a non-fungible token. For those that are brand new to the space, you can think of it as a digital collectible that only has one creator and owner. In the real world, collectibles require professionals to confirm the legitimacy of said pyiscal item. In the crypto world, you can think of the blockchain as the authenticator to the legitimacy of these digital assets. However, when it comes to NFTs, it is impossible to create fake replicas of digital assets on the blockchain.  
                                </p>
                                <div className="home-btns">
                                    <a href="https://ethereum.org/en/nft/" target="_blank" className="home__btn">Learn More About NFTs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end about area --> */}
    
    
            {/* <!-- how works --> */}
            <div className="how-works pt-70">
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12 col-lg-4">
                            <div className="step">
                                <span className="step__number">01</span>
                                <h3 className="step__title">Set up your wallet</h3>
                                <p className="step__text">There are many variations of passages of orem psum available but the
                                    majority have suffered alteration in some injected humour.</p>
                            </div>
                        </div>
    
                        <div className="col-12 col-lg-4">
                            <div className="step">
                                <span className="step__number">02</span>
                                <h3 className="step__title">Create your collection</h3>
                                <p className="step__text">There are many variations of passages of orem psum available but the
                                    majority have suffered alteration in some injected humour.</p>
                            </div>
                        </div>
    
                        <div className="col-12 col-lg-4">
                            <div className="step">
                                <span className="step__number">03</span>
                                <h3 className="step__title">Add your NFTs</h3>
                                <p className="step__text">There are many variations of passages of orem psum available but the
                                    majority have suffered alteration in some injected humour.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end how works --> */}
    
    
            {/* <!-- choose us --> */}
            <div className="how-works pt-70">
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-md-6">
                            <div className="main__title">
                                <h2>Why choose us?</h2>
    
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                    necessary, making this the first true generator on the Internet. It uses a dictionary of
                                    over Latin words, combined with a handful of model sentence structures, to generate
                                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                                    from repetition, injected humour, or non-characteristic words etc.
                                </p>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.
                                </p>
                                <a href="https://www.youtube.com/watch?v=ckHzmP1evNU" className="main__video open-video"><i
                                        className="far fa-play"></i> Watch video</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="assets/img/about/choose.png" className="w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end choose us --> */}
    
        </main>
        // <!-- end main content -->
    )
}

export default About