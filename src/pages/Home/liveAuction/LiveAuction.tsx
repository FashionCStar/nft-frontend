import {useState, useEffect} from 'react'

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import LiveAuctionItem from './LiveAuctionItem'

import * as FaIcons from 'react-icons/fa'
function LiveAuction() {
    const [auctions, setAuctions] = useState<any>([])
    useEffect(() => {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'auctions/'
        fetch(fetchURL)
            .then(res=>res.json())
            .then(res=> {
                setAuctions([...res])
            })
    },[])
    return (
        <section className = "live-auction">
            <div className = "container">
                <div className = "row row--grid">
                    {/* title */}
                    <div className = "col-12">
                        <div className = "main__title">
                            <h2><a href="live-auction.html">Live Auctions</a></h2>
                        </div>
                    </div>
                    {/* end title */}

                    {/* carousel */}
                    <div className = "col-12">
                        <div className = "main__carousel-wrap">
                        {
                            auctions.length === 0 ?
                                ""
                            :
                                <OwlCarousel items={4}  
                                    className="owl-theme"  
                                    margin={8} >
                                    {
                                        auctions.map((auction:any) => (
                                            <LiveAuctionItem 
                                                nftId={auction.nftId} 
                                                currency={auction.currency} 
                                                highestBid = {auction.highestBid}
                                                creator = {auction.creator}
                                                endTime = {auction.endTime}
                                                // key = {auction.nftId}
                                            />
                                        ))
                                    }
                                </OwlCarousel> 
                        }
                        </div>
                    </div>
                    {/* end carousel */}
                </div>
            </div>
        </section>
    )
}

export default LiveAuction