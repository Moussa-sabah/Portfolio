import { useContext } from "react";
import { themeContext } from '../../App'

function Project(props) {

    const { theme } = useContext(themeContext)

    return (<main className={`${theme === 'light' ? '   border-gray-300' : 'border-gray-500'}  autoShowOpacity  border-b  pb-6 md:pb-3  lg:pb-6  flex flex-col md:flex-row gap-5   `}>

        <img src={props.img} alt="" className={`${theme === 'light' ? '   border-gray-300' : 'border-gray-400'} border    w-full  md:w-1/3   rounded-md object-contain  `} />
        <div className="  flex flex-col justify-between  gap-5  xl:gap-2 ">
            <div className="flex flex-col gap-2 sm:gap-3     ">
                <h1 className="text-lg 2xs:text-[19px] font-semibold sm:text-xl xl:text-2xl xl:font-bold">{props.title}</h1>
                <p className="text-sm xl:text-[16px]"> {props.desc}</p>
            </div>
            <div className="flex items-center justify-end gap-3 ">
                <button className="border-[#FF6464] border w-8 h-8 flex items-center justify-center rounded-md">
                    <i class="fa-brands fa-github text-xl"></i>
                </button>
                <button className="bg-[#FF6464] w-8 h-8  flex items-center justify-center rounded-md">
                    <span class="material-symbols-outlined linkIcon text-xl font-bold text-white">
                        arrow_outward
                    </span>
                </button>

            </div>
        </div>

    </main>);
}

export default Project;