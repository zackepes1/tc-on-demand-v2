import Link from 'next/link';
import Post from '@/components/Post'
import prisma from '@/lib/prisma'
import { Button } from '@/components/ui/button';



async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="w-screen flex flex-col items-center justify-center">
      <Button>
      <Link href="/add-post">Add Post</Link>
      </Button>

      <h1>Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full w-full gap-5">
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} content={post.content} authorName={post.author.name}/>
      ))}
      </div>
    </main>
  );
}
