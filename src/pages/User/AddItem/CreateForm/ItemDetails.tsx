function ItemDetails(props:any) {
    function setName(e:any) {
        props.setName(e.target.value)
    }
    function setDesc(e:any) {
        props.setDesc(e.target.value)
    }
    return(
        <>
            <div className="col-12">
                <h4 className="sign__title">Item Details</h4>
            </div>

            <div className="col-12">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="itemname">Item Name</label>
                    <input id="itemname" type="text" name="itemname" className="sign__input" placeholder="e. g. 'Fantacy Flower'" onChange={setName}/>
                </div>
            </div>
            <div className="col-12">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="description">Description</label>
                    <textarea id="description" name="description" className="sign__textarea" placeholder="e. g. 'After purchased you will get downloadable zip file'" onChange={setDesc}></textarea>
                </div>
            </div>
        </>
    )
}

export default ItemDetails