import React,{ useState,useEffect } from 'react'
import { style } from '../style'
import {Link} from 'react-router-dom'
import { navLink } from '../constants'


export default function Navbar() {
  return (
    <nav className={`${style.paddingX} bg-black w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link 
        to="/"
        className='flex items-center gap-2'
        omClick={()=>{}}
        >
        </Link>
      </div>
    </nav>
  ) 
}

