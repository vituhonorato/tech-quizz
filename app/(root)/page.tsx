"use client";
import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1>Root page</h1>
    </div>
  )
}