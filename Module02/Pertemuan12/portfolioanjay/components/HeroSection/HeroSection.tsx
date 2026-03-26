import style from "./HeroSection.module.css"

export default function HeroSection(){
    return(
        <section className={style.heroSection}>
            <div className={style.leftSection}>
                <img src="https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/b8e4cd8edb975d23bc21cb8a/4131j-min.jpg" height={"100%"}/>
            </div>
            <div className={style.rightSection}>
                <div className={style.hello}>Hello</div>
                <div className={style.introduction}>I am Michael Christian Soegiharto</div>
                <div className={style.freePik}>Image from FREE PIK</div>
                <a href="#" className={style.readMore}>READ MORE</a>
            </div>
        </section>
    )
}