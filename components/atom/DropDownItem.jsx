import styles from '../../styles/Navbar.module.css'

function DropDownItem(props){
    return(
        
        <a href='#' className={styles.dropDownItem} onClick={()=> props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className={styles.dropDownItemIconLeft}>{props.leftIcon}</span>
                {props.children}
            <span className={styles.dropDownItemIconRight}>{props.rightIcon}</span>
        </a>
    )
}
export default DropDownItem