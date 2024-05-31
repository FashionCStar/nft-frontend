import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'
function Detail(props:any) {
    // Nft Id : props.nftId
    return(
        <div className="row">
            <Content nftId = {props.nftId}/>
            <Sidebar nftId = {props.nftId}/>
        </div>
    )
}

export default Detail