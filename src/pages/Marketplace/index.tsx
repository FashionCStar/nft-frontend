import Breadcrumb from '../Breadcrumb';
import ExplorerArea from './explorerArea/ExplorerArea';

function Marketplace(props: any) {
	return (
		<main className="main">
			{/* breadcrumb */}
			<Breadcrumb title={"Marketplace"} subTitle={"All Items"}/>
			{/* end breadcrumb */}
			{/* explore area */}
			<ExplorerArea />
			{/* explore area end */}
		</main>
	);
}

export default Marketplace;