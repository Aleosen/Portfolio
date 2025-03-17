import React from 'react'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import cards from '../data/cards.json'
import './Table.css'
export default function PortfolioTable() {
    // const [selectedValue, setSelectedValue] = useState('0')
    const options = ['All', 'Web', 'Mobile', 'Pet']  
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItems, setSelectedItems] = useState(['All'])
    const filteredValues = Object.values(cards).filter(item => selectedItems.includes(item.category) || selectedItems.includes('All'))
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPages] = useState(6)
    

    const indexOfTheLastCard = currentPage*cardsPerPages
    const indexOfTheFirstCard = indexOfTheLastCard - cardsPerPages
    const currentCards = filteredValues.slice(indexOfTheFirstCard, indexOfTheLastCard)
    const totalPages= Math.ceil(filteredValues.length/cardsPerPages)


    const handleCheckboxChange = (option) => {
      if (selectedItems.includes(option)) {
        // Если элемент уже выбран, удаляем его
        if(selectedItems.length>1)
          setSelectedItems(selectedItems.filter((item) => item !== option));
      } else {
        // Если элемент не выбран, добавляем его
        if(option==='All'){
          setSelectedItems([option]);
        } else {
          setSelectedItems(selectedItems.filter(item => item!=='All').concat(option))
          if(selectedItems.length===2){
            console.log(selectedItems)
            setSelectedItems(['All'])
          }
          }
      }
    };

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

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  };


  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className='constructor relative mx-auto select-none pb-[60px]'>
        {/* <form className='my-[40px]'>
            <label className="ml-[30px]" for="filters">Filter: </label>
            <select className="rounded-full cursor-pointer" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                <option value="0">Everything</option>
                <option value="1">Web</option>
                <option value="2">Mobile</option>
            </select>
        </form> */}
    <div className="dropdown ml-[20px] mb-[10px]">
      <button className="w-[200px] mt-[20px]" onClick={()=>setIsOpen(!isOpen)}>Filter: {selectedItems.join(", ")}</button>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <label key={option} className="dropdown-item">
              <input
                type="checkbox"
                checked={selectedItems.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
          </div>)}
    </div>
    <div className='max-h-full flex flex-wrap'>
    {currentCards.map(item=>(
        <ProjectCard 
        key={item.id}
        title={item.name}
        description={item.description}
        imageUrl={item.imageUrl}
        linkUrl={item.linkUrl}
      />
    ))}
      </div>
    <div className="pagination flex justify-center mx-auto">
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
