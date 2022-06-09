import {useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"
import {PieceContext} from '../../context'
import styles from '../../styles/Home.module.css'
import displayPreviousScene from '../../machinists/displayPreviousScene'

function PreviousSceneButton(){
    const pieceInfo = useContext(PieceContext)
    const {currentScene, setCurrentScene, pieceScript, pieceScriptIndex} = pieceInfo

    return(
        <div className={styles.displayPreviousWrapper}>
            <button className={styles.displayPreviousButton} onClick={(e) => {displayPreviousScene(currentScene, setCurrentScene, pieceScript, pieceScriptIndex, e)}} id='displayPreviousButton'>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size='4x'/>
            </button>
        </div>
        
    )
}
export default PreviousSceneButton