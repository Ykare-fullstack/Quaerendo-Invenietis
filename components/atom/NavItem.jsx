import styles from '../../styles/Navbar.module.css'
import { useState} from 'react'

function NavItem(props){
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <li className={styles.navItem}>
            <a href={props.href} className={styles.navItemIcon} onClick={() => setMenuOpen(!menuOpen)}>
                {props.icon}    
            </a>
            {menuOpen?props.children:null}
        </li>
    )
}
export default NavItem