import Link from "next/link"
import { links } from "@/context/links"

export default function Nav () {
    return (
        <div className="flex justify-around items-center mt-12">
                <h1 className="w-1/3">Lamalia</h1>
                <div className="flex space-x-6 items-center">{links.map(link => (
                    <Link key={link.id} href={link.path} className="text-gray-500 hover:text-teal-500 font-bold text-lg">{link.title}</Link>
                ))}</div>            
        </div>
    )
}