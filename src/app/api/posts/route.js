import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/model/Post";

const mongoose = require('mongoose')

export const GET = async request => {
    try {
        await connect()
        const response = await Post.find()
        return new NextResponse( JSON.stringify(response) , {status : 200})
    }catch (err) {
        return new NextResponse('database not working' , {status : 500})
    }
}
