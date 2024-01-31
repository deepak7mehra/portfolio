import { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css"

export default function Card() {
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
        <div className={` bg-purple-500 shadow-4xl ${styles.card__side} ${styles.card__sideFront} absolute w-full h-full rounded-2xl p-4 `}>
          this is another content
        </div>
         <div className={`  rounded-lg shadow-xl ${styles.card__side} ${styles.card__sideBack} absolute h-full w-full rounded-2xl p-4`}>
          this is content
        </div>

      
    </div>
  )
}
