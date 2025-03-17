import React from 'react'
import navbars from '../data/navbars.json'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PortfolioTable from './PortfolioTable';
import PortfolioHeader from './PortfolioHeader';
export default function NavBar() {
  return (
        <nav className='w-full sticky md:relative'>
        <ul className='flex items-center justify-center'>
            {Object.values(navbars).map(item=>(
                <li className='list-none mx-[20px] text-black select-none'>
                    <Link className='no-underline hover:opacity-70' to={item.address}>{item.name}</Link>
                </li>
            ))}
        </ul>
        </nav>

  )
}
