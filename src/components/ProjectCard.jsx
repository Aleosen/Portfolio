import React, { useState } from 'react'
import styles from './ProjectCard.module.css'
import Modal from './Modal/Modal'
export default function ProjectCard({title, description, imageUrl, linkUrl}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [likes, setLikes] = useState("../../public/likeUnpressed.svg")
  function handleClick(){
    if(likes==="../../public/likeUnpressed.svg")
      setLikes("../../public/likePressed.svg")
    else
      setLikes("../../public/likeUnpressed.svg")
  }
  return (
    <div className={styles.projectCard + " px-[20px] m-[10px] select-none"}>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h3 className='mb-[20px]'>{title}</h3>
      <p>{description}</p>
      <div className="absolute bottom-[50px] left-[50px]">
      <span>Check there - </span><a href="#" className=''>{linkUrl}</a>
      </div>
    </Modal>
    <div className="m-[20px] p-[20px] pb-[20px] flex items-center justify-center text-[14px]">
      <img src={imageUrl} alt={title} className={styles.projectImage + " pr-[20px] pointer-events-none"} />
      <div className="project-content">
        <h3 className='mb-[20px]'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    <div className="flex m-[20px] justify-between">
      <button 
        className='rounded-full border-none hover:opacity-50 px-[30px] py-[15px]'
        onClick={()=>setIsModalOpen(true)}>
        Learn more
      </button>
      <button className='flex justify-center items-center text-[16px] w-[60px] rounded-full bg-transparent border-none hover:opacity-50'  onClick={handleClick}>
        <img src={likes} alt="Like" className='pointer-events-none'/></button>
    </div>
    </div>
  )
}
