import { useState, useEffect } from 'react'
import {Dropdown} from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import avatar1 from '../../assets/img/avatars/avatar-1.jpg'
import { useWeb3React } from "@web3-react/core"
import {injected} from './WalletConnect/Connectors'
var Web3 = require('web3')
function NavUser() {
    const [balance, setBalance] = useState<any>()
    const [name, setName] = useState<any>()
    var web3 = new Web3(Web3.givenProvider)
    const { active, account, activate, deactivate } = useWeb3React()
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
                if(res[0] !== undefined) {
                    localStorage.setItem('userId', res[0].userId)
                    setName(res[0].name)
                    return true
                } else {
                    return false
                }
            })
    }
    async function getBalance(address:any) {
        var bal = await web3.eth.getBalance(address)
        setBalance(web3.utils.fromWei(bal, 'ether'))
    }
    useEffect(() => {
        if(localStorage.getItem('connected') === 'true'){
            connect()
        }
        if(account !== null && account !== undefined) {
            localStorage.setItem('wallet', account)
            setUserId(account)
            getBalance(account)
        }
    }, [active])
    return(
        <div className="header__actions">
            <div className="header__action header__action--search">
                <button className="header__action-btn" type="button"><FaIcons.FaSearch/></button>
            </div>
            {
                ((localStorage.getItem('connected') === 'true') && (localStorage.getItem('wallet') !== 'null')) ?
                (
                    name !== undefined ?
                        <div className="header__action header__action--profile">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="header__profile-btn header__profile-btn--verified">
                                    <img src={avatar1} alt=""/>
                                    <div>
                                        <p>{name}</p>
                                        <span>{balance} ETH</span>
                                    </div>
                                    <FaIcons.FaAngleDown />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="header__profile-menu">
                                    <Dropdown.Item href="/profile"><FaIcons.FaUser /> <span>Profile</span></Dropdown.Item>
                                    <Dropdown.Item href="/profile"><FaIcons.FaListUl/><span>Activity</span></Dropdown.Item>
                                    <Dropdown.Item href="/addItem"><FaIcons.FaLayerGroup/> <span>Add Item</span></Dropdown.Item>
                                    <Dropdown.Item href="/profile"><FaIcons.FaCog /> <span>Settings</span></Dropdown.Item>
                                    <Dropdown.Item href="/" onClick={disconnect}><FaIcons.FaSignOutAlt/> <span>Sign out</span></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    :
                        <div className="header__action header__action--profile">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="header__profile-btn">
                                    <div>
                                        <span>{balance} ETH</span>
                                    </div>
                                    <FaIcons.FaAngleDown />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="header__profile-menu">
                                    <Dropdown.Item href="/signup"><FaIcons.FaUser /> <span>Sign Up</span></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                )
                :
                <button onClick = {connect} className="" style={{
                    "fontSize": "16px",
                    "color": "#ff37d0",
                    "fontWeight": "bold"
                }}>Connect</button>
            }

        </div>
    )
}

export default NavUser