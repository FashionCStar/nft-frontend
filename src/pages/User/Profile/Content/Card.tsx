import * as FaIcons from 'react-icons/fa'
import {useState, useEffect} from 'react'
function Card(props:any) {
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [ownerImg, setOwnerImg] = useState('')
    const [favCnt, setFavCnt] = useState(0)
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function setItemImgData(buffer:any) {
        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(buffer)
        setImg(temp)
    }
    function setOwnerData() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/findByWallet/' + props.item.ownerAddr
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                if(res[0] !== undefined) {
                    if(res[0].userImg !== undefined) {
                        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(res[0].userImg.data.data)
                        setOwnerImg(temp)
                    }
                    if(res[0].name !== undefined) {
                        setOwner(res[0].name)
                    }
                }
            })
    }
    useEffect(() => {
        setItemImgData(props.item.img.data.data)
        setOwnerData()
    }, [])
    return(
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                <a href="item.html" className="card__cover">
                    <img src={img} alt=""/>
                </a>
                <h3 className="card__title">
                    <a href="item.html">{props.item.name}</a></h3>
                <div className="card__author card__author--verified">
                    <img src={ownerImg} alt=""/>
                    <a href="author.html">{owner}</a>
                </div>
                <div className="card__info">
                    {
                        props.forSale === true ?
                        <>
                            <div className="card__price">
                                <span>Sale price</span>
                                <span>9.21 ETH</span>
                            </div>

                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart/>
                                <span>6k</span>
                            </button>
                        </>    
                        :
                        <>
                            <button className="author__follow" type="button">LIST NFT</button>
                            <button className="card__likes" type="button">
                                <FaIcons.FaHeart/>
                                <span>6k</span>
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card