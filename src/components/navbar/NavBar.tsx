import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="absolute top-[60%]">
            <div className="font-[GilroyBold] tracking-tight text-SecondaryColor text-xl">
                <div className="w-fit hover:text-TertiaryColor transition-all duration-300"><NavLink to={"/about"} className={"aria-[current=page]:text-Black"}>ABOUT ME</NavLink></div>
                <div className="w-fit mt-2 hover:text-TertiaryColor transition-all duration-300"><NavLink to={"/skills"} className={"aria-[current=page]:text-Black"}>SKILLS</NavLink></div>
                <div className="w-fit mt-2 hover:text-TertiaryColor transition-all duration-300"><NavLink to={""} className={"aria-[current=page]:text-Black"}>WORKS</NavLink></div>
                <div className="w-fit mt-2 hover:text-TertiaryColor transition-all duration-300"><NavLink to={""} className={"aria-[current=page]:text-Black"}>JOURNEY</NavLink></div>
                <div className="w-fit mt-2 hover:text-TertiaryColor transition-all duration-300"><NavLink to={""} className={"aria-[current=page]:text-Black"}>CONTACT ME</NavLink></div>
            </div>
        </div>
    )
}

export default NavBar
