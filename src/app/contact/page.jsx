'use client'
import Image from "next/image"
import contact from 'public/contact.png'
import { Form , Formik , Field } from "formik"
import * as Yup from 'yup'
export default function Contact () {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="font-bold text-5xl mb-28">Let's Keep in Touch</h1>
            <div className="flex items-center gap-[100px] w-full">
                <Image src={contact} width={500} height={500} className="flex-1 object-contain animate-wiggle"/>
                    <form className="flex flex-col gap-5 flex-1">
                        <input type="name" placeholder="name" required className="bg-transparent border-[3px] p-5 outline-0 rounded-md text-white" />
                        <input type="email" placeholder="email" required className="bg-transparent border-[3px] p-5 outline-0 rounded-md text-white"/>
                        <textarea cols='30' row='10' placeholder="message" className="bg-transparent border-[3px] p-5 rounded-md text-white"></textarea>
                        <button className="text-white bg-teal-500 rounded-lg shadow-lg text-center p-3 w-1/3 hover:bg-teal-400" type="submit">Submit</button>
                    </form>
            </div>
        </div>
    )
}