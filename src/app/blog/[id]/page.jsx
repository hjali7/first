import { notFound } from "next/navigation"

async function getData (id) {
    const response = await fetch(`http://localhost:3000/api/posts/${id}` , {
        cache : 'no-cache'
    })
    if(!response.ok) {
        return notFound()
    }
    return response.json()
}

export default async function BlogPost ({params}) {
    const data = await getData(params.id)
    return (
        <div className="flex flex-col items-center justify-between gap-6">
            <div className="flex items-center justify-between">
                <div className="flex flex-col flex-1 gap-5 items-start">
                    <h1 className="font-bold text-2xl text-white">{data.titel}</h1>
                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure nihil deserunt aliquid ullam libero excepturi labore placeat consequuntur nostrum a officia ea, facilis fugit explicabo facere eaque veniam officiis.</p>
                    <div className="flex justify-center items-center">
                        <img src='' alt="avatar" className="w-4 rounded-full" />
                        <p>John Doe</p>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <img src="" alt="blog post image" />
                </div>
            </div>
            <div className="flex flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at possimus nobis cumque, magni magnam dolorum cupiditate omnis vitae, adipisci dolor voluptatem exercitationem! Perspiciatis, aut vel. Tempore delectus illum nisi, aliquid expedita ad qui deserunt numquam doloremque nihil quod perferendis fugit voluptatibus a perspiciatis corporis? Pariatur, eveniet. Porro nemo officia nisi consectetur? Incidunt minima consectetur repellat. Maxime libero dolor quam provident iure ipsa ipsam rem tempora, facilis illo id laudantium?</div>
        </div>
    )
}