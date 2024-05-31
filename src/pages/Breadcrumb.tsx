import * as FaIcons from 'react-icons/fa'
import pageTitle from '../assets/img/bg/page-title.jpg'
function Breadcrumb(props:any) {
    return(
        <div className="breadcrumb-area" style={{backgroundImage: `url(${pageTitle})`}}>
            <div className="container">
                <div className="breadcrumb-wrapper">
                    <h1>{props.title}</h1>
                    <div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><a href="#">Home</a></li>
                            <FaIcons.FaAngleDoubleRight />
                            <li className="breadcrumb__item breadcrumb__item--active">{props.subTitle}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb