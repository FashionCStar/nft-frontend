import { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
function Card(props: any) {
    const [nftImg, setNftImg] = useState('')
    const [avatarImg, setAvatarImg] = useState('')
    const [favCount, setFavConut] = useState('0')
    const [ownerName, setOwnerName] = useState('')
    const [fav, setFav] = useState(false)
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function setNftImgData(buffer:any) {
        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(buffer)
        setNftImg(temp)
    }
    function setOwnerData() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/findByWallet/' + props.ownerAddr
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                if(res[0] !== undefined) {
                    if(res[0].userImg !== undefined) {
                        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(res[0].userImg.data.data)
                        setAvatarImg(temp)
                    }
                    if(res[0].name !== undefined) {
                        setOwnerName(res[0].name)
                    }
                }
            })
    }
    function nFormatter(num:any, digits:any) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }
    function setFavCountData() {
        if(props.favUsers.length > 0) {
            setFavConut(nFormatter(props.favUsers.length, 1))
        } 
    }
    function isFav() {
        let myAddr = localStorage.getItem('wallet')
        if(myAddr !== '') {
            if(props.favUsers.includes(myAddr))
                setFav(true)
            else
                setFav(false)
        }
    }
    function removeItemFromArray(arr:any, item:any) {
        const idx = arr.indexOf(item)
        if(idx > -1) 
            arr.splice(idx, 1)
        console.log('removed array: ', arr)
        return arr
    }
    function removeFavUsers(addr:any) {
        let newFavUsers = props.favUsers
        newFavUsers = removeItemFromArray(newFavUsers, addr)
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(
            fetchURL, 
            {
                method:'PUT', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ favUsers: newFavUsers })
            }
        )
    }
    async function removeFavNfts(myAddr_:any, nftId_:any) {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/' + myAddr_
        let newFavNfts:any
        await fetch(fetchURL)
            .then(res=>res.json())
            .then(res=>{
                if(res[0] !== undefined) {
                    if(res[0].favNftIds !== undefined) {
                        newFavNfts = res[0].favNftIds
                    }
                }
            })
            newFavNfts = removeItemFromArray(newFavNfts, nftId_)
            fetch(
                fetchURL, 
                {
                    method:'PUT', 
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ favNftIds: newFavNfts })
                }
            )
    }
    function addFavUsers(addr:any) {
        let newFavUsers = props.favUsers
        newFavUsers.push(addr)
        console.log(JSON.stringify({ favUsers: newFavUsers }))
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(
            fetchURL, 
            {
                method:'PUT', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ favUsers: newFavUsers })
            }
        )
    }
    async function addFavNfts(myAddr_:any, nftId_:any) {
        let newFavNfts:any
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/' + myAddr_
        await fetch(fetchURL)
            .then(res=>res.json())
            .then(res=>{
                newFavNfts = res[0].favNftIds
            })
        newFavNfts.push(nftId_)
        fetch(
            fetchURL, 
            {
                method:'PUT', 
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({ favNftIds: newFavNfts })
            }
        )
    }
    function favClick() {
        let myAddr = localStorage.getItem('wallet')
        if(myAddr !== '') {
            if(fav) {
                removeFavUsers(myAddr)
                removeFavNfts(myAddr, props.nftId)
                setFavConut(nFormatter((props.favUsers.length - 1), 1))
            } else {
                addFavUsers(myAddr)
                addFavNfts(myAddr, props.nftId)
                setFavConut(nFormatter((props.favUsers.length + 1), 1))
            }
            setFav(!fav)
        }
    }
    useEffect(() => {
        isFav()
        setNftImgData(props.nftImg.data.data)
        setOwnerData()
        setFavCountData()
    }, [props.nftId, favCount])
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
            <div className="card">
                <a href={props.nftId} className="card__cover">
                    <img src={nftImg} alt=""/>
                </a>
                <h3 className="card__title">
                    <a href={props.nftId}>
                        {props.nftName}
                    </a>
                </h3>
                <div className="card__author card__author--verified">
                    <img src={avatarImg} alt=""/>
                    <a href="author.html">{ownerName}</a>
                </div>
                <div className="card__info">
                    <div className="card__price">
                        {
                            (props.state === 'none' || props.state === undefined) ?
                                <span>Not Available</span>
                            :
                                <span>{props.state} price</span>
                        }
                        <span>{props.price} {props.currency}</span>
                    </div>

                    <button className="card__likes" type="button" onClick={favClick}>
                    {
                        fav ? 
                            <FaIcons.FaHeart />
                        :
                            <FaIcons.FaRegHeart />
                    }
                        <span>{favCount}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card