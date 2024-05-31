import Activity from "./Activity"
import ForSale from "./ForSale"
import Settings from "./Settings"
import Unlisted from "./Unlisted"

import {useState, useEffect} from 'react'
import ContentTab from "./ContentTab"
function Content(props:any) {

    const [forSaleNfts, setForSaleNfts] = useState([])
    const [unlistNfts, setUnlistNfts] = useState([])
    function getForSaleNfts() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'forSaleNfts'
        fetch(fetchURL)
        .then(res => res.json())
        .then( res => {
            setForSaleNfts(res)
        })
    }
    function getUnlistNfts() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'unlistNfts'
        fetch(fetchURL)
        .then(res => res.json())
        .then( res => {
            setUnlistNfts(res)
        })
    }
    useEffect(() => {
        getForSaleNfts()
        getUnlistNfts()
    }, [])
    return(
        <div className="col-12 col-xl-9">
            <ContentTab signup={props.signup}/>
            {
                props.signup ?
                    <div className="tab-content">
                        <Settings signup={true}/>
                    </div>
                :
                    <div className="tab-content">
                        <ForSale nfts={forSaleNfts}/>
                        <Unlisted nfts={unlistNfts}/>
                        <Activity/>
                        <Settings/>
                    </div>
            }
        </div>
    )
}

export default Content