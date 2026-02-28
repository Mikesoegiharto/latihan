import style from './Projects.module.css'
import Robofriends from '../../src/assets/Robofriends.jpeg'
import Todo from '../../src/assets/Todo.jpeg'
import { FaArrowRight, FaGithub } from 'react-icons/fa'


export default function Projects() {
    return (
        <div id='projects' className={style.bodyprojects}>
            <div className={style.bodyatas}>
                <div className={style.bodyataskiri}>
                    <img className={style.gambarrobo} src={Robofriends} />
                </div>
                <div className={style.bodyataskanan}>
                    <div className={style.upperatas}>
                        <p className={style.front}>Front-End Focused</p><br></br>
                        <p className={style.application}>Robofriends Application</p>
                        <p className={style.ztm}>ZTM Academy - Full Web Developer Course</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className={style.loweratas}>
                        <div className={style.lowerataskiri}>
                            <div className={style.detailsWrapper}>
                                <span className={style.detailsText}>Details</span>
                                <FaArrowRight className={style.arrow} size={14} />
                            </div>
                        </div>
                        <div className={style.lowerataskanan}>
                            <FaGithub size={24} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.bodybawah}>
                <div className={style.bodybawahkiri}>
                    <img className={style.gambartodo} src={Todo} />
                </div>
                <div className={style.bodybawahkanan}>
                    <div className={style.upperbawah}>
                        <p className={style.frontbawah}>Front-End Focused</p><br></br>
                        <p className={style.applicationtodos}>Todos Application</p>
                        <p className={style.purwadhika}>Purwadhika</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className={style.lowerbawah}>
                        <div className={style.lowerbawahkiri}>
                            <div className={style.detailsWrapper}>
                                <span className={style.detailsText}>Details</span>
                                <FaArrowRight className={style.arrow} size={14} />
                            </div>
                        </div>
                        <div className={style.lowerbawahkanan}>
                            <FaGithub size={24} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}