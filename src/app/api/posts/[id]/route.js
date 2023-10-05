import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/model/Post";

const mongoose = require("mongoose");

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();
    const res = await Post.findById(id);
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new NextResponse("connection lost", { status: 500 });
  }
};
