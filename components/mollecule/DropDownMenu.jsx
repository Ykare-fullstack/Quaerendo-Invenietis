import styles from '../../styles/Navbar.module.css'
import DropDownItem from '../atom/DropDownItem';
import {useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp,faArrowAltCircleLeft,faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'


function DropDownMenu(){
    const returnArrowIconRight = <FontAwesomeIcon icon={faArrowAltCircleRight} size='2x'/>
    const returnArrowIconLeft = <FontAwesomeIcon icon={faArrowAltCircleLeft} size='2x'/>
    const[activeMenu, setActiveMenu] = useState('main')
    const[menuHeight, setMenuHeight] = useState(null)

    function calcHeight(el){
        const height = el.offsetHeight+35
        setMenuHeight(height)
    }

    return(
        <div className={styles.dropDownMenu} style={{ height: menuHeight }}>
            <CSSTransition onEnter={calcHeight} in={activeMenu==='main'} unmountOnExit timeout={500} classNames='menu-primary'>
                <div className={styles.dropDownMenuWrapper}>
                    <DropDownItem rightIcon={returnArrowIconRight} goToMenu='secondary' setActiveMenu={setActiveMenu}>
                        <p>second menu</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                </div>
            </CSSTransition>   
            <CSSTransition onEnter={calcHeight} in={activeMenu==='secondary'} unmountOnExit timeout={500} classNames='menu-secondary'>
                <div className={styles.dropDownMenuWrapper}>
                    <DropDownItem leftIcon={returnArrowIconLeft} goToMenu='main' setActiveMenu={setActiveMenu}>
                        <p>premier menu</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                    <DropDownItem>
                        <p>test</p>
                    </DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
export default DropDownMenu