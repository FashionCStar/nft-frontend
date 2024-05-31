import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const auctionJSON = require('../../../../../../contracts/Auction.json')
const auctionContractAddr = process.env.REACT_APP_AUCTION_ADDR

const starSeasNftJSON = require('../../../../../../contracts/StarSeasNFT.json')
const starSeasNftContractAddr = process.env.REACT_APP_STARSEASNFT_ADDR
function CreateAuction(props:any) {
    const [endDate, setEndDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date());
    const [currency, setCurrency] = useState('eth')
    const [price, setPrice] = useState('0')

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const auctionContract = new web3.eth.Contract(auctionJSON, auctionContractAddr)
    const starSeasNft = new web3.eth.Contract(starSeasNftJSON, starSeasNftContractAddr)
    let tx

    function updateNftState(currency:any, price: any) {
        var data = new FormData()
        data.append('currency', currency)
        data.append('price', price.toString())
        data.append('state', 'auction')
        let updateURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(updateURL, {method: 'PUT', body: data})
            .then(res => res.json())
            .then( res => {

            })
    }
    function addNewAuctionDB(currency:any, price:any, creator:any) {
        var data = new FormData()
        data.append('nftId', props.nftId)
        data.append('currency', currency)
        data.append('auctionPrice', price)
        data.append('startTime', startDate.toString())
        data.append('endTime', endDate.toString())
        data.append('creator', creator)
        data.append('highestBid', price)
        data.append('bidder', '0x0')
        let created = new Date()
        data.append('created', created.toString())
        let apiURL = process.env.REACT_APP_API_BASE_URL + 'auctions/'
        fetch(apiURL, {method: 'POST', body: data})
            .then(res => res.json())
            .then(res => {
            })
    }
    async function createAuction(event:any) {
        event.preventDefault()
        
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            tx = await starSeasNft.methods.approve(auctionContractAddr, props.nftId).send({from: userWalletAddr[0]})
            // function createAuction(uint256 tokenId_, Currency currency_, uint256 auctionPrice_, uint256 startTime_, uint256 endTime_)
            if(currency === 'eth'){
                tx = await auctionContract.methods
                    .createAuction(props.nftId, 0, web3.utils.toWei(price, 'ether'), Math.round(startDate.getTime()/1000), Math.round(endDate.getTime()/1000))
                    .send({from: userWalletAddr[0]})
            } else {
                tx = await auctionContract.methods
                    .createAuction(props.nftId, 1, web3.utils.toWei(price, 'ether'), Math.round(startDate.getTime()/1000), Math.round(endDate.getTime()/1000))
                    .send({from: userWalletAddr[0]})
            }
            setTxConfirm(true)
            setTxHash(tx.transactionHash)
            updateNftState(currency, price)
            addNewAuctionDB(currency, price, userWalletAddr[0])
        } catch (error: any) {
            setTxFailed(error.message)
        }
        // let userWalletAddr = await web3.eth.getAccounts()
        // addNewAuctionDB(currency, price, userWalletAddr[0])
    }
    return(
        <>
            <form onSubmit={createAuction}>
                <div className="col-12">
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="itemname">Price</label>
                        <input id="itemname" type="text" name="itemname" className="sign__input" placeholder="" onChange={(e:any) => {setPrice(e.target.value)}}/>
                    </div>
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="number_of_copies">Currency</label>
                        <select id="number_of_copies" name="number_of_copies" className="sign__select" onChange={(e:any) => {setCurrency(e.target.value)}}>
                            <option value="eth">ETH</option>
                            <option value="sge">SGE</option>
                        </select>
                    </div>
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="itemname">Start Time</label>
                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
                    </div>
                    <div className="sign__group">
                        <label className="sign__label" htmlFor="itemname">End Time</label>
                        <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} />
                    </div>
                </div>
                <div className="col-12 col-xl-3">
                    <button className="sign__btn">Create Auction</button>
                </div>
            </form>
        </>
    )
}

export default CreateAuction