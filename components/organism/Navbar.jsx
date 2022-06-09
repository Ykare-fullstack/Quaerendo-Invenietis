import styles from '../../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavItem from '../atom/NavItem'
import DropDownMenu from '../mollecule/DropDownMenu'

function Navbar(){
    const githubIcon = <FontAwesomeIcon icon={faGithub} size='2x'/>
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size='2x'/>
    const dropDownMenuIcon = <FontAwesomeIcon icon={faBars} size='2x'/>

    return(
    <nav className={styles.navframe}>
        <ul className={styles.navFrameList}>
            <NavItem icon={githubIcon} href='https://github.com/duguesclain'/>
            <NavItem icon={dropDownMenuIcon} href='#'>
                <DropDownMenu />
            </NavItem>
            <NavItem icon={linkedinIcon} href='https://www.linkedin.com/in/alan-assante-42b31a232/'/>
            
        </ul>
    </nav>
    )
}
export default Navbar