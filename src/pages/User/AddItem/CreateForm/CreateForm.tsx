import { useState } from 'react'
import ItemDetails from './ItemDetails'
import Others from './Others'
import SaleOptions from './SaleOptions'
import UploadFile from './UploadFile'
import web3 from '../../../../web3'
const nftJson = require('../../../../contracts/StarSeasNFT.json')
const nftContractAddress = process.env.REACT_APP_STARSEASNFT_ADDR
function CreateForm() {
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [cntCopies, setCntCopies] = useState(1)
    const [category, setCategory] = useState('')
    const [royalty, setRoyalty] = useState(5)
    const [saleOption, setSaleOption] = useState("0")

    const [txConfirm, setTxConfirm] = useState(false)
    const [txHash, setTxHash] = useState('')
    const [txFailed, setTxFailed] = useState('')

    const nftContract = new web3.eth.Contract(nftJson, nftContractAddress)
    let userWalletAddr:any
    function resetForm() {
        setImgFile(null)
        setName('')
        setDesc('')
        setCntCopies(1)
        setCategory('')
        setRoyalty(5)
        setSaleOption('0')
    }
    async function mint(ipfsHash: any) {
        try {
            userWalletAddr = await web3.eth.getAccounts()
            let tx = await nftContract.methods.mint(ipfsHash).send({from: userWalletAddr[0]})
            create(ipfsHash, tx.events.Transfer.returnValues.tokenId)
            setTxConfirm(true)
            setTxHash(tx.transactionHash)
            resetForm()
        } catch (err:any) {
            setTxFailed(err.message)
        }
    }
    async function create(hash:any, tokenId:any) {
        var data = new FormData()
        userWalletAddr = await web3.eth.getAccounts()
        if( imgFile !== null) {
            data.append('file', imgFile)
        }
        data.append('name', name)
        data.append('description', desc)
        data.append('cntCopies', cntCopies.toString())
        data.append('category', category)
        data.append('royalty', royalty.toString())
        data.append('saleOption', saleOption)
        data.append('creatorAddr', userWalletAddr[0])
        data.append('ownerAddr', userWalletAddr[0])
        
        data.append('hash', hash)
        data.append('nft_id', tokenId)
        
        let fetchUrl = process.env.REACT_APP_API_BASE_URL + 'nfts'
        fetch(fetchUrl,
            {
                method: 'POST',
                body: data
            }
        )
            .then( res => res.json() )
            .then( res => {
            })
    }
    async function handleSubmit(event: any) {
        event.preventDefault()

        var data = new FormData()
        data.append('name', name)
        if( imgFile !== null) {
            data.append('file', imgFile)
            let ipfsURL = process.env.REACT_APP_API_BASE_URL + 'ipfs'
            fetch(ipfsURL, {method: 'POST', body: data})
                .then(res => res.json())
                .then( res => {
                    mint(res)
                })
        }
    }
    return(
        <div className="col-12 col-xl-9">
            <div className="main__title main__title--create">
                <h2>Create New NFT</h2>
            </div>
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
            {/* <!-- create form --> */}
            <form onSubmit={handleSubmit} className="sign__form sign__form--create">
                <div className="row">
                    <UploadFile uploadImg = {setImgFile}/>
                    <ItemDetails setName = {setName} setDesc={setDesc}/>
                    <Others setCntCopies={setCntCopies} setCategory={setCategory} setRoyalty={setRoyalty}/>
                    <SaleOptions setSaleOption={setSaleOption}/>
                    <div className="col-12 col-xl-3">
                        <button className="sign__btn">Create item</button>
                    </div>
                </div>
            </form>
            {/* <!-- end create form --> */}
            

        </div>
    )
}

export default CreateForm
