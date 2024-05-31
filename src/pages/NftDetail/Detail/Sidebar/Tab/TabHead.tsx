function TabHead() {
    return(
        <ul className="nav nav-tabs asset__tabs" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab-33" role="tab"
                    aria-controls="tab-33" aria-selected="false">Details</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-22" role="tab" aria-controls="tab-22"
                    aria-selected="false">Bids</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11"
                    aria-selected="true">History</a>
            </li>
        </ul>
    )
}

export default TabHead