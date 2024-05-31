import itemImg1 from '../../../assets/img/items/1.jpg'
import avatarImg1 from '../../../assets/img/avatars/1.jpg'
import {useState, useEffect} from 'react'
function LiveAuctionItem(props:any) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [creatorAvatar, setCreatorAvatar] = useState('')
    const [creatorName, setCreatorName] = useState('')
    
    const [timeLeft, setTimeLeft] = useState();
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    function calculateTimeLeft(endTime:any) {
        if(endTime !== undefined){
            let end = new Date(endTime)
            let endStamp = end.getTime()
            let curStamp = new Date().getTime()
            let milisec_diff = endStamp - curStamp
            setDay(Math.round(milisec_diff / 1000 / 60 / 60 / 24))

            let date_diff = new Date(milisec_diff)
            setHour(date_diff.getHours())
            setMin(date_diff.getMinutes())
            setSec(date_diff.getSeconds())
        }
    }
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function getNFT() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(fetchURL)
            .then(res => res.json())
            .then(res => {
                if(res[0].img !== undefined){
                    let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(res[0].img.data.data)
                    setImage(temp)
                }
                if(res[0].name !== undefined)
                    setName(res[0].name)
            })
    }
    function getAuctionCreator() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/' + props.creator
        fetch(fetchURL)
            .then(res => res.json())
            .then(res => {
                if(res[0].userImg !== undefined) {
                    let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(res[0].userImg.data.data)
                    setCreatorAvatar(temp)
                }
                if(res[0].name !== undefined)
                    setCreatorName(res[0].name)
            })
    }
    useEffect(() => {
        getNFT()
        getAuctionCreator()
        let myInterval = setInterval(() => {
            calculateTimeLeft(props.endTime)
        }, 1000)
        return() => {
            clearInterval(myInterval)
        }
    }, [])
    return(
        <div className = "card">
            <a href={`/assets/${props.nftId}`} className = "card__cover">
                <img src={image} alt=""/>
                <span className = "card__time">{day}: {hour}: {min}: {sec}</span>
            </a>
            <h3 className = "card__title"><a href="item.html">{name}</a></h3>
            <div className = "card__author card__author--verified">
                <img src={creatorAvatar} alt=""/>
                <a href="author.html">{creatorName}</a>
            </div>
            <div className = "card__info">
                <div className = "card__price">
                    <span>Highest Bid Price</span>
                    <span>{props.highestBid} {props.currency}</span>
                </div>

                <button className = "card__likes" type="button">
                    <i className = "far fa-heart"></i>
                    <span>1k</span>
                </button>
            </div>
        </div>
    )
}

export default LiveAuctionItem