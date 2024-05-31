import {useState, useEffect} from 'react'
function Settings(props:any) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [facebook, setFacebook] = useState('')
    const [insta, setInsta] = useState('')
    const [twitter, setTwitter] = useState('')
    const [tele, setTele] = useState('')
    function fetchData() {
        let wallet = localStorage.getItem('wallet')
        let fetchUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + wallet
        fetch(fetchUrl)
            .then(res => res.json())
            .then( res => {
                if(res[0] !== undefined){
                    if(res[0].name !== undefined)
                        setName(res[0].name)
                    if(res[0].email !== undefined)
                        setEmail(res[0].email)
                    if(res[0].firstName !== undefined)
                        setFirstName(res[0].firstName)
                    if(res[0].lastName !== undefined)
                        setLastName(res[0].lastName)
                    if(res[0].facebook !== undefined)
                        setFacebook(res[0].facebook)                    
                    if(res[0].twitter !== undefined)
                        setTwitter(res[0].twitter)
                    if(res[0].instagram !== undefined)
                        setInsta(res[0].instagram)
                    if(res[0].tele !== undefined)
                        setTele(res[0].tele)
                }
            })
    }
    function update(event:any) {
        event.preventDefault()
        var data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('firstName', firstName)
        data.append('lastName', lastName)
        data.append('facebook', facebook)
        data.append('instagram', insta)
        data.append('twitter', twitter)
        data.append('tele', tele)

        let wallet = localStorage.getItem('wallet')
        let fetchUrl = process.env.REACT_APP_API_BASE_URL + 'users/' + wallet
        fetch(fetchUrl, {
            method: 'PUT',
            body: data
        }).then(res => res.json())
            .then(res => {
                if(res[0] !== undefined){
                    if(res[0].name !== undefined)
                        setName(res[0].name)
                    if(res[0].email !== undefined)
                        setEmail(res[0].email)
                    if(res[0].firstName !== undefined)
                        setFirstName(res[0].firstName)
                    if(res[0].lastName !== undefined)
                        setLastName(res[0].lastName)
                    if(res[0].facebook !== undefined)
                        setFacebook(res[0].facebook)                    
                    if(res[0].twitter !== undefined)
                        setTwitter(res[0].twitter)
                    if(res[0].instagram !== undefined)
                        setInsta(res[0].instagram)
                    if(res[0].tele !== undefined)
                        setTele(res[0].tele)
                }
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return(
        // <div className="tab-pane fade" id="tab-4" role="tabpanel">
        <div className={props.signup? "tab-pane fade show active":"tab-pane fade"} id="tab-4" role="tabpanel">
            <div className="row row--grid">
                {/* <!-- details form --> */}
                <div className="col-12 col-lg-6">
                    <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="sign__title">Profile Details</h4>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="username">Username</label>
                                    <input id="username" type="text" name="username" className="sign__input"
                                        placeholder={name} onChange={(e:any) => {setName(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="email">Email</label>
                                    <input id="email" type="text" name="email" className="sign__input"
                                        placeholder={email} onChange={(e:any) => {setEmail(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="firstname">First Name</label>
                                    <input id="firstname" type="text" name="firstname"
                                        className="sign__input" placeholder={firstName} onChange={(e:any) => {setFirstName(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="lastname">Last name</label>
                                    <input id="lastname" type="text" name="lastname" className="sign__input"
                                        placeholder={lastName} onChange={(e:any) => {setLastName(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="sign__btn" type="button" onClick={update}>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- end details form --> */}

                {/* <!-- socials form --> */}
                <div className="col-12 col-lg-6">
                    <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="sign__title">Socials</h4>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="facebook">Facebook</label>
                                    <input id="facebook" type="text" name="facebook" className="sign__input"
                                        placeholder={facebook} onChange={(e:any) => {setFacebook(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="twitter">Twitter</label>
                                    <input id="twitter" type="text" name="twitter" className="sign__input"
                                        placeholder={twitter} onChange={(e:any) => {setTwitter(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="firstname">Instagram</label>
                                    <input id="instagram" type="text" name="instagram"
                                        className="sign__input" placeholder={insta} onChange={(e:any) => {setInsta(e.target.value)}} />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="telegram">Telegram</label>
                                    <input id="telegram" type="text" name="telegram" className="sign__input"
                                        placeholder={tele} onChange={(e:any) => {setTele(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="sign__btn" type="button" onClick={update}>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- end socials form --> */}
            </div>
        </div>
    )
}

export default Settings