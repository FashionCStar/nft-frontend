import * as FaIcons from 'react-icons/fa'
import Author from './Author/Author'
import Content from './Content/Content'
function Profile(props:any) {
    console.log('profile: ', props.signup)
    return(
        <main className="main">
            <div className="main__author" data-bg="assets/img/authors/banner.jpg"></div>
            <div className="container">
            {
                props.signup ?
                    <div className="row row--grid">
                        <Content signup={props.signup}/>
                    </div>
                :
                    <div className="row row--grid">
                        <Author signup={props.signup}/>
                        <Content signup={props.signup}/>
                    </div>
            }
            </div>					
        </main>
    )
}

export default Profile