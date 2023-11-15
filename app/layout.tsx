import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SearchText from './components/SearchText'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YouTube VidMark',
  description: 'Keep bookmarks of all your favorite videos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='grid md:grid-cols-6'>
          <div className='md:col-span-1 md:flex'>
            <nav>
              <div>
                <h1 className='font-bold uppercase p-4 '>
                  <a href="/" className='text-gray-700 hover:text-slate-600'>Video Bookmarks</a>
                </h1>
              </div>
              <ul className='text-sm mt-6'>
              <li className='text-gray-700 font-bold'>
                <a href="/" className='hover:text-slate-600'>
                  <svg className='w-5 inline-block mr-2' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li className='text-gray-700 font-bold'>
                <a href="/search" className='hover:text-slate-600'>
                  <svg className='w-5 inline-block mr-2' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Search</span>
                </a>
              </li>
              </ul>
            </nav>
          </div>
          <div className='md:col-span-5 md:mt-20'>
            <SearchText/>
            {children}
          </div>
        </div>
      
      </body>
    </html>
  )
}
