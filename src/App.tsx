import Card from "./components/Card"
import IntroSection from "./components/IntroSection"
import Navbar from "./components/Navbar"
import SmallHeading from "./components/SmallHeading"


function App() {
  return (
    <>

    <Navbar/>
    <main className="mt-20 max-w-[80ch] mx-auto p-4 md:p-0 ">
      <IntroSection/>


      <div className="mt-20">

      <SmallHeading text={"Introduction"}/>

      <div className="mt-5 flex flex-col gap-5">
        <li>I am btech 3rd year  student </li>
        <li>I am a competetive programmer</li>
        <li>I am machine learning enthusiactic </li>
      </div>

      </div>

       <div className="mt-20">
        <SmallHeading text="Projects"/>
        <div className="mt-20 flex gap-3 overflow-x-auto mb-4">
          <div className="min-w-[328px]">
          <Card/>

          </div>
          <div className="min-w-[328px]">
          <Card/>

          </div>
          <div className="min-w-[318px]">
          <Card/>

          </div>
        
          
        </div>

       </div>


    </main>

  
    
    
    </>
    
  )
}

export default App
