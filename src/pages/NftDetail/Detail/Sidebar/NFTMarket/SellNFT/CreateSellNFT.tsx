import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const marketJSON = require('../../../../../../contracts/Market.json')
const marketContractAddr = process.env.REACT_APP_MARKET_ADDR

const starSeasNftJSON = require('../../../../../../contracts/StarSeasNFT.json')
const starSeasNftContractAddr = process.env.REACT_APP_STARSEASNFT_ADDR

function CreateSellNFT(props:any) {
    const [endDate, setEndDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date());
    const [currency, setCurrency] = useState('eth')
    const [price, setPrice] = useState('0')

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const marketContract = new web3.eth.Contract(marketJSON, marketContractAddr)
    const starSeasNft = new web3.eth.Contract(starSeasNftJSON, starSeasNftContractAddr)
    let tx
    function setSellOnDB(currency:any, price: any) {
        var data = new FormData()
        data.append('currency', currency)
        data.append('price', price.toString())
        data.append('state', 'sale')
        let updateURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(updateURL, {method: 'PUT', body: data})
            .then(res => res.json())
            .then( res => {

            })
    }
    function addNewSaleDB(currency:any, price:any, creator:any) {
        var data = new FormData()
        data.append('nftId', props.nftId)
        data.append('currency', currency)
        data.append('salePrice', price)
        data.append('startTime', startDate.toString())
        data.append('endTime', endDate.toString())
        data.append('creator', creator)
        let created = new Date()
        data.append('created', created.toString())
        let apiURL = process.env.REACT_APP_API_BASE_URL + 'sales/'
        fetch(apiURL, {method: 'POST', body: data})
            .then(res => res.json())
            .then(res => {
            })
    }
    async function sellNft(event: any) {
        event.preventDefault()
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            tx = await starSeasNft.methods.approve(marketContractAddr, props.nftId).send({from: userWalletAddr[0]})
            let decimal
            if(currency === 'eth') {
                decimal = 18
                console.log('eth price: ', web3.utils.toWei(price, 'ether'))
                // sellingNFT(uint256 tokenId_, Currency currency_,  uint256 salePrice_, uint256 startTime_, uint256 endTime_)
                tx = await marketContract.methods
                    .sellingNFT(props.nftId, 0, web3.utils.toWei(price, 'ether'), Math.round(startDate.getTime()/1000), Math.round(endDate.getTime()/1000))
                    .send({from: userWalletAddr[0]})
            }
            else {
                decimal = 9
                console.log('sge price: ', web3.utils.toWei(price, 'ether'))
                // sellingNFT(uint256 tokenId_, Currency currency_,  uint256 salePrice_, uint256 startTime_, uint256 endTime_)
                tx = await marketContract.methods.sellingNFT(props.nftId, 1, web3.utils.toWei(price, 'ether'), Math.round(startDate.getTime()/1000), Math.round(endDate.getTime()/1000)).send({from: userWalletAddr[0]})
            }
            setTxConfirm(true)
            setTxHash(tx.transactionHash)
            setSellOnDB(currency, price)
            addNewSaleDB(currency, price, userWalletAddr[0])
        } catch (error: any) {
            setTxFailed(error.message)
        }
    }
    return(
        <>
            {
                txConfirm ? 
                    <p style={{color:"white", fontSize:"20px"}}>Your NFT is successfully minted. You can confirm <a href={process.env.REACT_APP_RINKEYBY_TX_EXPLORER+txHash}>here</a></p>
                :
                    ""
            }
            {
                txFailed !== '' ?
                    <>
                        <p style={{color:"white", fontSize:"20px"}}>Transaction is failed</p>
                        <p style={{color:"white", fontSize:"20px"}}>Reason: {txFailed}</p>
                    </>
                :
                ""
            }
            <form onSubmit={sellNft}>
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
                    <button className="sign__btn">Sell NFT</button>
                </div>
            </form>
        </>
        
    )
}

export default CreateSellNFT