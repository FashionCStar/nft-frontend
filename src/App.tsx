import './App.module.css'
import Navbar from './components/Navbar'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import web3 from './web3' // root/src/web3.tsx


function getLibrary(provider:any ) {
  return new Web3(provider)
}

function App() {
  return ( 
    <Web3ReactProvider getLibrary={getLibrary}>
      {
        web3 === undefined ?
          <Navbar err={'metamaskUninstalled'} />
        :
          <Navbar err={'none'} />
      }
    </Web3ReactProvider>
  );
}

export default App;
