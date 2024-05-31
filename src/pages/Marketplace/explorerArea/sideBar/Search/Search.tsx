import { useStore, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
function Search() {
    const [val, setVal] = useState('')
    const store = useStore()
    let storeState = useSelector((state: any) => state.search.search)
    function changeHandle(e:any) {
        setVal(e.target.value)
        store.dispatch({
            type: "changeState",
            search: {
                search: e.target.value,
                sort: store.getState().search.sort,
                category: store.getState().search.category,
                price: store.getState().search.price,
            }
        })
    }
    useEffect(() => {
        setVal(storeState)
    }, [storeState])
    return(
        <div className="filter__group filter__search">
            <label className="filter__label">Search:</label>
            <input type="text" className="filter__input" placeholder="Keyword" onChange={changeHandle} value={val}/>
            <button type="submit"><FaIcons.FaSearch/></button>
        </div>
    )
}

export default Search