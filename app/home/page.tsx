import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import prisma from "@/lib/prisma";
import Feeds from "@/components/Feeds";
import {Feed, PostWithAuthor} from "@/types/Feed";


const HomePage = async () => {
  
  let pos: Feed[] = [];
  let posts: PostWithAuthor[] = [...];
  try {
    posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true, email: true },
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  return (
    <main className="flex min-h-screen flex-col p-24">
      <Navbar />
      <Feeds feeds={feed} />
    </main>
  );
};

export default HomePage;
