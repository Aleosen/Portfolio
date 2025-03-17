import { useEffect, useState  } from 'react'
export default function PortfolioHeader() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(()=>{
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, {passive: true})
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerStyle = {
    backgroundColor: `rgba(0, 0, 0, ${Math.min(scrollPosition / 300, 0.9)})`,
    color: scrollPosition > 100 ? "#FFFFFF" : "#000000",
    transition: 'background-color 0.3s ease'
  };


  return (
    <header className='constructor mx-auto flex items-center select-none sticky top-0' style={headerStyle}>
        <div className='flex flex-col m-[40px] opacity-90'>
            <span className="text-[48px] font-bold mb-[10px]">Aleksandr Kulakov</span>
            <span className="mb-[20px] text-[32px]">Full-Stack developer.</span>
            <div className="text-center mx-auto">
              <a 
              className='max-w-[48px] max-h-[48px] ' 
              target="_blank" 
              href="https://github.com/Aleosen">
                <img className="max-w-[48px] rounded-[10px]" src={scrollPosition>200?"../../public/github-light.png":"../../public/github.png"} alt="github" />
              </a>
              <a 
              className='ml-[20px] max-w-[46px] max-h-[46px] ' 
              target="_blank" 
              href="https://github.com/Aleosen">
                <img className="max-w-[48px] rounded-full" src={scrollPosition>200?"../../public/vk-light.png":"../../public/vk.png"} alt="github" />
              </a>
            </div>
        </div>
        <img src="../../public/photo.jfif" alt="" className='animate-fade-in w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl mx-4 mb-8 md:mb-0 pointer-events-none'/>
    </header>
  )
}
