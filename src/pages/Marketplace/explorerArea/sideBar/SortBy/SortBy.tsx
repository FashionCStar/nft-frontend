import { useStore, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
function SortBy() {
    const [selected, setSelected] = useState('')
    let temp =''
    const store = useStore()
    let storeState = useSelector((state: any) => state.search.sort)
    function changeHandle(e:any) {
        if(e.target.value === 'none'){
            temp = ''
        } else {
            temp = e.target.value
        }
        store.dispatch({
            type: "changeState",
            search: {
                search: store.getState().search.search,
                sort: temp,
                category: store.getState().search.category,
                price: store.getState().search.price,
            }
        })
    }
    return(
        <div className="filter__group">
            <label htmlFor="sort" className="filter__label">Sort by:</label>

            <div className="filter__select-wrap">
                <select name="sort" id="sort" className="filter__select" onChange={changeHandle}>
                    <option value="none">Select Sort Option</option>
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default SortBy