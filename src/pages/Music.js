import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchcreateToken } from '../redux/slices/CreateToken';
import { fetchPlayList } from '../redux/slices/Playlist';

function Music() {


  const dispatch = useDispatch();

  useEffect(() => {
      if(!localStorage.getItem('access_token')){
        dispatch(fetchcreateToken());
      }else {
        dispatch(fetchcreateToken());
        dispatch(fetchPlayList(localStorage.getItem('access_token')));
      }
  }, [])

  const {data, status} = useSelector(state => state.token);

  if(status === "loading") return <Loading/>
    if(status === "failed") return <Error/>
    if(status === "done"){
      localStorage.setItem('access_token', JSON.stringify(data.access_token));
      return (
        <div className='container mx-auto'>
                <div className='p-6 lg:p-10 mb-6 border rounded-md bg-green-500/5 border-green-500/10'>
                    <h2 className='text-xl lg:text-4xl font-bold lg:leading-[46px]'>Music</h2>
                    <p className='text-[15px] lg:text-lg text-gray-400 py-4'></p>
    
        </div>
        </div>
      )
    }

  
}

export default Music