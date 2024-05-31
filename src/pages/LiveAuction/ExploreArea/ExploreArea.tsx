import * as FaIcons from 'react-icons/fa'
function ExploreArea() {
    return(
        <div className="explore-area">
            <div className="container p-0">
                <div className="row row--grid">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card">
                            <a href="item.html" className="card__cover">
                                <img src="assets/img/items/8.jpg" alt=""/>
                            </a>
                            <h3 className="card__title"><a href="item.html">Awesome Color
                                    Drop</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/8.jpg" alt=""/>
                                <a href="author.html">@morgan28</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>9.21 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>6k</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        {/* <!-- carousel card --> */}
                        <div className="card">
                            <div className="card__cover card__cover--carousel owl-carousel">
                                <img src="assets/img/items/1.jpg" alt=""/>
                                <img src="assets/img/items/2.jpg" alt=""/>
                                <img src="assets/img/items/3.jpg" alt=""/>
                            </div>

                            <h3 className="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/7.jpg" alt=""/>
                                <a href="author.html">@nessler520</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>1.22 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>8k</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- end carousel card --> */}
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card">
                            <a href="item.html" className="card__cover">
                                <img src="assets/img/items/6.jpg" alt=""/>
                            </a>
                            <h3 className="card__title"><a href="item.html">Blue Planet Revolution</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/6.jpg" alt=""/>
                                <a href="author.html">@kimberly28</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>9.10 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>80k</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card">
                            <a href="item.html" className="card__cover">
                                <img src="assets/img/items/3.jpg" alt=""/>
                                <span className="card__time card__time--clock">
                                    <FaIcons.FaFire />
                                    <span className="card__clock card__clock--1"></span>
                                </span>
                            </a>
                            <h3 className="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/3.jpg" alt=""/>
                                <a href="author.html">@humphrey124</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>7.87 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>50k</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card">
                            <a href="item.html" className="card__cover">
                                <img src="assets/img/items/7.jpg" alt=""/>
                            </a>
                            <h3 className="card__title"><a href="item.html">Beautiful Leaf In The Wall</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/7.jpg" alt=""/>
                                <a href="author.html">@nessler520</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>1.22 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>8k</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card">
                            <a href="item.html" className="card__cover">
                                <img src="assets/img/items/4.jpg" alt=""/>
                            </a>
                            <h3 className="card__title"><a href="item.html">Let's Go The Navy Blue Galaxies</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/4.jpg" alt=""/>
                                <a href="author.html">@humphrey124</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>7.87 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>50k</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        {/* <!-- video card --> */}
                        <div className="card">
                            <a href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                                className="card__cover card__cover--video open-video">
                                <img src="assets/img/items/3.jpg" alt=""/>
                                <FaIcons.FaVideo />
                            </a>
                            <h3 className="card__title"><a href="item.html">3D Ethereum In Diamond</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/3.jpg" alt=""/>
                                <a href="author.html">@sheilagne22</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>5.39 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>10k</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- end video card --> */}
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card">
                            <a href="item.html" className="card__cover">
                                <img src="assets/img/items/2.jpg" alt=""/>
                            </a>
                            <h3 className="card__title"><a href="item.html">Fantacy Of Water Drop</a></h3>
                            <div className="card__author card__author--verified">
                                <img src="assets/img/avatars/2.jpg" alt=""/>
                                <a href="author.html">@kimberly120</a>
                            </div>
                            <div className="card__info">
                                <div className="card__price">
                                    <span>Sale price</span>
                                    <span>3.66 ETH</span>
                                </div>

                                <button className="card__likes" type="button">
                                    <FaIcons.FaHeart />
                                    <span>1k</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- paginator --> */}
                <div className="row row--grid">
                    <div className="col-12">
                        <div className="paginator">
                            <ul className="paginator__list">
                                <li>
                                    <a href="#"><FaIcons.FaArrowLeft /></a>
                                </li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li>
                                    <a href="#"><FaIcons.FaArrowRight /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end paginator --> */}
            </div>
        </div>
    )
}

export default ExploreArea