import Link from 'next/link'
import React from 'react';

function AuthorList({ record }: any) {
  const { id, title, author, video_url, video_thumbnail_url, video_length, view_count } = record || {}

  return (
    <Link href={video_url}>
      <div className='bg-white rounded'>
        <img src={video_thumbnail_url} className=''></img>
        <h2>{title}</h2>
      </div>
    </Link>

  );
}

  
export default AuthorList