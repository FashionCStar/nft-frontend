import { getNameOfJSDocTypedef } from 'typescript'
import Card from './Card'
function Unlisted(props:any) {
    return(
        <div className="tab-pane fade" id="tab-2" role="tabpanel">
            <div className="row row--grid">
                {
                    props.nfts.length !== 0 ?
                        props.nfts.map((item:any) => (
                            <Card forSale = {false} item={item}/>
                        ))
                    :
                    ""
                }
            </div>

            {/* <!-- paginator --> */}
            <div className="row row--grid">
                <div className="col-12">
                    <div className="paginator">
                        <ul className="paginator__list">
                            <li>
                                <a href="#"><i className="far fa-arrow-left"></i></a>
                            </li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li>
                                <a href="#"><i className="far fa-arrow-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- end paginator --> */}
        </div>
    )
}

export default Unlisted