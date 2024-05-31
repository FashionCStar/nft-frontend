import { useStore } from 'react-redux'
import Search from './Search/Search'
import SortBy from './SortBy/SortBy'
import Category from './Category/Category'
import Price from './Price/Price'
import SelectedFilters from './SelectedFilters/SelectedFilters'
function SideBar() {
    const store = useStore()
    function removeFilters() {
        store.dispatch({
            type:"",
            search:{}
        })
    }
    return(
        <div className="col-12 col-xl-3">
            <div className="filter-wrap">
                <button className="filter-wrap__btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">Open filter</button>

                <div className="collapse filter-wrap__content" id="collapseFilter">
                    {/* filter */}
                    <div className="filter">
                        <h4 className="filter__title">Filters <button type="button" onClick={removeFilters}>Clear all</button></h4>
                        {/* <SelectedFilters/> */}
                        <Search/>

                        <SortBy/>
                        
                        <Category/>

                        <Price/>

                        <div className="filter__group">
                            <button className="filter__btn" type="button">APPLY FILTER</button>
                        </div>
                    </div>
                    {/* end filter */}
                </div>
            </div>
        </div>
    )
}

export default SideBar