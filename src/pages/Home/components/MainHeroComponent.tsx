import ExclaramationIcon from "../../../assets/images/exclamaration_ic.svg";
import RedUnderlineIcon from "../../../assets/images/red_underline_ic.svg";
import BackgroundPattern from "../../../assets/images/mainhero-pattern.png";
import PersonImage from "../../../assets/images/person.png";
import ArrowIcon from "../../../assets/images/arrow2_ic.svg"
import Insta from "../../../assets/images/insta_ic.svg";
import LinkedIn from "../../../assets/images/linkedIn_ic.svg";
import Whatsapp from "../../../assets/images/whatsapp_ic.svg";
import Dribble from "../../../assets/images/dribble_ic.svg";
import Gmail from "../../../assets/images/gmail_ic.svg";
import AsteroidIcons from "../../../assets/images/asteroid_ic.svg";
import IconiaLogo from "../../../assets/images/iconia_logo_name.png";
import ClubHouzLogo from "../../../assets/images/clubhouzlogo.png";
import PicmaticLogo from "../../../assets/images/picmatic.png";
import MIPS from "../../../assets/images/mips.png";


const MainHeroComponent = () => {
  const socialMediaIcons = [
    {
      Icon: Insta,
      Link: "https://www.instagram.com/_copy.and.paste/"
    },
    {
      Icon: LinkedIn,
      Link: "https://www.linkedin.com/in/shahabas-paramban-a44570245/"
    },
    {
      Icon: Whatsapp,
      Link: "https://wa.me/0916238543663?text=HI"
    },
    {
      Icon: Dribble,
      Link: "https://dribbble.com/Shahabas008"
    },
    {
      Icon: Gmail,
      Link: "mailto:shahabaspm500@gmail.com"
    },

  ]

  const PartnerLogo = [
    {
      Logo: IconiaLogo,
    },
    {
      Logo: ClubHouzLogo,
    },
    {
      Logo: PicmaticLogo,
    },
    {
      Logo: MIPS,
    },
  ]
  return (
    <div className="h-auto">
      {/* <img src={BackgroundPattern} width={"80%"} alt="" className="translate-x-[50%] -translate-y-[20%]" /> */}

      <div className="px-[15%] text-center leading-[120%] flex items-center justify-center w-full font-[cabinetExtrabold] text-[48px] text-Black">
        Develop robust solutions with software development professionals.
      </div>

      <div className="flex items-center justify-center w-full font-[GilroySemiBold] text-[16px] text-TertiaryColor">
        Minimize risks and maximize rewards by hiring professionals for your critical project.
      </div>

      {/* Exclamation mark icon */}
      {/* <div className="translate-x-0 translate--0 left-[19.5vh]">
    <img src={ExclamationIcon} alt="Exclamation Mark" />
       </div> */}

      {/* Red underline icon */}
      {/* <div className="absolute">
    <img src={RedUnderlineIcon} alt="Red Underline" />
      </div> */}


      <div className="grid grid-cols-4">

        {/* Person image */}
        <div className="top-0 w-[50vh] mt-[40px]">
          <img src={PersonImage} alt="Person" />
        </div>

        <div className="col-span-3">

          {/* image and arrow */}
          <div className="flex items-start justify-start">
            <img src={ArrowIcon} alt="" className="-translate-x-16" /><div className="mt-[40px] bg-PrimaryColor w-[25%] px-8 py-4 rounded-[50px] text-center font-[GilroySemiBold] text-[20px] text-SecondaryColor cursor-pointer hover:-translate-y-2 duration-500 hover:shadow-lg">
              Start a chat now
            </div>
          </div>

          {/* Introduction */}
          <div className="text-[20px] leading-[25px] pr-[10%] text-Black font-[GilroyMedium]">
            Hey there! I'm<span className="font-[GilroyExtraBold]"> Shahabas Paramban</span>, a freelance software developer based in <span className="font-[GilroyExtraBold]">Kerala, India</span>.  Driven by innovation, I tackle projects across <span className="font-[GilroyExtraBold] text-PrimaryColor">web development, app development, and UI/UX design</span>. A proud winner of <span className="font-[GilroyExtraBold]">2nd place at the 2023 National Hackathon</span>, I collaborate with a <span className="font-[GilroyExtraBold] text-PrimaryColor">team of 5 other developers</span> to bring your digital dreams to life.  Let's connect and create something amazing!
          </div>
          {/* social Media icons */}
          <div className=" flex items-center justify-start mt-[8%]">
            {socialMediaIcons.map((items: any, index: number) => {
              return (
                <div key={index} className="mr-[2%]">
                  <a href={items.Link} target="_blank">
                    <img src={items.Icon} width={"80%"} alt="Social media icons" className="cursor-pointer hover:-translate-y-2 duration-500" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Paragraph */}
          <div className="grid grid-cols-2 mt-[2%]">
            <div className="text-[16px] font-[GilroyMedium] text-Black leading-[20px]">
              Achieved a 100% success rate on 20+ software projects, demonstrating my expertise our web and application development.
            </div>
            <div className="flex justify-end mr-[5%]">
              <img src={AsteroidIcons} alt="icon" />
            </div>
          </div>

          {/* Partner Logo */}
          <div className="flex items-center ml-[5%] mt-[136px]">
            {PartnerLogo.map((logo: any, index: number) => {
              return (
                <div key={index} className="">
                  <img src={logo.Logo} width={"50%"} alt="partners logo" />
                </div>
              );
            })}
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeroComponent
