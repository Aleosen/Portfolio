import React from 'react'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import cards from '../data/cards.json'
export default function PortfolioTable() {
    const [selectedValue, setSelectedValue] = useState('0')
    const filteredValues = Object.values(cards).filter(item => selectedValue==='0' || item.category==selectedValue)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPages] = useState(6)

    const indexOfTheLastCard = currentPage*cardsPerPages
    const indexOfTheFirstCard = indexOfTheLastCard - cardsPerPages
    const currentCards = filteredValues.slice(indexOfTheFirstCard, indexOfTheLastCard)
    const totalPages= Math.ceil(filteredValues.length/cardsPerPages)
    
    const renderPageNumbers = () => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={currentPage === i ? 'active page-num' : 'page-num'}
          >
            {i}
          </button>
        );
      }
      return pages;
    };
  return (
    <div className='constructor mx-auto h-screen select-none relative'>
        <form className='my-[40px]'>
            <label className="ml-[30px]" for="filters">Filter: </label>
            <select className="rounded-full cursor-pointer" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                <option value="0">Everything</option>
                <option value="1">Web</option>
                <option value="2">Mobile</option>
            </select>
        </form>
    <div className='flex flex-wrap'>
    {currentCards.map(item=>(
        <div key={item.id}>
        <ProjectCard
        title={item.name}
        description={item.description}
        imageUrl={item.imageUrl}
        linkUrl={item.linkUrl}
      />
      </div>
    ))}
      </div>
    <div className="pagination">
        <button 
          className='rounded-full w-[100px] border-none cursor-pointer'
          onClick={()=>setCurrentPage(currentPage-1)}
          disabled={currentPage===1}>
            Previous
        </button>
        {renderPageNumbers()}
        <button 
          className='rounded-full w-[100px] border-none cursor-pointer'
          onClick={()=>setCurrentPage(currentPage+1)}
          disabled={currentPage===Math.ceil(filteredValues.length/cardsPerPages)}>
            Next
        </button>
    </div>
    </div>
  )
}
