import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/abhayratnakar')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div className='text-center m-4 text-black p-4 text-3xl flex stroke-white items-center flex-col'>
    <img className='rounded-full pb-3' src={data.avatar_url} alt="Git picture" width={300}/>
    Github followers: {data.followers}
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/karanpujari")
    return response.json()
}