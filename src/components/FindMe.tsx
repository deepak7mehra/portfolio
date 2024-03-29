import { useEffect, useRef, useState } from "react";

export default function FindMe() {
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
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("show");
              });
        }else{
            ref.current?.querySelectorAll("div").forEach((el) => {
                el.classList.remove("show");
              });
        }
      }, [isIntersecting]);


  return (
    <div className="w-96 text-center">
        <div className="text-3xl font-medium " >Find me on</div>



        <div ref={ref} className="flex   justify-evenly mt-5 card">
            <div className="h-[40px] hide w-[40px] hover:bg-gray-500 hover:rounded-lg hover:scale-125 ">
                <a target="_blank" href="https://github.com/deepak7mehra">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg></a>
            </div>
        
        

            <div className=" card-2 hide h-[40px] w-[40px] hover:bg-gray-500 hover:rounded-lg hover:scale-125">
                <a href="https://www.linkedin.com/in/deepak-mehra-9015882a6/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
                </a>
            </div>

            <div className=" card-3 hide h-[40px] w-[40px] hover:bg-gray-500 hover:rounded-lg hover:scale-125">
                <a href="https://twitter.com/deepakm80147879" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg></a>
            </div>

        </div>
      
    </div>
  )
}
