import single from '../../../../assets/img/items/single.jpg'
import FavCount from './FavCount'
import SocialLink from './SocialLink'
import {useState, useEffect} from 'react'
function Content(props: any) {
    const nftId = props.nftId
    const [image, setImage] = useState('')
    const [favCount, setFavCount] = useState(0)
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function getImage(buffer:any) {
        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(buffer)
        setImage(temp)
    }
    function fetchData() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + nftId
        fetch(fetchURL)
            .then(res=>res.json())
            .then(res => {
                if(res[0].img.data.data !== undefined) 
                    getImage(res[0].img.data.data)
                if(res[0].favUsers.length > 0) {
                    setFavCount(res[0].favUsers.length)
                } else {
                    setFavCount(0)
                }
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return(
        <div className="col-12 col-xl-8">
            <div className="asset__item">
                <img src={image} alt=""/>
                <SocialLink/>
                <FavCount favCnt = {favCount}/>
            </div>
        </div>
    )
}

export default Content