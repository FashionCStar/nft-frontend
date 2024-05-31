import { BrowserRouter as Router} from 'react-router-dom'

import Footer from '../Footer'

import NavLogo from './NavLogo'
import NavSearchForm from './NavSearchForm'
import NavMenu from './NavMenu'
import NavUser from './NavUser'

import NavMobileBtn from './NavMobileBtn'

import Switcher from './Switcher'

function Navbar(props: any) {
    return (
        <Router>
            <header className="header">
                <div className="header__content">
                    <NavLogo/>

                    <NavSearchForm/>

                    <NavMenu/>

                    <NavUser/>

                    <NavMobileBtn/>
                </div>
            </header>       
            <Switcher/>
            <Footer />
        </Router>
        
    )
}

export default Navbar;
