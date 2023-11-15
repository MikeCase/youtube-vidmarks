'use client'
import React, { useState } from 'react'

const SearchText = () => {
    const [searchText, setSearchText] = useState()
    var baseUrl = '/author/'
    if (searchText){
        var baseUrl = '/author/' + encodeURIComponent(searchText)
    } 
    // console.log(baseUrl)
  return (
    <>
        <label htmlFor="input" className='block text-slate-600 font-bold'>Search</label>
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className='bg-slate-600 border-b border-r rounded border-slate-500 outline-none pl-2' />
        <a href={baseUrl} className='inline-block button ml-2 border rounded border-slate-500 p-1'>
            <svg fill="none" className='w-4' stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
        </a>
    </>
  )
}

export default SearchText