import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import VideoCard from '../../components/VideoCard'
import PocketBase, { RecordModel } from 'pocketbase'
// import { useParams } from 'next/navigation';


export async function GetAuthor(author: string) {
    const pb = new PocketBase('http://pb.splaq.us:8090')
    console.log({author})
    const authData = await pb.admins.authWithPassword(process.env.EMAIL , process.env.PASSWORD)
    const records = await pb.collection('yt_video_links').getList(1, 50, { filter: `author ?~ "${author}"`})
    return records
}

export default async function Author({params}: { params: { author: string }}) {
    const records = await GetAuthor(decodeURIComponent(params.author))
    return(
        <main className='grid md:grid-cols-3 gap-4'>
            {records.items.map((record: RecordModel) => {
                return <VideoCard key={record.id} record={record}/>
            })}
        </main>
    )
}

