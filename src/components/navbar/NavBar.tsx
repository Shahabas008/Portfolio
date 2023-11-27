import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="absolute top-[55%]">
            <div className="font-[GilroyBold] tracking-tight text-SecondaryColor text-xl">
                <div className="w-fit hover:text-Black transition-all duration-300 aria-[current=page]:text-Black"><NavLink to={""}>ABOUT ME</NavLink></div>
                <div className="w-fit mt-2 hover:text-Black transition-all duration-300 aria-[current=page]:text-Black"><NavLink to={""}>SKILLS</NavLink></div>
                <div className="w-fit mt-2 hover:text-Black transition-all duration-300 aria-[current=page]:text-Black"><NavLink to={""}>WORKS</NavLink></div>
                <div className="w-fit mt-2 hover:text-Black transition-all duration-300 aria-[current=page]:text-Black"><NavLink to={""}>JOURNEY</NavLink></div>
                <div className="w-fit mt-2 hover:text-Black transition-all duration-300 aria-[current=page]:text-Black"><NavLink to={""}>CONTACT ME</NavLink></div>
            </div>
        </div>
    )
}

export default NavBar
