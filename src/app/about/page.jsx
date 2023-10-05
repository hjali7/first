import Image from "next/image"
import Link from "next/link"
import about from 'public/about.jpeg'

export default function About () {
    return (
        <div className="flex flex-col">
            <div className="w-full h-[300px] relative">
                <Image src={about} fill={true} className="object-cover grayscale" />
                <div className="absolute bottom-0 left-0 m-5 px-6 py-3 text-white rounded-xl shadow-lg bg-teal-500">
                    <h1 className="font-bold text-xl">Digital Storytellers</h1>
                    <h2 className="font-light text-lg">Handcrafting award winnig digital experiences</h2>
                </div>
            </div>
            <div className="flex items-start gap-[100px]">
                <div className="flex flex-col items-start  flex-1 mt-[50px] gap-[30px]">
                    <h1 className="font-bold text-2xl">Who Are We?</h1>
                    <p className="text-sm text-justify font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className="flex flex-col items-start  flex-1 mt-[50px] gap-[30px]">
                    <h1 className="font-bold text-2xl">What We Do?</h1>
                    <p className="text-sm text-justify font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br/>
                        <br /> - Dynamic Websites
                        <br /> - Fast and Handy
                        <br /> - Mobile Apps
                    </p>
                    <br/>
                    <Link href='/contact'>
                        <button type="button" className="text-white bg-teal-500 p-2 rounded-lg uppercase">contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}