import { useState } from 'react'
import styles from './Alert.module.css'
import * as FaIcons from 'react-icons/fa'
const alertContent: any = {
    'metamaskUninstalled': 'Install metamask'
}
function Alert(props:any) {
    const [close, setClose] = useState(false)
    return(
        <div className={styles.alertWrap} style={close ? {display: 'none'} : {}}>
            {alertContent[props.err]}
            <button className={styles.alertClose} onClick={() => setClose(true)}>
                <FaIcons.FaTimes size={20} />
            </button>
        </div>
    )
}

export default Alert