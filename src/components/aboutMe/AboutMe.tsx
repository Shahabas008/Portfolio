import Me from "../../assets/images/me.jpg";
const AboutMe = () => {
  return (
    <div>
      <div className="grid grid-cols-2 pt-10">
        <div>
          <div className="text-TertiaryColor font-[GilroySemiBold] text-9xl">
            FREELANCE
          </div>
          <div className="absolute left-[8%] text-Black font-[GilroySemiBold] text-6xl pl-8 pt-2">
            SOFTWARE DEVELOPER
          </div>
        </div>
        {/* image */}
        <div>
          <div className="flex justify-center items-center bg-gradient-to-t from-PrimaryColor">
            <img src={Me} alt="Image" width={"405%"} className="flex items-center justify-center " />
          </div>
          <p className="absolute bottom-[12%] text-sm text-center font-[GilroySemiBold] text-SecondaryColor pr-8">
            Welcome to my portfolio! I'm a versatile software developer specializing in creating powerful applications, sleek websites, and captivating designs. With a blend of technical expertise and a keen eye for aesthetics, I bring ideas to life with seamless functionality and striking visuals. Explore my portfolio to see how I can turn concepts into impressive digital solutions!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
