import Breadcrumb from '../../Breadcrumb'
function Faq() {
    return(
        // <!-- main content -->
        <main className="main">
    
            {/* <!-- breadcrumb --> */}
            <Breadcrumb title={"Frequently Asked Questions"} subTitle={"F&Q"}/>
            {/* <!-- end breadcrumb --> */}
    
    
            {/* <!-- faq area --> */}
            <div className="faq-area faq-area2 pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="accordion" id="accordionfaq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            <strong>01. How do you start using Starseas?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            To begin using Starseas, you will need to download and setup a crypto wallet. We reccomend using the metamask wallet on a desktop browser to begin. You will then need to purchase ETH from a centralized exchange and send it your metamask wallet. From here you will go to Uniswap and purchase 1 billion SGE tokens for full access to the Starseas platform. Be sure to have extra ETH to cover gas fees and minting fees once you have set up your Starseas profile. 
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            <strong>02. How much is the minting fee?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            The cost to mint NFTs on Starseas is currently 0.01 ETH. This does not include the gas fee of the Ethereum network, so be sure to have extra so you can cover the full cost.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            <strong>03. What are royalties?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            When you mint a NFT, you will be asked what percent royalties to include. For example, if you chose 5%, you will receive 5% from every future sale of the item. 
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq4">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                          <strong>04. When and how do you get paid?</strong>
                                      </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faq5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        <strong>05. What is the NFTs reward system?</strong>
                                    </button>
                                </h2>
                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#accordionfaq">
                                    <div className="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- faq area end --> */}
    
        </main>
        // <!-- end main content -->
    )
}

export default Faq