import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'

const auctionJSON = require('../../../../../../contracts/Auction.json')
const auctionContractAddr = process.env.REACT_APP_AUCTION_ADDR

function CancelAuction(props:any) {

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const auctionContract = new web3.eth.Contract(auctionJSON, auctionContractAddr)
    let tx

    function setSellOnDB(currency:any, price: any) {
        var data = new FormData()
        data.append('currency', currency)
        data.append('price', price.toString())
        data.append('state', 'none')
        let updateURL = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        fetch(updateURL, {method: 'PUT', body: data})
            .then(res => res.json())
            .then( res => {

            })
    }
    async function cancel(event: any) {
        event.preventDefault()
        console.log('click cancel button')
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            tx = await auctionContract.methods
                .CancelAuction(props.nftId)
                .send({from: userWalletAddr[0]})
            setTxConfirm(true)
            setTxHash(tx.transactionHash)
            setSellOnDB('eth', 0)
        } catch (error: any) {
            setTxFailed(error.message)
        }
    }
    return(
        <>
            <button style={{color:"white"}} onClick={cancel}>Cancel Auction</button>
        </>
    )
}

export default CancelAuction