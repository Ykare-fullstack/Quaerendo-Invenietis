import Stage from '../organism/Stage'
import StageLeft from '../../mollecule/Stage'
import StageRight from '../../mollecule/StageRight'
import styles from '../../styles/scenes/Act2.module.css'
import DateMarker from '../../atom/DateMarker'
function Act2(){
    return(
        <Stage className={styles.stageChronology}>
            <DateMarker />
            <StageLeft className={styles.titleLeft}>
            </StageLeft>
            <StageRight className={styles.titleRight}>
            </StageRight>
        </Stage>
    )
}
export default Act2