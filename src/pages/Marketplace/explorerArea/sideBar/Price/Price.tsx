import { useStore, useSelector } from 'react-redux'
function Price() {
    let temp = {"min":0, "max": Number.MAX_SAFE_INTEGER}
    const store = useStore()
    function handleChange(e:any) {
        if(e.target.id === 'min') {
            temp.min = Number(e.target.value)
        }
        if(e.target.id === 'max') {
            temp.max = Number(e.target.value)
        }
        store.dispatch({
            type: "changeState",
            search: {
                search: store.getState().search.search,
                sort: store.getState().search.sort,
                category: store.getState().search.category,
                price: temp,
            }
        })
    }
    return(
        <div className="filter__group">
            <label className="filter__label">Price Range (ETH):</label>
            <div className="row">
            <div className="col-6">
                <input type="text" className="filter__input" placeholder="Min" id="min" onChange={handleChange}/>
            </div>
            <div className="col-6">
                <input type="text" className="filter__input" placeholder="Max" id="max" onChange={handleChange}/>
            </div>
            </div>
        </div>
    )
}

export default Price