import React from 'react'

async function PersonId({params}: {params: {id: number}}) {
  
  console.log("Dynamic Page 😁");
  
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  const res_array = await data.json()
  
  return (
    <div>
      <h1>{res_array[(params.id) - 1].name}</h1>
      <h1>{res_array[(params.id) - 1].username}</h1>
      <h1>{res_array[(params.id) - 1].email}</h1>
      <h1>{res_array[(params.id) - 1].phone}</h1>
      <h1>{res_array[(params.id) - 1].website}</h1>
    </div>
  )
}

export default PersonId