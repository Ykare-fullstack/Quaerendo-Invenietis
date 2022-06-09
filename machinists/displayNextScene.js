function displayNextScene(currentScene, setCurrentScene, pieceScript, pieceScriptIndex,e){
    e.preventDefault()
    console.log('current Scene',currentScene)
    console.log('script',pieceScript)
    pieceScriptIndex.current = pieceScriptIndex.current + 1 
    console.log('Script Index :', pieceScriptIndex.current)
    setCurrentScene(pieceScript[pieceScriptIndex.current])       
}
export default displayNextScene