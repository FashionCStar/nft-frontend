import Breadcrumb from '../../Breadcrumb'
function Contract() {
    return(
        // <!-- main content -->
        <main className="main">
    
            {/* <!-- breadcrumb --> */}
            <Breadcrumb title={"Contact Us"} subTitle={"Contact Us"}/>
            {/* <!-- end breadcrumb --> */}
    
    
            {/* <!-- contact area --> */}
            <div className="contact-area pt-70">
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12 col-lg-7 col-xl-8">
                            <form method="post" action="/netland/assets/php/contact.php" id="contact-form" className="sign__form sign__form--contacts">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="sign__group">
                                            <input type="text" name="name" className="sign__input" placeholder="Name" required/>
                                        </div>
                                    </div>
        
                                    <div className="col-12 col-md-6">
                                        <div className="sign__group">
                                            <input type="text" name="email" className="sign__input" placeholder="Email" required/>
                                        </div>
                                    </div>
        
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <input type="text" name="subject" className="sign__input" placeholder="Subject" required/>
                                        </div>
                                    </div>
        
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <textarea name="message" className="sign__textarea" placeholder="Type your message" required></textarea>
                                        </div>
                                    </div>
        
                                    <div className="col-12 col-xl-3">
                                        <button type="submit" className="sign__btn">Send Message</button>
                                    </div>
                                    <div className="col-12 my-3">
                                        <div className="form-messege text-success"></div>
                                    </div>
                                </div>
                            </form>	
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <div className="main__title main__title--sidebar">
                                <h2>Get In Touch</h2>
                                <p>If you have any suggestions or you would like to contact us please use this form or send us an email.</p>
                            </div>
                            <ul className="contacts__list">
                                <li><a href="mailto:admin@sge.space"><i className="far fa-envelope"></i> admin@sge.space</a></li>
                                <li><a href="#"><i className="far fa-map-marker-alt"></i> Chesterfield, Michigan, USA</a></li>
                            </ul>
                            <div className="contacts__social">
                                <a href="https://www.facebook.com/sge.spaceofficial/" target="_blank" > <i className="fab fa-facebook-f"></i> </a>
                                <a href="https://twitter.com/starseasnft" target="_blank" > <i className="fab fa-twitter"></i> </a>
                                <a href="https://t.me/SGEVerificationPortal" target="_blank" > <i className="fab fa-telegram"></i> </a>
                                <a href="https://www.instagram.com/sge.official_/?hl=en" target="_blank"> <i className="fab fa-instagram"></i> </a>
                                <a href="https://www.youtube.com/channel/UCkiGgGgFEFbjgk3ru8FI6Nw" target="_blank"> <i className="fab fa-youtube"></i> </a>
                                <a href="https://www.reddit.com/r/SGEofficial/"target="_blank"  > <i className="fab fa-reddit"></i> </a>
                            </div>
                        </div>   
    
                    </div>
                </div>
            </div>
            {/* <!-- end contact area --> */}
    
        </main>
        // <!-- end main content -->
    )
}

export default Contract