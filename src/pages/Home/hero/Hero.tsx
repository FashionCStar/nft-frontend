import home1 from '../../../assets/img/home/home-1.jpg'
import * as FaIcons from 'react-icons/fa'
function Hero() {
    return (
        <div className = "home" style={{backgroundImage: `url(${home1})`}}>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6">
                        <div className = "home__content">
                            <h1 className = "home__title">MINT THE STARS </h1>
                            <p className = "home__text"> Starseas is the first NFT platform developed to celebrate the mysteries and wonders of our universe and encourage creators to participate in the digital world of space exploration.</p>

                            <div className = "home__btns">
                                <a href="live-auction.html" className = "home__btn"> Explore <FaIcons.FaRocket /></a>
                                <a href="wallet-connect.html" className = "home__btn home__btn2">Create <FaIcons.FaEdit /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero