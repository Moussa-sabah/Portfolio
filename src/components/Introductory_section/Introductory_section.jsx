import Navbar from "./navbar";
import './Introductory_section.css'
import Inforamtions from "./informations";
import { themeContext } from "../../App";
import { useContext } from "react";

export default function Introductory_section() {

    const {theme} = useContext(themeContext)

    return (
        <div id="about" className={`${theme==='light'?'bg-white':'bg-darkSectionBG'} shadow-2xl h-screen md:h-fit xl:h-screen `}>
            <Navbar />
            <Inforamtions />
        </div>
    )
}


