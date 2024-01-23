'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function DeletePostButton({postId}){
    const router = useRouter()

    async function handleClick(){
        
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            })
            router.refresh()
        } catch(e){
            console.error(e)
        }
       
    }

    return (
        <Button variant="destructive"onClick={handleClick}>Delete Post</Button>
    )
}