import Iconia from "../../assets/images/Iconia.png"
import PatientReminder from "../../assets/images/Patient-reminder.png"
import ClubHouz from "../../assets/images/ClubHouz.png"
import TokenCare from "../../assets/images/TokenCare.png"
const Works = () => {

    const workContainers = [
        {
            name: "ICONIA TECHNOLOGIES - LANDING PAGE",
            image: Iconia,
        },
        {
            name: "PATIENT COSULTATION REMINDER - SOFTWARE",
            image: PatientReminder,
        },
        {
            name: "CLUB HOUZ - LANDING PAGE",
            image: ClubHouz,
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
                <div className="bg-[#fafafa]-4 w-[100%] h-[79vh] overflow-y-auto no-scrollbar ">
                    {workContainers.map((Item, index: number) => {
                        return <div key={index} className="bg-PrimaryColor w-full h-[46vh] rounded-md cursor-pointer mb-8 " style={{
                            backgroundImage: `url(${Item.image})`, backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            asdfasdf
                        </div>
                    })}


                </div>
            </div>
        </div >
    )
}

export default Works
