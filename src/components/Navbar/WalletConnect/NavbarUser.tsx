import { useEffect, useRef } from 'react'
import styles from '../Navbar.module.css'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import * as FaIcons from "react-icons/fa";
import { useWeb3React } from "@web3-react/core"
import { injected } from "./Connectors"
function NavbarUser() {
    const dropdownRef = useRef<any>()
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    async function connect() {
        localStorage.setItem('connected', 'true')
        try {
            await activate(injected)
        } catch (ex) {
            console.log(ex)
        }
    }
    async function disconnect() {
        localStorage.setItem('connected', 'false')
        localStorage.setItem('wallet', 'null') 
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }
    async function setUserId(walletAddr: any) {
        let url = process.env.REACT_APP_API_BASE_URL + 'users/findByWallet/' + walletAddr
        await fetch(url)
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('userId', res[0].userId)
            })
    }
    useEffect(() => {
        if(localStorage.getItem('connected') === 'true'){
            connect()
        }
        if(account !== null && account !== undefined) {
            localStorage.setItem('wallet', account)
            setUserId(account)
        }
        const pageClickEvent = (e: any) => {
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        };
        if(isActive) {
            window.addEventListener('click', pageClickEvent)
        }
        return () => {
            window.removeEventListener('click', pageClickEvent)
        }
    }, [isActive, active])
    return (
        <div className={styles.navbarUserWrap}>
            {
                ((localStorage.getItem('connected') === 'true') && (localStorage.getItem('wallet') !== 'null')) ?
                    <div className={styles.navbarUserContainer}>
                        <button onClick={onClick} className={styles.navbarUserMenuTrigger}>
                            <FaIcons.FaUserCircle size={28}/>
                        </button>
                        <nav ref={dropdownRef} className={isActive ? styles.navbarUserNavActive : styles.navbarUserNavInactive }>
                            <ul>
                                <li><a href="/users">Profile</a></li>
                                <li><a href="/">Favorites</a></li>
                                <li><a href="/">Settings</a></li>
                                <li onClick={disconnect}><a href="/">Log Out</a></li>
                            </ul>
                        </nav>
                    </div>
                :
                <div className={styles.walletWrap}>
                    <button onClick = {connect} className={styles.walletButton}>Connect</button>
                </div>
            }
        </div>
)
}

export default NavbarUser;