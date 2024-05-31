import { useState, useEffect } from 'react';
import web3 from '../../../../../../web3'

const auctionJSON = require('../../../../../../contracts/Auction.json')
const auctionContractAddr = process.env.REACT_APP_AUCTION_ADDR

function WithdrawBid(props:any) {
    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const auctionContract = new web3.eth.Contract(auctionJSON, auctionContractAddr)
    let tx

    async function withdraw() {
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            tx = await auctionContract.methods
                .WithdrawBid(props.nftId)
                .send({from: userWalletAddr[0]})
            setTxConfirm(true)
            setTxHash(tx.transactionHash)
        } catch (error: any) {
            setTxFailed(error.message)
        }
    }

    return(
        <>
            <button style={{color:"white"}} onClick={withdraw}>Withdraw Bid</button>
        </>
    )
}

export default WithdrawBid