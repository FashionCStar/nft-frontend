import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'
const marketJSON = require('../../../../../../contracts/Market.json')
const marketContractAddr = process.env.REACT_APP_MARKET_ADDR

function CancelSellNFT(props:any) {

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const marketContract = new web3.eth.Contract(marketJSON, marketContractAddr)
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
            tx = await marketContract.methods
                .cancelSell(props.nftId)
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
            <button style={{color:"white"}} onClick={cancel}>Cancel NFT Sale</button>
        </>
    )
}

export default CancelSellNFT