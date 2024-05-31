import { useState, useEffect } from 'react'
import Marketplace from '../../Marketplace'
import Activity from './TabContent/Activity'
import Offers from './TabContent/Offers'
import styles from '../User.module.css'
import * as FaIcons from 'react-icons/fa'
function Body() {
    let userId = localStorage.getItem('userId')
    const [activeTab, setActiveTab] = useState('collected')
    const [collectedAmount, setCollectedAmount] = useState(0)
    const [createdAmount, setCreatedAmount] = useState(0)
    const [favoriteAmount, setFavoriteAmount] = useState(0)
    function handleTab(e:any) {
        console.log('click: ', e.target.id)
        switch (e.target.id) {
            case '0':
                setActiveTab('collected')
                break;
            case '1':
                setActiveTab('created')
                break;
            case '2':
                setActiveTab('favorite')
                break;
            case '3':
                setActiveTab('activity')
                break;
            case '4':
                setActiveTab('offers')
                break;
            default:
                setActiveTab('collected')
                break;
        }
    }
    function getAmount() {
        let fetchUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + userId
        fetch(fetchUrl)
            .then(res=>res.json())
            .then(res => {
                if(res[0].collectedNftIds) {
                    setCollectedAmount(res[0].collectedNftIds.length)
                } else {
                    setCollectedAmount(0)
                }
                if(res[0].createdNftIds) {
                    setCreatedAmount(res[0].createdNftIds.length)
                } else {
                    setCreatedAmount(0)
                }
                if(res[0].favNftIds) {
                    setFavoriteAmount(res[0].favNftIds.length)
                } else {
                    setFavoriteAmount(0)
                }
                
            })
    }
    useEffect(() => {
        getAmount()
    }, [collectedAmount, createdAmount, favoriteAmount, activeTab])
    // FaBuffer, FaBuromobelexperte, FaAlignJustify, FaRegEdit
    return (
        <>
            <div className={styles.tabNavigation}>
                <ul className={styles.tabNavWrap}>
                    <li className={activeTab==='collected'?styles.active:''} onClick={handleTab} id='0'>
                        <FaIcons.FaHeart size={15} />
                        Collected
                        <span className={styles.count}>{collectedAmount}</span>
                    </li>
                    <li className={activeTab==='created'?styles.active:''} onClick={handleTab} id='1'>
                        <FaIcons.FaWallet size={15}/>
                        created 
                        <span className={styles.count}>{createdAmount}</span>
                    </li>
                    <li className={activeTab==='favorite'?styles.active:''} onClick={handleTab} id='2'>
                        <FaIcons.FaHeart size={15}/>
                        favorite 
                        <span className={styles.count}>{favoriteAmount}</span>
                    </li>
                    <li className={activeTab==='activity'?styles.active:''} onClick={handleTab} id='3'>
                        <FaIcons.FaHistory size={15}/>
                        activity 
                        <span className={styles.count}></span>
                    </li>
                    <li className={activeTab==='offers'?styles.active:''} onClick={handleTab} id='4'>
                        <FaIcons.FaTag size={15} />
                        offers 
                        <span className={styles.count}></span>
                    </li>
                </ul>
            </div>
            <div>
                {
                    {
                        'collected': <Marketplace category={activeTab}/>,
                        'created' : <Marketplace category={activeTab}/>,
                        'favorite' : <Marketplace category={activeTab}/>,
                        'activity': <Activity/>,
                        'offers': <Offers/>
                    }[activeTab]
                }
            </div>
            
        </>
    )
}

export default Body