import { useContext } from 'react';
import './Contact_section.css'
import { themeContext } from '../../App';


function ContactSection() {

const {theme} = useContext(themeContext)


    return (
        <main id='contact' className={`${theme==='light'?'bg-white':'bg-darkSectionBG'} py-12 md:py-12 xl:py-16 flex flex-col gap-12 items-center justify-center shadow-2xl`}>
            <h1 className={` ${theme === "dark" ? 'opacity-70' : ''} text-4xl md:text-3xl font-semibold`}>Contact</h1>
            <div className="  flex flex-col gap-5 md:gap-6 md_lg:gap-10 font-medium md:flex-row md:text-[16px] xl:text-lg">
                <button className=" flex items-center gap-2">
                    <div className="bg-[#FF6464] contactIcon w-7 h-7  rounded-md flex items-center justify-center"><i class="fa-brands fa-github text-lg md:text-[16px] xl:text-lg"></i></div>
                    GitHub
                </button>
                <button className=" flex items-center gap-2 line">
                    <div className="bg-[#FF6464] contactIcon w-7 h-7 rounded-md flex items-center justify-center"><i class="fa-brands fa-square-linkedin text-lg md:text-[16px] xl:text-lg"></i></div>
                    Linkedin
                </button>

                <button className=" flex items-center gap-2">
                    <div className="contactIcon bg-[#FF6464] w-7 h-7 rounded-md flex items-center justify-center"><i class="fa-solid fa-envelope text-[16px] md:text-sm xl:text-[16px]"></i></div>
                    moussa.s.abdulhassan@gmail.com
                </button>

                <button className=" flex items-center gap-2">
                    <div className="contactIcon bg-[#FF6464] w-7 h-7 rounded-md flex items-center justify-center"><i class="fa-solid fa-phone text-[16px] md:text-sm xl:text-[16px]"></i></div>
                    +964 781 3622692
                </button>

            </div>
        </main>
    );
}

export default ContactSection;