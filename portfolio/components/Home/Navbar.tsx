import style from './Navbar.module.css'
import { useState, useEffect } from 'react'

interface INavbarprops {
    dark: boolean,
    setDark: (value: boolean) => void
}

export default function Navbar({ dark, setDark }: INavbarprops) {
    const [active, setActive] = useState('About')
    const [isScrolled, setIsScrolled] = useState(false)

    const links = ['Home', 'About', 'Projects', 'Contact']

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY
            setIsScrolled(scrollPos > 50)

            const sections = ['home', 'about', 'projects', 'contact']
            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i]
                const element = document.getElementById(sectionId)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= window.innerHeight * 0.35) {
                        const capitalizedId = sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
                        setActive(capitalizedId)
                        break;
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={style.navbar}>
            <div className={style.left}>
                <h3>Mike</h3>
            </div>
            <div className={`${style.middle} ${isScrolled ? style.island : ''}`}>
                {links.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className={active === link ? style.active : ''}
                        onClick={() => setActive(link)}
                    >
                        {link}
                    </a>
                ))}
            </div>
            <div className={style.right}>
                <button onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</button>
            </div>
        </nav>
    )
}