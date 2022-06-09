import React, { useState, createContext, useRef } from 'react'
export const PieceContext = createContext()

export const PieceStatusProvider = ({ children }) => {
    const pieceScript = ["Act1","Act2Scene1"]
    const [currentScene, setCurrentScene] = useState("Act1")
    const pieceScriptIndex = useRef(0)
    return (
        <PieceContext.Provider
            value={{currentScene, setCurrentScene, pieceScript, pieceScriptIndex}}
        >
            {children}
        </PieceContext.Provider>
    )
}