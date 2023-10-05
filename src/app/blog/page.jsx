import Link from "next/link"
import { notFound } from 'next/navigation'

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts" , {cache : 'no-store'})
    // const data = await res.json()
    if(!res.ok) {
        return notFound()
    }
    return res.json()
}

export default async function Blog () {
    const data = await getData()
    return (
        <div className="flex flex-col items-start justify-center gap-5">
            {data.map( item => (
                <Link href={`/blog/${item._id}`} className="flex items-center justify-between border-red-100" key={item._id}>
                    <img src={item.img} alt=""  className="w-1/3"/>
                    <p>{item.desc}</p>
                    <h1 className="text-white font-bold text-6xl">{item.titel}</h1>
                </Link>
            ))}
        </div>
    )
}