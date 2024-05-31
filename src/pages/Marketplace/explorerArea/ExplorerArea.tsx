import Content from "./content/Content"
import SideBar from "./sideBar/SideBar"
function ExplorerArea() {
    return(
        <div className="explore-area pt-70">
            <div className="container">
                <div className="row">
                    {/* sidebar */}
                    <SideBar />
                    {/* end sidebar */}


                    {/* content */}
                    <Content />
                    {/* end content */}
                
                </div>
            </div>
        </div>
    )
}
export default ExplorerArea