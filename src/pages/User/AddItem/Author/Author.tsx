import * as FaIcons from 'react-icons/fa'
function Author() {
    return(
        <div className="col-12 col-xl-3">
            <div className="author author--page">
                <div className="author__meta">
                    <a href="author.html" className="author__avatar author__avatar--verified">
                        <img src="assets/img/avatars/avatar-1.jpg" alt=""/>
                    </a>
                    <h1 className="author__name"><a href="author.html">Susa Condrey</a></h1>
                    <h2 className="author__nickname"><a href="author.html">@condrey21</a></h2>
                    <p className="author__text">There are many variations of passages orem psum available but the
                        majority have suffered alteration.</p>
                    <div className="author__code">
                        <input type="text" value="4fgddgwdfgfew5345353fdfdf3454edrgertt4rgre4" id="author-code"/>
                        <button type="button">
                            <span>Copied</span>
                            <FaIcons.FaCopy/>
                        </button>
                    </div>
                    <a href="#" className="author__link"> <FaIcons.FaGlobe/> https://example.com</a>
                    <div className="author__social">
                        <a href="#"><FaIcons.FaFacebookF/></a>
                        <a href="#"><FaIcons.FaTwitter/></a>
                        <a href="#"><FaIcons.FaInstagram/></a>
                        <a href="#"><FaIcons.FaLinkedin/></a>
                    </div>
                    <div className="author__wrap">
                        <div className="author__followers">
                            <p>5.5k</p>
                            <span>Followers</span>
                        </div>
                        <button className="author__follow" type="button">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author