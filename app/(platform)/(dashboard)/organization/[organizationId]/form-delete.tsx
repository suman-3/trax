"use client"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";


export const FormDeleteButton = () =>{
    
    const {pending} = useFormStatus();
    return (
        <Button 
        disabled={pending}
        type="submit" variant="destructive" size="sm">
        Delete
      </Button>
    )
}