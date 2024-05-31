function SaleOptions(props:any) {
    function setSaleOption(e:any) {
        props.setSaleOption(e.target.id)
    }
    return (
        <div className="col-12">
            <div className="sign__group sign__group--row">
                <ul className="sign__radio sign__radio--single">
                    <li>
                        <input id="0" type="radio" name="type" checked={true} onChange={setSaleOption}/>
                        <label htmlFor="type1">Published for sale</label>
                    </li>
                    <li>
                        <input id="1" type="radio" name="type" onChange={setSaleOption}/>
                        <label htmlFor="type2">Save & publish later</label>
                    </li>
                    <li>
                        <input id="2" type="radio" name="type" onChange={setSaleOption}/>
                        <label htmlFor="type3">Unlock sale</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SaleOptions