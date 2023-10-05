import Image from "next/image"
import Link from "next/link"
export default function Footer () {
    return (
        <div className="flex justify-between items-center h-[50px]">
            <div className="text-white">2023 Lamamia . All Right Reserved.</div>
            <div className="flex gap-3 items-center">
                <Link href='https://facebook.com'>
                <Image src='/1.png' width={15} height={15} alt="lama facebook account" className="cursor-pointer opacity-60 hover:opacity-40 " />
                </Link>
                <Link href='https://meta.com'>
                <Image src='/2.png' width={15} height={15} alt="lam instagram account" className="cursor-pointer opacity-60 hover:opacity-40 " />
                </Link>
                <Link href='https://twiter.com'>
                <Image src='/3.png' width={15} height={15} alt="lam twiter account" className="cursor-pointer opacity-60 hover:opacity-40 " />
                </Link>
                <Link href='https://youtube.com'>
                <Image src='/4.png' width={15} height={15} alt="lam youtube account" className="cursor-pointer opacity-60 hover:opacity-40 " />
                </Link>
            </div>
        </div>
    )
}