function Others(props:any) {
    function setCntCopies(e:any) {
        props.setCntCopies(e.target.value)
    }
    function setCategory(e:any) {
        props.setCategory(e.target.value)
    }
    function setRoyalty(e:any) {
        props.setRoyalty(e.target.value)
    }
    return (
        <>
            <div className="col-12 col-md-4">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="number_of_copies">Number of Copies</label>
                    <select id="number_of_copies" name="number_of_copies" className="sign__select" onChange={setCntCopies}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="category">Category</label>
                    <select id="category" name="category" className="sign__select" onChange={setCategory}>
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

            <div className="col-12 col-md-4">
                <div className="sign__group">
                    <label className="sign__label" htmlFor="propertie">Royalty Percentage</label>
                    <input id="propertie" type="text" name="propertie" className="sign__input" placeholder="5%" onChange={setRoyalty}/>
                </div>
            </div>
        </>
    )
}

export default Others