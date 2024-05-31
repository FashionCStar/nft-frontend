import * as FaIcons from 'react-icons/fa'
function NavSearchForm() {
    return(
        <form action="#" className="header__search">
            <input type="text" placeholder="Search Items, Creators, and More... "/>
            <button type="button"><FaIcons.FaSearch/></button>
            <button type="button" className="close"><FaIcons.FaTimes/></button>
        </form>
    )
}

export default NavSearchForm