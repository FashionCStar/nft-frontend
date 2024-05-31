import { useSelector, useStore } from 'react-redux'
import * as FaIcons from 'react-icons/fa'
function SelectedFiltersDetail(props:any) {
    const searchState = useSelector((state: any) => state.search)
    const store = useStore()
    
    function handle(e:any) {
        let temp: any[] = []
        switch (e.target.name) {
            case "price":
                searchState.price.splice(searchState.price.indexOf(e.target.id), 1)
                temp = []
                searchState.price.map((item:any) => {
                    temp.push(item)
                })
                store.dispatch({
                    type: "changeState",
                    search: {
                        status: store.getState().search.status,
                        // price: searchState.price,
                        price:temp,
                        collects: store.getState().search.collects,
                        category: store.getState().search.category
                    }
                })
                break;
            case "category":
                searchState.category.splice(searchState.category.indexOf(e.target.id), 1)
                temp = []
                searchState.category.map((item: any) => {
                    temp.push(item)
                })
                store.dispatch({
                    type: "changeState",
                    search: {
                        status: store.getState().search.status,
                        price: store.getState().search.price,
                        collects: store.getState().search.collects,
                        category: temp
                    }
                })
                break;
            default:
                break;
        }
    }
    return(
        <button name={props.name} id={props.val} onClick={handle} className="filterBarItem" style={{color:'white'}}>
            {props.btnName}
        </button>
    )
}

export default SelectedFiltersDetail