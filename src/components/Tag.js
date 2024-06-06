

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



const Tag = () => {
    // const [gif,setGif] = useState("");
    // const API_KEY = "aiErq78yjaqZNQqGpH9ipLq3GmVrd3Lt";
    // const [loading,setLoading]= useState(false);
    const [tag, setTag] = useState("tom");
 

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    function changeHandler(event){
        setTag(event.target.value);
    }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    const {gif,loading, fetchData} = useGif(tag);

    // function clickHandler(){
    //     fetchData(tag);
    // }
  return (
    <div className='w-1/2  flex flex-col gap-y-5 mt-[15px] items-center bg-blue-500 rounded-lg border border-black'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random <span>{tag}</span> Gif</h1>
      {
        loading ? (<Spinner/>):(<img src={gif} width="450" loading='lazy'></img>)
      }
      <input
        className=' w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />
      <button onClick={()=>fetchData(tag)} className='mb-[20px] w-10/12 bg-green-100 text-lg py-2 rounded-lg'>Generate</button>
    </div>
  )
}




export default Tag
