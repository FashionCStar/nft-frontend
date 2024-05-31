import * as FaIcons from 'react-icons/fa'
function Filter() {
    return (
        <div className="filter--area pt-70">
            <div className="container">
                <div className="row row--grid">
                    <div className="main__filter">
                        <form action="#" className="main__filter-search">
                            <input type="text" placeholder="Search..."/>
                            <button type="button"><FaIcons.FaSearch /></button>
                        </form>
                        <div className="main__filter-wrap">
                            <select className="main__select" name="status">
                                <option value="auction">On Auction</option>
                                <option value="now">Buy Now</option>
                                <option value="latest">Latest</option>
                                <option value="offers">Has Offers</option>
                            </select>

                            <select className="main__select" name="category">
                                <option value="All genres">All Categories</option>
                                <option value="1">Clusters</option>
                                <option value="2">Creatives</option>
                                <option value="3">Galaxies</option>
                                <option value="4">Lunar</option>
                                <option value="5">Nebulae</option>
                                <option value="6">Sci-Fi</option>
                                <option value="7">Solar</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>           
    )
}

export default Filter