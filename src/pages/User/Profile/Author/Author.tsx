import {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
function Author(props:any) {
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [code, setCode] = useState('')
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function setOwnerData() {
        let userWalletAddr = localStorage.getItem('wallet')
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/findByWallet/' + userWalletAddr
        if(userWalletAddr !== undefined && userWalletAddr !== null && userWalletAddr !== '') {
            fetch(fetchURL)
                .then(res => res.json())
                .then( res => {
                    if(res[0].userImg !== undefined) {
                        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(res[0].userImg.data.data)
                        setImg(temp)
                    }
                    if(res[0].name !== undefined) {
                        setName(res[0].name)
                    }
                    if(res[0].desc !== undefined) {
                        setDesc(res[0].desc)
                    }
                    if(res[0].code !== undefined) {
                        setCode(res[0].code)
                    }
                })
        }
    }
    useEffect(() => {
        setOwnerData()
    }, [])
    return(
        <div className="col-12 col-xl-3">
            <div className="author author--page">
                <div className="author__meta">
                    <a href="author.html" className="author__avatar author__avatar--verified">
                        <img src={img} alt=""/>
                    </a>
                    <h1 className="author__name"><a href="author.html">{name}</a></h1>
                    <h2 className="author__nickname"><a href="author.html">@condrey21</a></h2>
                    <p className="author__text">{desc}</p>
                    <div className="author__code">
                        <input type="text" value={code} id="author-code"/>
                        <button type="button">
                            <span>Copied</span>
                            <FaIcons.FaCopy />
                        </button>
                    </div>
                    <a href="#" className="author__link"><FaIcons.FaGlobe/> https://example.com</a>
                    <div className="author__social">
                        <a href="#" className=""><FaIcons.FaFacebookF/></a>
                        <a href="#" className=""><FaIcons.FaTwitter/></a>
                        <a href="#" className=""><FaIcons.FaInstagram/></a>
                        <a href="#" className=""><FaIcons.FaTelegram/></a>
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