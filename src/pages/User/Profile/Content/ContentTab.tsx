function ContentTab(props:any) {
    return(
            <div className="profile">
            {
                props.signup?
                    <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">
                                <i className="far fa-list-ul"></i> Sign Up
                            </a>
                        </li>    
                    </ul>
                :
                    <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#tab-1" role="tab"
                                aria-controls="tab-1" aria-selected="true"><i className="far fa-box"></i> For Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2"
                                aria-selected="false"><i className="far fa-layer-group"></i> Unlisted</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3"
                                aria-selected="false"><i className="far fa-layer-group"></i> Activity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4"
                                aria-selected="false"><i className="far fa-list-ul"></i> Settings</a>
                        </li>
                    </ul>
            }
            </div>
    )
}

export default ContentTab