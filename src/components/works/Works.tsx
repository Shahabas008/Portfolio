import Iconia from "../../assets/images/Iconia_mockup1.png"
import PatientReminder from "../../assets/images/patient-reminder-mockup.png"
import ClubHouz from "../../assets/images/ClubHouz-mockup.png"
import TokenCare from "../../assets/images/TokenCare-mockup.png"
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

    return (
        <div>
            <div className="pt-8 pr-8 grid grid-cols-2">
                <div className="">
                    <div className="text-TertiaryColor font-[GilroySemiBold] text-9xl">
                        PROJECTS
                    </div>
                    <p className="pt-8 text-sm font-[GilroySemiBold] text-SecondaryColor">A curated display of my diverse projects and software endeavors. Explore a spectrum of my technical expertise showcased through applications, websites, and innovative digital solutions. Each entry represents a fusion of skills, creativity, and precision, reflecting my dedication to crafting impactful software experiences.</p>
                </div>
                <div className="w-[100%] h-[79vh] overflow-y-auto no-scrollbar bg-gradient-to-t from-PrimaryColor to-transparent">
                    {workContainers.map((Item, index: number) => {
                        return <a href={Item.link} target="_blank">
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
                    })}


                </div>
            </div>
        </div >
    )
}

export default Works
