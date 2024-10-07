import Link from "next/link";
import React from "react";

export default  function Home() {
  
  console.log("Hmoe page 💡");

  return (
    <>
      <h1>i am Home Page</h1>

      <Link href={"/person"}>Person Page</Link>
    </>
  );
}
