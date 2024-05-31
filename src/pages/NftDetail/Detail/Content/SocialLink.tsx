import * as FaIcons from 'react-icons/fa'
function SocialLink() {
    return(
        <div className="share share--asset">
            <a href="#" className="share__link share__link--fb"> <FaIcons.FaFacebookF/>
                <span>share</span></a>
            <a href="#" className="share__link share__link--tw"> <FaIcons.FaTwitter/>
                <span>tweet</span></a>
            <a href="#" className="share__link share__link--link"> <FaIcons.FaLink/> <span>copy
                    link</span></a>
        </div>
    )
}

export default SocialLink