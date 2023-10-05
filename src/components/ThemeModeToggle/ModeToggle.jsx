'use client'
import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"


export default function ModeToggle () {
    const {toggle , mode } = useContext(ThemeContext)
    return (
        <div className="flex border rounded-xl gap-3 relative" onClick={toggle}>
            <div className="text-sm">🌙</div>
            <div className="text-sm">🔆</div>
            <div className="cursor-pointer w-5 h-5 absolute bg-teal-500 rounded-full" style={mode === 'light' ? {left: '3px'} : {right : '3px'}} />
        </div>
    )
}