import CategoryBtn from './CategoryBtn'
function Category(props:any) {
    const categoryList = ['Clusters', 'Creatives', 'Galaxies', 'Lunar', 'Nebulae', 'Sci-Fi', 'Solar']
    return(
        <div className="filter__group">
            <label className="filter__label">Category:</label>
            <ul className="filter__checkboxes">
                {
                    categoryList.map((item:any) => (
                        <CategoryBtn category={item}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category