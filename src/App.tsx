import IntroSection from "./components/IntroSection"
import Navbar from "./components/Navbar"
import SmallHeading from "./components/SmallHeading"


function App() {
  return (
    <>

    <Navbar/>
    <main className="mt-20 max-w-[80ch] mx-auto ">
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas commodi repellat sed officia magnam a blanditiis, porro corrupti doloremque nam ipsum iste ut beatae placeat architecto nemo at reiciendis aspernatur!

       </div>


    </main>

  
    
    
    </>
    
  )
}

export default App
