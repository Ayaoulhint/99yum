import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 overflow-hidden h-72' >
            <div className='w-full justify-center mb-4 overflow-hidden h-4/5'>
                <img  src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl object-center ' />

            </div>
            <h2
            className='text-xl font-bold h-1/4'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard