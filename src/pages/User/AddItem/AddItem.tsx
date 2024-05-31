import Author from './Author/Author'
import CreateForm from './CreateForm/CreateForm'

function AddItem() {
    return(
        // <!-- main content -->
        <main className="main">
    
            <div className="main__author" data-bg="assets/img/authors/banner.jpg"></div>
    
            <div className="container">
                <div className="row row--grid">
                    <Author/>
                    {/* <!-- create --> */}
                    <CreateForm/>        
                    {/* <!-- end create --> */}
    
                </div>
    
            </div>
            
        </main>
        // <!-- end main content -->
    )
}

export default AddItem