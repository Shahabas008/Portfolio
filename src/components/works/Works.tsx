import Iconia from "../../assets/images/Iconia_mockup1.png"
import PatientReminder from "../../assets/images/patient-reminder-mockup.png"
import ClubHouz from "../../assets/images/ClubHouz-mockup.png"
import TokenCare from "../../assets/images/TokenCare-mockup.png"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
const Works = () => {

    const workContainers = [
        {
            name: "ICONIA TECHNOLOGIES - LANDING PAGE",
            image: Iconia,
            link: "https://iconia.ae/",
        },
        {
            name: "PATIENT CONSULTATION REMINDER - SOFTWARE",
            image: PatientReminder,
        },
        {
            name: "CLUB HOUZ - LANDING PAGE",
            image: ClubHouz,
            link: "https://shahabas008.github.io/club-houz/",
        },
        {
            name: "TOKENCARE LITE - SOFTWARE",
            image: TokenCare,
        },
    ]

    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <div>
            <div className="pt-8 pr-8 grid grid-cols-2">
                <motion.div
                    animate={{
                    }}
                    ref={ref}
                    style={{
                        transform: inView ? "none" : "translateX(1.5rem)",
                        opacity: inView ? 1 : 0,
                        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                    }}>
                    <div className="">
                        <div className="text-TertiaryColor font-[GilroySemiBold] text-9xl">
                            PROJECTS
                        </div>
                        <p className="pt-8 text-sm font-[GilroySemiBold] text-SecondaryColor">A curated display of my diverse projects and software endeavors. Explore a spectrum of my technical expertise showcased through applications, websites, and innovative digital solutions. Each entry represents a fusion of skills, creativity, and precision, reflecting my dedication to crafting impactful software experiences.</p>
                    </div>
                </motion.div>

                <div className="w-[100%] h-[79vh] overflow-y-auto no-scrollbar bg-gradient-to-t from-PrimaryColor to-transparent">
                    <AnimatePresence>

                        {workContainers.map((Item, index: number) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                <a href={Item.link} target="_blank">
                                    <div key={index} className="bg-PrimaryColor w-full h-[46vh] rounded-md cursor-pointer mb-24 pt-32" style={{
                                        backgroundImage: `url(${Item.image})`, backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <div className="h-full w-full pt-[28%] font-Urbanist font-bold text-TertiaryColor text-center tracking-widest bg-gradient-to-t from-PrimaryColor to-transparent">
                                            {Item.name}
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}

                    </AnimatePresence>
                </div>
            </div>
        </div >
    )
}

export default Works
