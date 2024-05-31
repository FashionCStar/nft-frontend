import * as FaIcons from 'react-icons/fa'
function UploadFile(props:any) {
    function setImgFile(e:any) {
        console.log('upload image')
        if (e.target.files && e.target.files.length > 0) {
            props.uploadImg(e.target.files[0]);
        }
    }
    return(
        <>
            <div className="col-12">
                <h4 className="sign__title">Upload File</h4>
            </div>

            <div className="col-12">
                <div className="sign__file">
                    <label id="file1" htmlFor="sign__file-upload"><FaIcons.FaUpload/> Upload File (e. g. Image, Audio, Video) </label>
                    <input data-name="#file1" id="sign__file-upload" name="file" className="sign__file-upload" type="file" accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg" onChange={setImgFile}/>
                </div>
            </div>
        </>
    )
}

export default UploadFile