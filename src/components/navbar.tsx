import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
     return (
          <div className="flex justify-between items-center mb-8 shadow-md px-6 py-4">
               <h1 className="text-3xl font-bold bg-gradient-to-tr from-gray-900 via-violet-900 to-gray-900 bg-clip-text text-transparent">My Tasks</h1>
               <Link href="/dashboard/tasks/new">
                    <Button className="bg-gradient-to-tr from-gray-900 via-violet-900 to-gray-900">
                         <Plus className="h-4 w-4 mr-2" />
                         New Task
                    </Button>
               </Link>
          </div>
     )
}