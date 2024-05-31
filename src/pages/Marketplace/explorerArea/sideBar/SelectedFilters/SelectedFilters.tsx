import {useSelector, useStore} from 'react-redux'
import SelectedFiltersDetail from './SelectedFiltersDetail'
function SelectedFilters() {
    const searchState = useSelector((state: any) => state.search)
    const store = useStore()
    const priceName = ["Min", "Max"]
    function removeAll() {
        store.dispatch({
            type:"",
            search:{}
        })
    }
    return (
        <div className="filterBar">
            {searchState.price.map((item:any, idx:any) => (
                <SelectedFiltersDetail name={"price"} val={item} btnName={`${priceName[parseInt(idx)]} : ${item}`}/>
            ))}
            {searchState.category.map((item:any) => (
                <SelectedFiltersDetail name={"category"} val={item} btnName={item}/>
            ))}
            
        </div>
    )
}

export default SelectedFilters;