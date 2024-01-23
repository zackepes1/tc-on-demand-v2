

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';



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

  return (
<>
<section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
  <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
    <div className="flex flex-col justify-center gap-8">
      <h1 className="text-7xl text-black">Host & Connect: Your Teamcenter, Our Design</h1>
      <p className="p-regular-20 md:p-regular-24 text-black">Using our platform, you have the ability to request a Teamcenter environment, which will be provisioned and hosted on AWS.</p>
      <Button size="lg" asChild className="button w-full sm:w-fit text-primary-50">
        <Link href="/feed">Request an Environment</Link>
      </Button>
    </div>
    <Image src="/assets/images/hero.svg" alt="hero" width={1000} height={1000} className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"/>
  </div>
</section>
<section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12 ">
  <div className="flex w-full flex-col gap-5 md:flex-row ">
    Search
    CategoryFilter
  </div>
</section>
</>
  );
}
