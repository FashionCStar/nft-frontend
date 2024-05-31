import Breadcrumb from '../Breadcrumb'
import ExplorerMore from './ExplorerMore/ExplorerMore'
import Detail from './Detail/Detail'
function NftDetail(props: any) {
    const nftId = props.match.params.nftId
    return (
        <main className="main">
            <Breadcrumb title={"Item Single"} subTitle={"Item Single"}/>
            <div className="item-single pt-70">
                <div className="container">
                    <Detail nftId = {nftId}/>
                    <ExplorerMore />
                </div>
            </div>
        </main>
    )
}

export default NftDetail