import logo from '../../assets/starseas-final-001.png'
function NavLogo() {
    return(
        <div className="header__logo">
            <a href="/">
                <img src={logo} alt=""/>
            </a>
        </div>
    )
}

export default NavLogo