import Image from "next/image"
import Link from "next/link"
import illustration from 'public/illustration.png'
import website from 'public/websites.jpg'
import app from 'public/apps.jpg'


export default function Portfolio () {
    return (
        <div className="flex flex-col item-start gap-16 p-2">
            <h1 className="font-bold text-4xl">Our Works</h1>
            <div className="flex flex-col gap-5 itmes-start">
                <h4 className="font-bold text-xl">Choose a gallery</h4>
                <div className="flex items-start justify-start gap-5">
                    <div className="flex  relative  w-[200px] h-[300px] border-4 rounded-lg hover:translate-y-2 ">
                        <Image src={illustration} fill={true} className="object-cover "/>
                        <Link href='/portfolio/illustrations' className="text-white absolute bottom-0 right-0 p-3 text-xl font-bold hover:text-teal-400" >illustration</Link>
                    </div>
                    <div className="flex  relative w-[200px] h-[300px] border-4 rounded-lg hover:translate-y-2 ">
                        <Image src={website} fill={true} className="object-cover " />
                        <Link href='/portfolio/websites' className="text-white absolute bottom-0 right-0 p-3 text-xl font-bold hover:text-teal-400" >websites</Link>
                    </div>
                    <div className="flex  relative w-[200px] h-[300px] border-4 rounded-lg hover:translate-y-2 ">
                        <Image src={app}  fill={true} className="object-cover "/>
                        <Link href='/portfolio/application' className="text-white absolute bottom-0 right-0 p-3 text-xl font-bold hover:text-teal-400" >application</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}