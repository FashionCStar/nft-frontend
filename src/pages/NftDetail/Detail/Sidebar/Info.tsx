import {useState, useEffect} from 'react'
function Info(props:any) {
    const [avatar, setAvatar] = useState('')
    const [userName, setUserName] = useState('')
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function getCreator() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'users/' + props.creator
        fetch(fetchURL)
            .then(res => res.json())
            .then(res => {
                if(res[0].userImg !== undefined) {
                    let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(res[0].userImg.data.data)
                    setAvatar(temp)
                }
                if(res[0].name !== undefined)
                    setUserName(res[0].name)
            })
    }
    useEffect(() => {
        getCreator()
    }, [])
    return(
        <>
            <div className="asset__desc">
                <h2>{props.name}</h2>
            </div>

            <ul className="asset__authors">
                <li>
                    <div className="card__price">
                        <span>Sale price</span>
                        <span className="text-danger fw-bolder">{props.price} {props.currency == 0 ? "ETH" : "SGE"}</span>
                    </div>
                </li>
                <li>
                    <span>Creator</span>
                    <div className="asset__author asset__author--verified">
                        <img src={avatar} alt=""/>
                        <a href="author.html">{userName}</a>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Info