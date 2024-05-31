import Breadcrumb from "../Breadcrumb"
import Filter from "./Filter/Filter"
import ExploreArea from "./ExploreArea/ExploreArea"
function LiveAuction() {
    return(
        // <!-- main content -->
        <main className="main">
    
            {/* <!-- breadcrumb -->  style="background-image: url(assets/img/bg/page-title.jpg);"*/}
            <Breadcrumb title={"Marketplace"} subTitle={"Live Auctions"}/>
            {/* <!-- end breadcrumb --> */}
    
    
            {/* <!-- filter --> */}
            <Filter />
            {/* <!-- end filter --> */}
    
            {/* <!-- explore-area --> */}
            <ExploreArea />
            {/* <!-- end explore area --> */}
    
        </main>
        // <!-- end main content -->
    )
}

export default LiveAuction