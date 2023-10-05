'use client'
import Link from "next/link"
import { links } from "@/context/links"
import ModeToggle from "../ThemeModeToggle/ModeToggle"

export default function Nav () {
    return (
        <div className="flex justify-between items-center h-[100px]">
                <Link href='/'><h1 className="cursor-pointer font-bold text-[22px]">Lamalia</h1></Link>
                <div className="flex gap-5 items-center">
                    <ModeToggle />
                    {links.map(link => (
                    <Link key={link.id} href={link.path} className="text-gray-500 hover:text-teal-500 font-bold text-lg">{link.title}</Link>
                ))}
                <button onClick={()=>console.log('logged out')} className="cursor-pointer p-[5px] bg-teal-500 text-white rounded-[5px] hover:bg-teal-400">Logout</button>
                </div>            
        </div>
    )
}