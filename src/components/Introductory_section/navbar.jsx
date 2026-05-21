import { useContext, useState } from "react"

import { themeContext } from "../../App"


export default function Navbar() {


    const [dropDown, setDropDown] = useState(false)
    const [selection, setSelection] = useState('about')
    const { theme, toggleTheme } = useContext(themeContext)


    return (
        <main className="z-10 fixed flex flex-col  w-full   ">



            <section className="md:hidden">
                <div className={`${theme === 'light' ? dropDown ? 'bg-[#dbdde0]' : 'bg-white' : dropDown ? 'bg-[#353e4b] ' : 'bg-darkSectionBG'} transition-all duration-500 w-full flex items-center justify-between h-[80px]   px-5 2xs:px-6 `}>
                    <i onClick={toggleTheme} className={`${theme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon'} ${dropDown ? 'scale-100' : 'scale-0'}  text-[26px] cursor-pointer hover:scale-110 transition-all duration-300`}></i>

                    <button onClick={() => { dropDown ? setDropDown(false) : setDropDown(true) }} className={` w-10 h-10   relative flex flex-col justify-center gap-3 items-center `}>
                        <p className={`${dropDown ? 'rotate-45 absolute' : 'rotate-0 relative'} ${theme === 'light' ? 'bg-lightText' : 'bg-white'} transition-all duration-500  h-[3px] w-full `}></p>
                        <p className={`${dropDown ? '-rotate-45 absolute' : 'rotate-0 relative'} ${theme === 'light' ? ' bg-lightText' : 'bg-white'} transition-all duration-500 h-[3px] w-full `}></p>
                    </button>

                </div>


                <ul className={`${dropDown ? 'opacity-100 translate-y-0  rounded-bl-[50px] rounded-br-[50px]' : '  translate-y-5  opacity-0 rounded-bl-[0px]  rounded-br-[0px]'} ${theme === 'light' ? ' bg-[#dbdde0]' : ' bg-[#353e4b]'} transition-all top-full duration-500 flex  flex-col gap-10  text-3xl w-full items-center absolute       pt-10 pb-20`}>
                    <a onClick={() => { setDropDown(false) }} href="#about">About Me</a>
                    <a onClick={() => { setDropDown(false) }} href="#skills">Skills</a>
                    <a onClick={() => { setDropDown(false) }} href="#projects">Projects</a>
                    <a onClick={() => { setDropDown(false) }} href="#contact">Contact</a>
                </ul>
            </section>


            <section className={`${theme === 'light' ? 'bg-white ' : 'bg-darkSectionBG font-semibold'} relative hidden  md:flex items-center justify-center  px-10 shadow-md h-[80px]`}>
                <ul className="navBar flex items-center justify-center gap-12 text-[16px] lg:gap-16 lg:text-lg  ">
                    <a onClick={() => { setSelection('about') }} href="#about" className={`${selection === 'about' ? 'choosen' : ''}`}>About Me</a>
                    <a onClick={() => { setSelection('skills') }} href="#skills" className={`${selection === 'skills' ? 'choosen' : ''}`}>Skills</a>
                    <a onClick={() => { setSelection('projects') }} href="#projects" className={`${selection === 'projects' ? 'choosen' : ''}`}>Projects</a>
                    <a onClick={() => { setSelection('contact') }} href="#contact" className={`${selection === 'contact' ? 'choosen' : ''}`}>Contact</a>
                </ul>
                <i onClick={toggleTheme} className={`${theme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon'}  absolute right-7 text-lg lg:right-10 lg:text-xl cursor-pointer hover:scale-110 transition-all duration-300`}></i>
            </section>


        </main>
    )
}