import * as FaIcons from 'react-icons/fa'
function Subscribe() {
    return(
        <div className = "col-md-3">
            <h6 className = "footer__title">Stay up to Date</h6>
            <div className = "footer-newsletter">
                <p>Subscribe to our newsletter for future updates! .</p>
                <form action="#">
                    <input type="email" placeholder="Enter your email"/>
                    <button type="submit"><FaIcons.FaPaperPlane />Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe