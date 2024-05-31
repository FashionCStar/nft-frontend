import Info from './Info'
import TabContent from './Tab/TabContent'
import TabHead from './Tab/TabHead'
import NFTMarket from './NFTMarket/NFTMarket'
import {useState, useEffect} from 'react'
function Sidebar(props:any) {
    enum NFTState {
        Sale,
        Auction,
        None
    }
    const [auctionEnd, setAuctionEnd] = useState(0)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [currency, setCurrency] = useState(0)
    const [creatorAddr, setCreatorAddr] = useState('')
    const [ownerAddr, setOwnerAddr] = useState('')

    const [desc, setDesc] = useState('')
    const [created, setCreated] = useState('')

    const [nftState, setNftState] = useState(NFTState.None)

    function getInfo() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(fetchURL)
            .then(res => res.json())
            .then(res => {
                if(res[0].name !== undefined)
                    setName(res[0].name)
                if(res[0].currency !== undefined)
                    setCurrency(res[0].currency)
                if(res[0].price !== undefined)
                    setPrice(res[0].price)
                if(res[0].creatorAddr !== undefined)
                    setCreatorAddr(res[0].creatorAddr)

                if(res[0].description !== undefined)
                    setDesc(res[0].description)
                if(res[0].created !== undefined) {
                    setCreated(res[0].created)
                }
                if(res[0].ownerAddr !== undefined)
                    setOwnerAddr(res[0].ownerAddr)
                if(res[0].state !== undefined)
                    setNftState(res[0].state)
            })
    }
    useEffect(() => {
        getInfo()
    }, [])
    return(
        <div className="col-12 col-xl-4">
            <div className="asset__info">
                <Info name={name} currency={currency} price={price} creator={creatorAddr}/>
                <TabHead/>
                <TabContent desc={desc} created={created}/>
                <NFTMarket creator={creatorAddr} owner={ownerAddr} nftState = {nftState} nftId={props.nftId}/>
            </div>
        </div>
    )
}

export default Sidebar