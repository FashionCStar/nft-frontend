import {useState, useEffect} from 'react'
import CreateSellNFT from "./SellNFT/CreateSellNFT"
import CancelSellNFT from "./SellNFT/CancelSellNFT"
import CancelAuction from "./CreateAuction/CancelAuction"
import CreateAuction from "./CreateAuction/CreateAuction"
import BuyNFT from "./BuyNFT/BuyNFT"
import BidAuction from "./BidAuction/BidAuction"
function NFTMarket(props:any) {
    const [user, setUser] = useState<any>('')
    useEffect(() => {
        if(localStorage.getItem('wallet') !== null && localStorage.getItem('wallet') !== undefined)
            setUser(localStorage.getItem('wallet'))
    },[])
    return(
        <>  
            {/* <CreateSellNFT nftId = {props.nftId}/>
            <CancelSellNFT nftId = {props.nftId}/>
            <CreateAuction nftId={props.nftId}/>
            <CancelAuction nftId={props.nftId}/> */}
            {
                user === props.owner ?
                (() => {
                    switch (props.nftState) {
                        case 'sale': // Sale
                            return (
                                // Cancel Sale
                                <CancelSellNFT nftId = {props.nftId}/>
                            )
                            break;
                        case 'auction':  // Auction
                            return (
                                // Cancel Auction 
                                <CancelAuction nftId={props.nftId}/>
                            )
                            break;
                        case 'none': // None
                            return (
                                //  Create Sale or Auction 
                                <>
                                    <CreateSellNFT nftId = {props.nftId}/>
                                    <CreateAuction nftId={props.nftId}/>
                                </>
                            )
                            break;
                        default:
                            return(
                                //  Create Sale or Auction 
                                <>
                                    <CreateSellNFT nftId = {props.nftId}/>
                                    <CreateAuction nftId={props.nftId}/>
                                </>
                            )
                            break;
                    }
                })()
                :
                (() => {
                    switch (props.nftState) {
                        case 'sale': // Sale
                            return (
                                //  Buy NFT 
                                <BuyNFT nftId={props.nftId}/>
                            )
                            break;
                        case 'auction': // Auction
                            return (
                                //  Bid Auction 
                                <BidAuction nftId={props.nftId}/>
                            )
                            break;
                        case 'none': // None
                            return (
                                <>This NFT is disabled now.</>
                            )
                            break;
                        default: // None
                            return (
                                <>This NFT is disabled now.</>
                            )
                            break;
                    }
                })()
            }
        </>
    )
}

export default NFTMarket