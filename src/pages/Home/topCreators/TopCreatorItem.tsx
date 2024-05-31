import img1 from '../../../assets/img/avatars/1.jpg'
import img2 from '../../../assets/img/avatars/2.jpg'
import {useState, useEffect} from 'react'

function TopCreatorItem(props:any) {
    const [creatorAvatar, setCreatorAvatar] = useState('')
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    useEffect(() => {
        if(props.avatar !== undefined){
            let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(props.avatar.data.data)
            setCreatorAvatar(temp)
        }
    }, [])
    return(
        <li>
            <span className = "sellers-list__number">{props.order + 1}</span>
            <div className = "sellers-list__author sellers-list__author--verified">
                <img src={creatorAvatar} alt=""/>
                <a href={`/user/${props.userId}`}>{props.name}</a>
                {/* <span>520.25 ETH</span> */}
            </div>
        </li>
    )
}

export default TopCreatorItem