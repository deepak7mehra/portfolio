import {  useEffect, useRef, useState , ReactNode } from "react";
import styles from "./Card.module.css"

interface CardProps{
  children : ReactNode
}
function Card({children}:CardProps) {
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
      ref.current.classList.add(`${styles.show}`)
    } /* else if (ref.current) {
      ref.current.classList.remove(`${styles.show}`)
    } */
  }, [isIntersecting]);


  return (
    <div ref={ref} className={` ${styles.hidden}  ${styles.animate} max-w-[328px]  min-h-[400px] relative rounded-2xl `}>
        {children}

      
    </div>
  )
}

interface FrontProps {
  path: string;
  text: string; // You might want to replace 'any' with the actual type of your 'data' prop
}

function Front({path,text}:FrontProps){

  return(
    <div className={` bg-purple-500 shadow-4xl ${styles.card__side} ${styles.card__sideFront} absolute w-full h-full rounded-2xl p-4 `}>
          <img className="h-48" src={path} alt="this is an image" />
          <li className="mt-10">{text}</li>
  </div>
  )
}

interface BackProps{
  link:string;
}

function Back({link}:BackProps){

  return(
    <div className={`  rounded-lg shadow-xl ${styles.card__side} ${styles.card__sideBack} absolute h-full w-full rounded-2xl p-4`}>
          <div className="h-full flex justify-center items-center">
            <a href={link} target="_blank" className="bg-indigo-800 p-4 rounded-md"> View on github</a>
          </div>
          
    </div>
  )

}

Card.Front = Front;
Card.Back = Back;

export default Card;

