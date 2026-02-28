import style from './Home.module.css'
import Navbar from './Navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

interface Ihomeprops{
    dark: boolean
    setDark: (value: boolean) => void
}
export default function Home({dark, setDark}: Ihomeprops){
    return(
        <div id='home' className={style.body}>
            <div>
                <Navbar dark={dark} setDark={setDark}/>
            </div>
            <div className={style.tengah}>
                <h2>Full Stack Web Developer</h2>
                <h1 className={style.h1home}>Michael Christian Soegiharto.</h1>
                <div className={style.walkingtextcontainer}>
                    <div className={style.walkingtext}>Hi, Im Michael and I'm Open to Work / Projects / Collaboration</div>
                </div>
            </div>
            <div className={style.icons}>
                <FaGithub size={32}/>
                <FaLinkedin size={32} color="rgb(64, 111, 181)"/>
                <MdEmail size={32}/>
            </div>
        </div>
    )
}