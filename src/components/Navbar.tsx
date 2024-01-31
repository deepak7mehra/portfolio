import { useState } from 'react'

export default function Navbar() {
    const [showNav,setShowNav] =  useState(false);

    function handleClick(){
        setShowNav((nav)=>!nav);
    }
  return (
    <header className="bg-base sticky md:px-12 ">
      <nav className='flex justify-between p-5 text-lg'>
        <div className=' md:flex md:gap-2 justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9">
        <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.536-4.464a.75.75 0 1 0-1.061-1.061 3.5 3.5 0 0 1-4.95 0 .75.75 0 0 0-1.06 1.06 5 5 0 0 0 7.07 0ZM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5Zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5Z" clip-rule="evenodd" />
        </svg>

        <span>Deepak</span>

        </div>


        <div className='text-lg'>
        { !showNav &&<button onClick={handleClick} data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
        }

        
        {showNav && 
        <div className="fixed bg-baseTrans top-0 left-1/3 right-0 bottom-0 md:hidden pt-8 backdrop-blur-md z-50">
            <button onClick={handleClick} data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm z-[99999] text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
            <div className='m-10 flex flex-col gap-5 italic text-lg'>
            <div className='underline'>Home</div>
            <div>Project</div>
            <div>GitHub</div>
            <div>Linkdin</div>
            </div>
        </div>
        }
            

        
        <div className='hidden md:flex md:gap-10 '>
        <div className='underline'>Home</div>
            <div>Project</div>
            <div>GitHub</div>
            <div>Linkdin</div>
        </div>
        </div>
      </nav>
    </header>
  )
}
