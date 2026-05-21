import { useContext } from 'react'
import './Skills_section.css'
import { themeContext } from '../../App'


export default function SkillsSection() {


    const { theme } = useContext(themeContext)

    return (
        <main id='skills' className={` section ${theme === 'light' ? 'bg-white' : 'bg-darkSectionBG'} h-screen md:h-fit md:py-[150px] xl:py-0 xl:pt-[80px]  xl:h-screen  shadow-2xl  flex flex-col md:flex-row gap-8 2xs:gap-14 sm:gap-8 items-center justify-center md:justify-between `}>
            <div className='autoShowOpacity flex flex-col items-center md:items-start gap-8 xl:gap-12 md:w-1/2'>
                <h1 className={`${theme === "dark" ? 'opacity-70' : ''}  text-3xl 2xs:text-4xl xs:text-[40px] sm:text-[45px] md:text-6xl md_lg:text-5xl xl:text-7xl font-semibold`}>My Skills</h1>
                <p className={`${theme === 'dark' ? 'font-light' : ''} text-center md:text-start text-[16px] 2xs:text-lg 2xs:leading-[30px] sm:text-[16px] md:text-[18px]  md_lg:text-[19px]  lg:leading-[35px] xl:text-xl xl:leading-[40px] `}>From crafting layouts with modern CSS to managing states and integrating REST APIs, I develop complete frontend solutions that are both functional and visually appealing.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 autoShowOpacity ">
                <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill skillsContainer`}>
                    <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Logo.png" alt="" />
                </div>
                <div className=" skillsContainer  grid grid-cols-2 gap-4">
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill`}><img src="https://www.w3schools.com/js/img_javascript_480.jpg" className="rounded-md" alt="" /></div>
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill`}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOm4u60oQR6t9DM-jorQugVTthmHLc_ae_g&s" className="rounded-md" alt="" /></div>
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill`}><img src="https://vtecheasy.great-site.net/wp-content/uploads/2024/10/html.png" alt="" /></div>
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/500px-CSS3_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" /></div>
                </div>
                <div className=" skillsContainer  grid grid-cols-2 gap-4">
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill flex items-center justify-center`}><img src="images/tailwind-css-brands-solid (1).png" alt="" /></div>
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill flex items-center justify-center`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/960px-Bootstrap_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" /></div>
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill flex items-center justify-center`}><img src="https://www.svgrepo.com/show/303548/git-icon-logo.svg" alt="" /></div>
                    <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill flex items-center justify-center`}><img src={`images/api-interface-svgrepo-com (${theme === 'light' ? '4' : '5'}).svg`} alt="" className="" /></div>
                </div>
                <div className={`${theme === 'light' ? 'lightShadow' : 'darkShadow'} skill skillsContainer `}>
                    <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" alt="" />
                </div>
            </div>
        </main>
    )
}