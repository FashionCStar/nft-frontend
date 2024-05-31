import TopCreatorItem from './TopCreatorItem'
import {useState, useEffect} from 'react'

function TopCreator() {
    const [creators, setCreators] = useState<any>([])
    useEffect(() => {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'top_creators' 
        fetch(fetchURL)
            .then(res => res.json())
            .then(res=>{
                setCreators([...res])
            })
    }, [])
    return (
        <section className = "top-seller">
            <div className = "container">
                <div className = "row row--grid">
                    {/* title */}
                    <div className = "col-12">
                        <div className = "main__title">
                            <h2>Top Creators</h2>
                            {/* <a href="" className = "main__link">View All <i className = "far fa-arrow-right"></i></a> */}
                        </div>
                    </div>
                    {/* end title */}

                    {/* sellers list */}
                    <div className = "col-12">
                        {
                            creators.length === 0 ?
                                ""
                            :
                                <ul className = "sellers-list">
                                {
                                    creators.map((creator:any, idx:any) => (
                                        <TopCreatorItem order={idx} name ={creator.name} avatar={creator.userImg} userId={creator.userId}/>                            
                                    ))
                                }
                                </ul>
                        }
                    </div>
                    {/* end sellers list */}
                </div>
                    
            </div>
        </section>
    )
}

export default TopCreator