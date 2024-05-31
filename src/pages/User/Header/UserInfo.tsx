import { useEffect, useState } from 'react'
import styles from '../User.module.css'
import UserImg from './UserImg'
function UserInfo() {
    let userId = localStorage.getItem('userId')
    const [name, setName] = useState('')
    const [wallet, setWallet] = useState('')
    function abbreviate(str:any) {
        var head = str.substring(0, 6)
        var tail = str.substring(str.length - 1, str.length -8)
        setWallet((head + ' ... ' + tail))
    }
    
    function fetchUserInfo() {
        let fetchUrl: any
        fetchUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + userId
        fetch(fetchUrl, {method:'GET'})
            .then(res=>res.json())
            .then( res => {
                setName(res[0].name)
            })
    }
    fetchUserInfo()
    useEffect(() => {
        let walTemp = localStorage.getItem('wallet')
        abbreviate(walTemp)
    },[])
    return (
        <div className={styles.userInfo}>
            <UserImg/>
            <p className={styles.userName}>{name}</p>
            <p className={styles.userWallet}>{wallet}</p>
        </div>
    )
}

export default UserInfo