import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "./Navbar/routes";


const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));
    return (
        <div className="bg-SecondaryColor px-[5%] py-[2%] flex items-center justify-between">

            {/* Logo Image */}
            <img src={Logo} width={30} alt="Logo" />

            {/* NavLinks */}
            <div className="hidden lg:block lg:ml-[50vh] lg:w-[60vh] flex justify-between items-center">
                <NavLink to="/" className="text-[16px] font-[cabinetBold] aria-[current=page]:text-PrimaryColor aria-[current=page]:underline underline aria-[current=page]:underline-offset-[16px] hover:-translate-y-2 duration-500">Home</NavLink>
                <NavLink to="/Services" className="text-[16px] font-[cabinetBold] aria-[current=page]:text-PrimaryColor aria-[current=page]:underline aria-[current=page]:underline-offset-[16px] text-TertiaryColor hover:-translate-y-2 duration-500">Services</NavLink>
                <NavLink to="/Works" className="text-[16px] font-[cabinetBold] aria-[current=page]:text-PrimaryColor aria-[current=page]:underline aria-[current=page]:underline-offset-[16px] text-TertiaryColor hover:-translate-y-2 duration-500">Works</NavLink>
                <NavLink to="/AboutUs" className="text-[16px] font-[cabinetBold] aria-[current=page]:text-PrimaryColor aria-[current=page]:underline aria-[current=page]:underline-offset-[16px] text-TertiaryColor hover:-translate-y-2 duration-500">About Us</NavLink>
            </div>

            {/* Ctc Button */}
            <div>
                <div className="hidden lg:block border-2 lg:px-[48px] lg:py-[24px] md:px-[24px] md:py-[12px] border-PrimaryColor rounded-[50px] font-[GilroySemiBold] text-[16px] text-PrimaryColor cursor-pointer hover:bg-PrimaryColor hover:text-White transition-colors duration-500">HIRE US</div>
            </div>


            <div ref={ref} className="lg:hidden">
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-PrimaryColor fixed left-0 shadow-4xl right-0 top-[15vh] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
                        >
                            <ul className="grid gap-2">
                                {routes.map((route, idx) => {
                                    return (
                                        <motion.li
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1 + idx / 10,
                                            }}
                                            key={route.title}
                                            className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                                        >
                                            <a
                                                onClick={() => setOpen((prev) => !prev)}
                                                className={
                                                    "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                                                }
                                                href={route.href}
                                            >
                                                <span className="flex gap-1 text-lg">{route.title}</span>
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>

    )
}

export default NavBar
