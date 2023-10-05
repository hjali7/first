import Image from "next/image"
import Hero from 'public/hero.png'
export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex flex-col flex-1 gap-12 items-start">
        <h1 className="text-7xl font-bold bg-gradient-to-b from-teal-600 to-gray-400 text-transparent bg-clip-text ">
          Better design for your digital products.
        </h1>
        <p className="text-xl">
          Turning your Idea into Reality, We bring together the teams fro the
          global tech industry.
        </p>
        <button
          type="button"
          className="text-white bg-teal-600 p-4 rounded-xl hover:bg-teal-500 border-0 outline-0"
        >
          See Out Works
        </button>
      </div>
      <Image
        src={Hero}
        alt="Hero png"
        width="100%"
        height={400}
        className="flex-1 object-contain animate-wiggle"
      />
    </div>
  );
}
