import Project from "./project";
import './Projects_section.css'
import { themeContext } from '../../App'
import { useContext } from "react";

function ProjectsSection() {
    const {theme} = useContext(themeContext)
    return (
        <main id="projects" className={`${theme==='light'?'bg-white':'bg-darkSectionBG'} section projectsSection shadow-2xl  flex flex-col items-center justify-center py-[150px] gap-12 2xs:gap-16 xl:gap-32 `}>
            <p className={`${theme === "dark" ? 'opacity-70' : ''} font-semibold text-3xl 2xs:text-4xl  xl:text-5xl autoShowOpacity`}>Featured projects</p>
            <div className="flex flex-col items-center gap-16 2xs:gap-20   ">
                <Project title='Casio Concept Store' desc="A Casio store concept focused on high-end UI/UX. Leveraged Vue.js reactivity and Tailwind's utility classes to implement custom scroll-driven animations and a responsive product slider" img='/images/Screenshot 2026-05-14 102149.png' />

                <Project title='Blog App' desc='A full-featured Blog Application built with Vue 3 and Pinia. It includes a complete authentication system, post management (CRUD), category filtering, and pagination, focusing on clean state management and seamless user flow.' img='images/Screenshot 2026-05-14 102752.png' />

                <Project title='GeoConnect Interface' desc="An interactive 'Contact Us' interface with a customized React Leaflet map. It features a fixed-location marker for precision and allows users to easily view and copy the exact geographic coordinates (Lat/Lng) for navigation." img='images/Screenshot 2026-05-14 102951.png' />
            </div>
        </main>
    );
}

export default ProjectsSection;