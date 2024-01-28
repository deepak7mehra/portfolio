import styles from "./IntroSection.module.css"
export default function IntroSection() {
  return (
    <div className=" p-4 md:p-0 ">
        <div className={`text-xl -z-10 md:text-4xl font-bold mb-4 ${styles.headingIntro}`}>
            <h1>Hello, my name is Deepak . </h1>
        </div>
        <div>
            <p className="text-xl italic">
                I'm a B.Tech student deeply passionate about <b>competitive programming</b>, contributing to <b> open source </b> project, and exploring the fascinating world of <b>machine learning</b> .
            </p>
        </div>
      
    </div>
  )
}
