import style from './Contact.module.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'

export default function Contact() {
    return (
        <div id='contact' className={style.contactContainer}>
            <div className={style.content}>
                <h1 className={style.title}>Leave a Message !</h1>
                <p className={style.subtitle}>Open for Inquiries, Discussions, Proposals, Comments, or even Greetings !</p>

                <form className={style.form}>
                    <div className={style.formRow}>
                        <div className={style.inputGroup}>
                            <label>Your Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className={style.inputGroup}>
                            <label>Email Address</label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className={style.inputGroup}>
                        <label>Your Message</label>
                        <textarea placeholder="Message" rows={3}></textarea>
                    </div>

                    <button className={style.sendBtn} type="button">
                        Send <FaArrowRight className={style.arrow} size={12} />
                    </button>
                </form>
            </div>

            <footer className={style.footer}>
                <div className={style.socials}>
                    <FaEnvelope size={18} />
                    <FaGithub size={18} />
                    <FaLinkedin size={18} />
                </div>
                <div className={style.copyright}>
                    © Mike 2024
                </div>
                <div className={style.scrollTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Scroll Top &uarr;
                </div>
            </footer>
        </div>
    )
}
