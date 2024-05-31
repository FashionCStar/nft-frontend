import BidsTab from "./TabContents/BidsTab"
import DetailsTab from "./TabContents/DetailsTab"
import HistoryTab from "./TabContents/HistoryTab"

function TabContent(props:any) {
    return(
        <>
            <div className="tab-content">
                <DetailsTab desc={props.desc} created={props.created}/>
                <BidsTab/>
                <HistoryTab/>
            </div>
        </>
    )
}

export default TabContent