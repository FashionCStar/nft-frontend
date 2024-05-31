import * as FaIcons from 'react-icons/fa'
import {useState, useEffect} from 'react'
function DetailsTab(props:any) {
    const [formatedDate, setFormatedDate] = useState('')
    function format(str:any) {
        var dateObj = new Date(str);
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        let newdate = year + " - " + month + " - " + day;
        setFormatedDate(newdate)
    }
    useEffect(() => {
        if(props.created !== undefined) {
            format(props.created)
        }
    })
    return(
        <div className="tab-pane fade show active" id="tab-33" role="tabpanel">
            <div className="asset__desc--tab">
                <p>{props.desc}</p>
                <div className="asset__desc--content">
                    {/* <div className="asset__desc-list">
                        <span> <FaIcons.FaUser/>Item Artist </span>
                        <span> Marilyn Root </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaJournalWhills/>Item Size </span>
                        <span> 2200 x 2500 </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaLayerGroup/>Formats </span>
                        <span> MP4, JPEG </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaDownload/>Downloadable file </span>
                        <span> Yes </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaBook/>Edition </span>
                        <span> 1/1 </span>
                    </div> */}
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaClock/>Created </span>
                        <span>{formatedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsTab