import { useState, useRef } from 'react'
import styles from '../User.module.css'
import * as FaIcons from 'react-icons/fa'
function Background() {
    let userId = localStorage.getItem('userId')
    const inputRef = useRef<HTMLInputElement>(null)
    function inputFile(event: any) {
        inputRef.current?.click()
    }
    const [img, setImg] = useState('')
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function getImg(buffer:any) {
        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(buffer)
        setImg(temp)
    }
    function fetchImg() {
        let fetchUrl: any
        fetchUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + userId
        fetch(fetchUrl, {method:'GET'})
            .then(res=>res.json())
            .then( res => {
                if(res[0].bgImg != undefined) {
                    getImg(res[0].bgImg.data.data)
                } 
            })
    }
    fetchImg()
    function storeImg(e: any) {
        e.preventDefault()
        let data = new FormData()
        if (e.target.files && e.target.files.length > 0) {
            data.append('bgImg', e.target.files[0])
        }
        
        let fetchUrl: any
        fetchUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + localStorage.getItem('userId')
        fetch(fetchUrl,
            {
                method: 'PUT',
                body: data
            })
            .then(res => res.json())
            .then(res => {
                getImg(res.bgImg.data.data)
            })
    }
    return (
        <div className={styles.headerBackground} onClick={inputFile}>
            <div className={styles.bgImgContainer}>
                {
                    img ? 
                    <img src = {img}></img>
                    :
                    <div className={styles.bgImgAlt}></div>
                }
            </div>
            <div className={styles.bgImgUploadPen}>
                <FaIcons.FaPen size={40} />
            </div>
            <input type="file" name="nft_img" className={styles.bgInputFile} ref = {inputRef} onChange={storeImg}/>
        </div>
    )
}

export default Background