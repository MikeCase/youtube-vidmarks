import Image from 'next/image'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'
import Link from 'next/link'
import VideoCard from './components/VideoCard'
import PocketBase, { RecordModel } from 'pocketbase'
import SearchText from './components/SearchText'

export async function GetYTList() {
  const pb = new PocketBase('http://pb.splaq.us:8090')
  const authData = await pb.admins.authWithPassword(process.env.EMAIL, process.env.PASSWORD)
  const records = await pb.collection('yt_video_links').getFullList({sort: '-created'})
  return records
}

export default async function Home() {
  const records = await GetYTList()
  return (
    <main className='grid md:grid-cols-4 gap-4'>
      
      {records.map((record: RecordModel) => {
        return <VideoCard key={record.id} record={record}/>
        })}
    </main>
  )
}



