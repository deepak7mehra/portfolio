import { useEffect, useRef, useState } from "react";
import Card from "./components/Card"
import IntroSection from "./components/IntroSection"
import Navbar from "./components/Navbar"
import SmallHeading from "./components/SmallHeading"
import FindMe from "./components/FindMe";
import Footer from "./components/Footer";


function App() {

  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);


  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        setIsIntersecting(entry.isIntersecting);
      },{
        rootMargin: "-5px"
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  },[isIntersecting])

  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.classList.add("show")
    }else{
      ref.current?.classList.remove("show")
    }
  }, [isIntersecting]);
  


  


  return (
    <>

    <Navbar/>
    <main className="mt-20 max-w-[80ch] mx-auto p-4 md:p-0">
      <div className="min-h-[400px] flex items-center">

        <IntroSection/>
      </div>


      <div className="mt-20">

      <SmallHeading text={"Introduction"}/>

      <div ref={ref} className="mt-5 flex flex-col gap-5 text-xl hide min-h-80">
        <li>I am 3rd year student in Dronacharya College of Engineering </li>
        <li>I love problem solving and competitive programming.</li>
        <li>I am machine learning enthusiactic </li>
        <li>My field of Interest's are building new  Web Technologies</li>
      </div>

      </div>

       <div className="mt-20">
        <SmallHeading text="Projects"/>
        <div className={`mt-20 flex gap-3 md:gap-4 overflow-x-auto mb-4`}>
          <div className="min-w-[328px]">
          <Card/>

          </div>
          <div className="min-w-[328px] ">
          <Card/>

          </div>
          <div className="min-w-[318px]">
          <Card/>

          </div>
        
          
        </div>

       </div>


       <div className="mt-[12rem]  flex justify-center">
        <FindMe/>

       </div>
    </main>

    <footer className="mt-20">
      <Footer/>

    </footer>

  
    
    
    </>
    
  )
}

export default App
