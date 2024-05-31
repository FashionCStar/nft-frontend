import Hero from "./hero/Hero";
import FeatureArea from "./featureArea/FeatureArea";
import LiveAuction from "./liveAuction/LiveAuction";
import TopCreator from "./topCreators/TopCreators";
import Explorer from "./explorer/Explorer";
import CallAction from "./callAction/CallAction";
function Home() {
    return (
        <main className = "main">

            {/* home hero */}
            <Hero/>
            {/* end home hero */}
    
            {/* feature-area */}
            <FeatureArea />
            {/* end feature-area */}      

            {/* live auctions */}
            <LiveAuction />
            {/* end live auctions */}

            {/* top sellers */}
            <TopCreator />
    		{/* end top sellers */}

    		{/* explore */}
            <Explorer/>
    		{/* end explore */}

    		{/* call-to-action */}
            <CallAction/>
    		{/* call-to-action end */}
	</main>
    )
}

export default Home;