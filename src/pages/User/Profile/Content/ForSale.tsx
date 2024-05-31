import Card from './Card'
function ForSale(props: any) {
    return(
        <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
            <div className="row row--grid">
                {
                    props.nfts.length !== 0 ?
                    props.nfts.map((item:any) => (
                        <Card item = {item} forSale={true}/>
                    ))
                    :
                    ""
                }
            </div>

            <div className="row row--grid">
                <div className="col-12">
                    <button className="main__load" type="button">Load more</button>
                </div>
            </div>

        </div>
    )
}

export default ForSale