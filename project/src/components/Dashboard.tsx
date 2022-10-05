import React, { useEffect } from 'react'


function Dashboard() {

  useEffect(() => {
    console.log("Effect -1");
  }, [])

  useEffect(() => {
    console.log("Effect -2");
  }, [])
   

  return (
    <>
      <h2> Products </h2>
    </>
  )
}

export default Dashboard