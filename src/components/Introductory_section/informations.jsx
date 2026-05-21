import { useContext } from "react"
import { themeContext } from "../../App"


export default function Inforamtions() {

    const { theme } = useContext(themeContext)


    return (
        <div className="  section informationsSection    flex flex-col md:flex-row h-full md:pb-[150px] md:pt-[230px] xl:py-0 xl:pt-[80px]    items-center justify-center  gap-8 2xs:gap-10 ">
            
                <img src='/images/WhatsApp Image 2026-05-17 at 4.44.58 PM.jpeg' alt="" className={`${theme === 'light' ? 'border-lightText' : 'border-white'} inforamtionAutoShow  md:hidden border-r-[2px] border-t-[2px]  p-1 h-[140px] 2xs:h-[170px] w-[140px] 2xs:w-[170px] xs:h-[200px] xs:w-[200px]   object-cover rounded-full`} />
        
            <div className=" inforamtionAutoShow flex flex-col items-center gap-5 2xs:gap-7 sm:gap-8 md:items-start md_lg:gap-11 xl:gap-14 ">
                <div className="text-3xl 2xs:text-4xl xs:text-[40px] sm:text-[45px] md:text-5xl md_lg:text-5xl xl:text-6xl font-semibold flex flex-col items-center md:items-start gap-1 xs:gap-2 sm:gap-3 ">
                    <h1>Hi, I am Moussa,</h1>
                    <h1> Frontend Developer</h1>
                </div>
                <p className={`${theme === 'dark' ? 'font-light' : ''} text-center md:text-start  md_lg:w-11/12 xl:w-9/12  text-[16px] 2xs:text-lg 2xs:leading-[30px] xs:text-[18px] md:text-[20px] md_lg:text-[19px] `}>Frontend Developer focused on building clean and functional web apps. I work with React, Vue, and modern CSS to bring designs to life with solid code.</p>
                <a href=" " className={`${theme === 'light' ? 'downloadResumeBtn_lightShadow' : 'downloadResumeBtn_darkShadow'} downloadResumeBtn overflow-hidden relative  w-44 2xs:w-48 sm:w-56 h-10 sm:h-11 md:w-60  md:h-[50px] bg-[#FF6464] rounded-md  text-white  py-2 2xs:py-3 text-[16px] 2xs:text-lg md:text-xl font-semibold text-center`}>
                    <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full  ">Downlaod Resume</p>
                    <span class="absolute left-1/2 -translate-x-1/2 -top-full opacity-0 material-symbols-outlined  font-semibold text-3xl lg:text-4xl">
                        download
                    </span>
                </a>
            </div>
            <img src='/images/WhatsApp Image 2026-05-17 at 4.44.58 PM.jpeg' alt="" className={` ${theme === 'light' ? 'border-lightText' : 'border-white'} inforamtionAutoShow  hidden md:block border-r-[2px] border-t-[2px]  h-[140px] 2xs:h-[170px] w-[140px] 2xs:w-[170px] md:h-[190px] md:w-[190px] md_lg:w-[230px] md_lg:h-[230px] xl:w-[280px] xl:h-[280px] object-cover rounded-full p-2`} />
        </div>
    )
}