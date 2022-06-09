import HeaderTitle from '../atom/HeaderTitle'
import styles from '../../styles/Banner.module.css'

function Banner(){
    return(
            <header className={styles.header}>
                <HeaderTitle />
            </header>
        )
}
export default Banner