import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import prisma from "@/lib/prisma";
import Feeds from "@/components/Feeds";
const HomePage = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Navbar />
      <Feeds feeds={feed} />
    </main>
  );
};

export default HomePage;
