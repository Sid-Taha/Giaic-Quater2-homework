import Link from 'next/link';
import React from 'react'

async function PersonPage() {
  
  console.log("Person Page 🔥");
  
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  const res_array = await data.json()

  return (
    <div>
      {res_array.map((item: { id: number; name: string; }, index: React.Key | null | undefined)=>{return <Link href={`/person/${item.id as number}`} key={index}><h1>{item.name as string}</h1></Link>})}
    </div>
  )
}
export default PersonPage