import logoLight from '../../assets/img/logo/logo-light.png'
import * as FaIcons from 'react-icons/fa'
import PageLinks from './PageLinks'
import CategoryLinks from './CategoryLinks'
import CommunityLinks from './CommunityLinks'
import Subscribe from './Subscribe'
import SocialLinks from './SocialLinks'
function Footer() {
    return (
        <footer className = "footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-3">
                        <div className = "footer__logo">
                            <img src={logoLight} alt=""/>
                        </div>
                        <p className = "footer__tagline">
                            The first NFT platform designed to celebrate and enocurage space exploration. Create, sell, and collect stunning NFTS that are quite literally out of this world!  
                        </p>

                    </div>

                    {/* pages start */}
                    <PageLinks/>
                    {/* pages end */}

                    {/* Category Links Start */}
                    <CategoryLinks/>
                    {/* Category Links End */}

                    {/* Community Links Start */}
                    <CommunityLinks/>
                    {/* Community Links End */}

                    {/* Subscribe Start */}
                    <Subscribe />
                    {/* Subscribe End */}
                </div>

                <div className = "row">
                    <div className = "col-12">
                        <div className = "footer__content">
                            {/* Social Links Start */}
                            <SocialLinks />
                            {/* Social Links End */}

                            <small className = "footer__copyright">© Copyright 2021 <a href="#">Starseas</a> All Rights Reserved.</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer