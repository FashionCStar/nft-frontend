import Breadcrumb from '../../Breadcrumb'
import * as FaIcons from 'react-icons/fa'
function SgeToken() {
    return(
                // <!-- main content -->
                <main className="main">
    
                {/* <!-- breadcrumb --> */}
                <Breadcrumb title={"Token"} subTitle={"SGE Token"}/>
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
                                    <h1>Largest Marketplace To Collect , Buy and Sell Creative NFTs Digital Assets</h1>
        
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form, by injected humour, or randomised words which don't
                                        look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                        need to be sure there isn't anything embarrassing hidden in the middle.
                                    </p>
                                    <p>
                                        On the other hand, we denounce with righteous indignation and dislike men who are so
                                        beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                                        that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                                        belongs to those who fail in their duty.
                                    </p>
                                    <div className="home-btns">
                                        <a href="#" className="home__btn">Learn More</a>
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
        
        
                {/* <!-- token --> */}
                <div className="token-area pt-70">
                    <div className="container">
                        <div className="row row--grid">
                            {/* <!-- title --> */}
                            <div className="col-12 col-xl-8">
                                <div className="main__title">
                                    <h2>How get token</h2>
        
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- end title --> */}
        
                            <div className="row row--grid">
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature">
                                        <span className="feature__icon feature__icon--blue">
                                            {/* <i className="far fa-layer-plus"></i> */}
                                            <FaIcons.FaPlus />
                                        </span>
                                        <h3 className="feature__title">Create and sell</h3>
                                        <p className="feature__text">
                                            It is a long established fact that a reader will be distracted by the readable content of a page.
                                        </p>
                                    </div>
                                </div>
        
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature">
                                        <span className="feature__icon feature__icon--red">
                                            {/* <i className="far fa-layer-group"></i> */}
                                            <FaIcons.FaLayerGroup />
                                        </span>
                                        <h3 className="feature__title">Collect NFTs</h3>
                                        <p className="feature__text">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                    </div>
                                </div>
        
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature">
                                        <span className="feature__icon feature__icon--purple">
                                            {/* <i className="far fa-box"></i> */}
                                            <FaIcons.FaBox />
                                        </span>
                                        <h3 className="feature__title">Get airdrop user</h3>
                                        <p className="feature__text">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                    </div>
                                </div>
        
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature">
                                        <span className="feature__icon feature__icon--green">
                                            {/* <i className="far fa-box-check"></i> */}
                                            <FaIcons.FaCheck/>
                                        </span>
                                        <h3 className="feature__title">Get airdrop NFT holder</h3>
                                        <p className="feature__text">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                    </div>
                                </div>
        
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature">
                                        <span className="feature__icon">
                                            {/* <i className="far fa-sliders-h"></i> */}
                                            <FaIcons.FaSlidersH/>
                                        </span>
                                        <h3 className="feature__title">Excerpt Tokens</h3>
                                        <p className="feature__text">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                    </div>
                                </div>
        
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature">
                                        <span className="feature__icon">
                                            {/* <i className="far fa-thumbs-up"></i> */}
                                            <FaIcons.FaThumbsUp/>
                                        </span>
                                        <h3 className="feature__title">Vote for platform upgrades</h3>
                                        <p className="feature__text">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                    </div>
                                </div>
        
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature">
                                        <span className="feature__icon">
                                            {/* <i className="far fa-heart"></i> */}
                                            <FaIcons.FaHeart/>
                                        </span>
                                        <h3 className="feature__title">Choose featured artworks</h3>
                                        <p className="feature__text">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                    </div>
                                </div>
        
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div className="feature feature--last">
                                        <span className="feature__icon">
                                            {/* <i className="far fa-cogs"></i> */}
                                            <FaIcons.FaCogs />
                                        </span>
                                        <h3 className="feature__title">Participate in moderation</h3>
                                        <p className="feature__text">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                    </div>
                                </div>
                            </div>
        
        
                        </div>
                    </div>
                </div>
                {/* <!-- end token --> */}
        
            </main>
            // <!-- end main content -->
    )
}

export default SgeToken