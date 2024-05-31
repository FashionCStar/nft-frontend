import * as FaIcons from 'react-icons/fa'
function SocialLinks() {
    return(
        <div className = "footer__social">
            <a href="https://www.facebook.com/sge.spaceofficial/" target="_blank" >
                <FaIcons.FaFacebookF />
            </a>
            <a href="https://twitter.com/starseasnft" target="_blank" >
                <FaIcons.FaTwitter /> 
            </a>
            <a href="https://t.me/SGEVerificationPortal" target="_blank" >
                <FaIcons.FaTelegram /> 
            </a>
            <a href="https://www.instagram.com/sge.official_/?hl=en" target="_blank"> 
                <FaIcons.FaInstagram /> 
            </a>
            <a href="https://www.youtube.com/channel/UCkiGgGgFEFbjgk3ru8FI6Nw" target="_blank"> 
                <FaIcons.FaYoutube />
            </a>
            <a href="https://www.reddit.com/r/SGEofficial/"target="_blank"  > 
                <FaIcons.FaReddit />
            </a>
        </div>
    )
}

export default SocialLinks