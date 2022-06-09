import styles from '../../styles/Home.module.css'

function Main(props){
    return(
        <main className={styles.theater} >
            {props.children}
        </main>
    )
}
export default Main