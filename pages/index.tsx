import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Act1Scene1Garden,Act1Scene1Courtyard,Act2Scene1Garden,Act2Scene1Courtyard} from '../components/story/index'
import styles from '../styles/Home.module.css'
import {useContext} from 'react'
import VerticalSeparator from '../components/atom/VerticalSeparator'
import Banner from '../components/organism/Banner'
import Main from '../components/organism/Main'
import Navbar from '../components/organism/Navbar'
import {CSSTransition} from 'react-transition-group' 
import PreviousSceneButton from '../components/atom/PreviousSceneButton'
import NextSceneButton from '../components/atom/NextSceneButton'
import {PieceContext} from '../context'

const Home: NextPage = () => {

  const pieceInfo = useContext(PieceContext)
  const {currentScene, setCurrentScene, pieceScript, pieceScriptIndex} = pieceInfo
  console.log(currentScene)
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Quaerendo Invinietis</title>
        <meta name="description" content="personnal portfolio and Resume by ASSANTE Alan " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bannerWrapper}>
        <Banner />
        <Navbar />
      </div>
      <Main> 
        {/*-----------------------------------------------*/
        /* insertion of story acts here !*/}
          <CSSTransition in={currentScene==='Act1'} unmountOnExit timeout={500} classNames='act1scene1separator'>
            <VerticalSeparator/> 
          </CSSTransition>
          <CSSTransition in={currentScene==='Act1'} unmountOnExit timeout={500} classNames='act1scene1left'>
            <Act1Scene1Garden/>
          </CSSTransition>
          <CSSTransition in={currentScene==='Act1'} unmountOnExit timeout={500} classNames='act1scene1right'>
            <Act1Scene1Courtyard/>
          </CSSTransition>
          <CSSTransition in={currentScene==='Act2Scene1'} unmountOnExit timeout={500} classNames='act2-scene1left'>
            <Act2Scene1Garden/>
          </CSSTransition>
          <CSSTransition in={currentScene==='Act2Scene1'} unmountOnExit timeout={500} classNames='act2-scene1right'>
            <Act2Scene1Courtyard/>
          </CSSTransition>
        {pieceScriptIndex.current > 0?<PreviousSceneButton/>:null}
        
        {pieceScriptIndex.current < pieceScript.length-1?<NextSceneButton />:null}
        
      </Main>
          
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
