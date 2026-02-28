import style from './about.module.css'
import Mike from '../../src/assets/mike.jpeg'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiVite, SiTailwindcss, SiAxios, SiExpress, SiPostgresql, SiPrisma } from 'react-icons/si'
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGithub, FaNpm } from 'react-icons/fa'
import { SiJavascript, SiPostman } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

export default function About(){
    return(
        <div id='about' className={style.bodyabout}>

            <div className={style.bingkaiprofil}>
                <img className={style.profil} src={Mike} />
            </div>
            <div className={style.bio}>
                <div className={style.nama}>
                    <div className={style.namakiri}>
                        <h2>Name</h2>
                        <h2>Michael Christian Soegiharto</h2>
                    </div>
                    <div className={style.namatengah}>
                        <h2>Location</h2>
                        <h2>Jakarta, Indonesia</h2>   
                    </div>
                    <div className={style.iconkanan}>
                        <FaGithub size={32}/>
                        <FaLinkedin size={32} color="rgb(64, 111, 181)"/>
                        <MdEmail size={32}/>
                    </div>
                </div>

                <div className={style.deskripsi}>
                    <p>Hi 👋, I'm Michael, and I'm currently building my career as a Web Developer.</p>
                    <br></br>
                    <p>As someone who's always learning, I enjoy exploring and expanding my knowledge through various resources such as Udemy, YouTube, blogs, official documentation, and open-source platforms. I’m passionate about building and creating, and I truly value great web design, as I also have a growing interest in web developing.</p>
                    <br></br>
                    <p>I'm excited and highly motivated to build impactful projects and continue growing my career in the tech industry.</p>
                </div>
                <br></br>
                <br></br>

                <div className={style.garis}>
                    <hr></hr>
                </div>
                <br></br>

                <div className={style.skill}>
                    <div className={style.skillicons}>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <SiJavascript />
                        <SiVite />
                        <FaReact />
                        <SiTailwindcss />
                        <SiAxios />
                         <FaNode />
                         <SiExpress />
                         <TbApi />
                         <SiPostgresql />
                         <SiPrisma />
                         <FaGithub />
                         <FaNpm />
                         <SiPostman />
                    </div>
                </div>
                
            </div>
        </div>
    )
}