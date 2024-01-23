import DeletePostButton from "./DeletePostButton";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Post({id, title, content, authorName}){
    return (
        <div>
            <Card className="h-full w-full flex flex-col justify-between items-start">
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{authorName}</CardDescription>
  </CardHeader>
  <CardContent>
    {content}
  </CardContent>
  <CardFooter>

    <DeletePostButton postId={id} />
  </CardFooter>
</Card>

        </div>
    )
}