import {useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import {PieceContext} from '../../context'
import styles from '../../styles/Home.module.css'
import displayNextScene from '../../machinists/displayNextScene'

function NextSceneButton(){
    const pieceInfo = useContext(PieceContext)
    const {currentScene, setCurrentScene, pieceScript, pieceScriptIndex} = pieceInfo

    return(
        <div className={styles.displayNextWrapper}>
            <button className={styles.displayNextButton} onClick={(e)=>{displayNextScene(currentScene, setCurrentScene, pieceScript, pieceScriptIndex,e)}}id='displayNextButton'>
                <FontAwesomeIcon icon={faArrowAltCircleRight} size='4x'/>
            </button>
        </div>
        
    )
}
export default NextSceneButton