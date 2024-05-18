import React from 'react'
import CreatePost from './CreatePost.js'
import Tweet from './Tweet.js'


const Feed = () => {
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <CreatePost />
        <Tweet />
      </div>
    </div>
  )
}

export default Feed