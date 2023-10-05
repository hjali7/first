'use client'
import {items} from './data'

const getCategory = category => {
    let nameCategory = items[category]
    if(nameCategory) {
        return nameCategory
    }
    return null
}

export default function Category ({params}) {
    const data =  getCategory(params.slug)
    return (
        <div className="flex flex-col items-start justify-between">
            <h1 className='font-bold text-4xl pb-4'>Our Work</h1>
            <h3 className='text-2xl'>{params.slug}</h3>
            <div className="flex flex-col items-center">
                {data.map(item => {
                    const {id , image , title , desc} = item
                    return (
                        <div className="flex items-center gap-10 p-10 mt-8 rounded-lg even:flex-row-reverse" key={id}>
                            <div className="flex flex-col items-start justify-center gap-5 flex-1">
                                <h1 className="font-bold text-white text-3xl">{title}</h1>
                                <p className="text-lg text-gray-300 w-2/3">{desc}</p>
                                <button type="button" className="text-white rounded-xl bg-teal-500 p-3 hover:bg-teal-400 relative">See More</button>
                            </div>
                            <div className="flex-1 flex object-cover drop-shadow-xl">
                                <img src={image} alt={image}  className="w-full h-[350px] rounded-md"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}