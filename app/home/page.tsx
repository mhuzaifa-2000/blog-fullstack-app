import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import prisma from "@/lib/prisma";
import Feeds from "@/components/Feeds";
import { Post, User } from "@/types/Feed";

const HomePage = async () => {
  let pos: Post[] = [];
  let posts: Post[] = [];
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
      <Feeds feeds={posts} />
    </main>
  );
};

export default HomePage;
