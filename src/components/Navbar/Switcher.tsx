import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Marketplace from '../../pages/Marketplace'
import NftDetail from '../../pages/NftDetail/NftDetail'
import LiveAuction from '../../pages/LiveAuction/index'

import Activity from '../../pages/Activity/Activity'

import About from '../../pages/ResourceCenter/About/About'
import Faq from '../../pages/ResourceCenter/Faq/Faq'
import SgeToken from '../../pages/ResourceCenter/SgeToken/SgeToken'
import Contract from '../../pages/ResourceCenter/Contact/Contact'
import PrivacyPolicy from '../../pages/ResourceCenter/PrivacyPolicy/PrivacyPolicy'

import Profile from '../../pages/User/Profile/Profile'
import AddItem from '../../pages/User/AddItem/AddItem'
function Switcher() {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/assets">
                <Marketplace category={'market'}/>
            </Route>
            <Route path="/assets/:nftId" exact component={NftDetail}>
            </Route>
            <Route path='/liveauction' exact>
                <LiveAuction />
            </Route>

            <Route path='/activity' exact>
                <Activity />
            </Route>

            <Route path='/about' exact>
                <About />
            </Route>
            <Route path='/faq' exact>
                <Faq />
            </Route>
            <Route path='/sge-token' exact>
                <SgeToken />
            </Route>
            <Route path='/contact' exact>
                <Contract />
            </Route>
            <Route path='/privacy-policy' exact>
                <PrivacyPolicy />
            </Route>
                    
            <Route path='/profile' exact>
                <Profile/>
            </Route>
            <Route path='/addItem' exact>
                <AddItem/>
            </Route>        

            <Route path='/signup' exact>
                <Profile signup={true}/>
            </Route>        
        </Switch>
    )
}

export default Switcher