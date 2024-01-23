'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mutate } from 'swr';

export default function AddPost(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter()

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
        await fetch('/api/add-post', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content}) })
            
        router.refresh()
    } catch (error){
        console.error(error)
    }

    setTitle('');
    setContent('');
    mutate('/api/getPosts'); // <-- revalidate SWR cache here
  };

    return (
        <main className="">
          <div className="flex flex-col justify-start items-start p-8">
          <Button>
            <Link href={'/feed'}>View Feed</Link>
            </Button>
            </div>
            <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold p-10">Request an Environment</h1>
        <form onSubmit={handleSubmit}>
        <Card>
  <CardHeader className="bg-black text-white">
    <CardTitle>  
      <div className="flex flex-row p-5">
          <label className="p-8" htmlFor="title">Software Version:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="rounded-2xl bg-transparent border-2 text-white text-center"
          />
        </div>
        </CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent className="h-[500px] bg-black text-white text-lg font-bold flex flex-col justify-center items-start">
  <div className="flex flex-row p-5">
          <label className="p-8" htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="rounded-2xl bg-transparent border-2 text-white text-start w-[600px]"
          />
        </div>
  </CardContent>
  <CardFooter className="flex justify-center items-center">
  <Button type="submit">Submit Request</Button>
  </CardFooter>
</Card>
      </form>
      </div>
        

    </main>
    )
}