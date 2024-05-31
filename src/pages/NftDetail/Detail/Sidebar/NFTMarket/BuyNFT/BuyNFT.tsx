import {useState, useEffect} from 'react'
import web3 from '../../../../../../web3'

const marketJSON = require('../../../../../../contracts/Market.json')
const marketContractAddr = process.env.REACT_APP_MARKET_ADDR

const starSeasNftJSON = require('../../../../../../contracts/StarSeasNFT.json')
const starSeasNftContractAddr = process.env.REACT_APP_STARSEASNFT_ADDR

const SGEJSON = require('../../../../../../contracts/StarSeasNFT.json')
const SGEContractAddr = process.env.REACT_APP_SGE_ADDR

function BuyNFT(props:any) {
    const [balance, setBalance] = useState(0)
    const [currency, setCurrency] = useState(0)
    const [salePrice, setSalePrice] = useState(0)

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const marketContract = new web3.eth.Contract(marketJSON, marketContractAddr)
    const starSeasNft = new web3.eth.Contract(starSeasNftJSON, starSeasNftContractAddr)
    const sgeToken = new web3.eth.Contract(SGEJSON, SGEContractAddr)
    let tx

    function updateDB(buyer:any) {
        // nft Table, sale Table
        let nftAPI = process.env.REACT_APP_API_BASE_URL + 'nfts/' + props.nftId
        let nftData = new FormData()
        nftData.append('ownerAddr', buyer)
        nftData.append('state', 'none')
        fetch(nftAPI, {method: 'PUT', body: nftData})

        let saleAPI = process.env.REACT_APP_API_BASE_URL + 'sale/' + props.nftId
        fetch(saleAPI, {method:'DELETE'})
    }
    async function buying() {
        try {
            let userWalletAddr = await web3.eth.getAccounts()
            tx = await marketContract.methods.offers(props.nftId).call()
            var feePlusValue = Number(tx.salePrice) * Number(process.env.REACT_APP_NFT_MARKET_FEE) / 100
            console.log(feePlusValue.toString())
            console.log(tx.salePrice)
            console.log(tx.currency, typeof(tx.currency))
            if(tx.currency === '0') { // eth
                tx = await marketContract.methods.buyingNFT(props.nftId).send({from: userWalletAddr[0], value: feePlusValue.toString()})
            } else { // sge
                await sgeToken.methods.approve(marketContractAddr, feePlusValue.toString()).send({from: userWalletAddr[0]})
                tx = await marketContract.methods.buyingNFT(props.nftId).send({from: userWalletAddr[0]})
            }

            setTxConfirm(true)
            setTxHash(tx.transactionHash)

            updateDB(userWalletAddr[0])
        } catch (error:any) {
            setTxFailed(error.message)
        }
    }
    return(
        <>
            <button style={{color:"white"}} onClick={buying}>Buy NFT</button>
        </>
    )
}

export default BuyNFT