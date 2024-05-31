import {Dropdown} from 'react-bootstrap'
function NavMenu() {
    return(
        <div className="header__menu">
            <ul className="header__nav">
                <li className="header__nav-item">
                    <a href="/" className="header__nav-link" >Home</a>
                </li>
                <li className="header__nav-item">
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className="header__nav-link">
                            Marketplace
                            {/* <FaIcons.FaAngleDown /> */}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="slideIn">
                            <Dropdown.Item href="/assets/">All Items</Dropdown.Item>
                            <Dropdown.Item href="/liveauction">Live Auctions</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>

                <li className="header__nav-item">
                    <a href="/activity" className="header__nav-link">Activity</a>
                </li>
                <li className="header__nav-item">
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className="header__nav-link">
                            Resource Center 
                            {/* <FaIcons.FaAngleDown /> */}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu slideIn">
                            <Dropdown.Item href="/about">About</Dropdown.Item>
                            <Dropdown.Item href="/faq">F&Q</Dropdown.Item>
                            <Dropdown.Item href="/sge-token">SGE Token</Dropdown.Item>
                            <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                            <Dropdown.Item href="/privacy-policy">Privacy Policy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>

            </ul>
        </div>
    )
}

export default NavMenu