import Web3 from 'web3'
declare const window: any;
let web3: any
if(window.web3 === undefined) {
    web3 = undefined
} else {
    web3 = new Web3(window.web3.currentProvider)
}

export default web3