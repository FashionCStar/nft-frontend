import {useState, useEffect} from 'react'
import Card from './Card'
import ReactPaginate from 'react-paginate';
function Items({currentItems}:any) {
    return(
        <div className="row row--grid">
            {
                currentItems &&
                currentItems.map((item:any) => (
                    <Card 
                        nftId={item.nft_id}
                        nftImg={item.img}
                        nftName={item.name} 
                        ownerAddr={item.ownerAddr}
                        currency={item.currency}
                        price={item.price}
                        state = {item.state}
                        favUsers = {item.favUsers}
                    />
                ))
            }
        </div>
    )
}
function Content() {
    const itemsPerPage = 3
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [allNfts, setAllNfts] = useState<any>([])
    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % allNfts.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    function getAllNfts() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts'
        fetch(fetchURL)
            .then(res => res.json())
            .then(res=>{
                setAllNfts([...res])
            })
    }
    useEffect(() => {
        getAllNfts()
    }, [])
    useEffect(() => {
        if(allNfts.length > 0) {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(allNfts.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(allNfts.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, allNfts])
    return(
        <div className="col-12 col-xl-9">
            <Items currentItems={currentItems} />
            <ReactPaginate
                previousLabel={'\u2190'}
                nextLabel={'\u2192'}
                pageCount={pageCount}
                onPageChange={handlePageClick}

                containerClassName={'pagination'}
                activeClassName={'active'}
                className='paginator__list'
            />
        </div>
    )
}

export default Content