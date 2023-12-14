import { useEffect } from "react";
import Me from "../../assets/images/me.svg";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
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
    <div className="grid grid-cols-2 pt-8 pr-8">
      <motion.div
        animate={{
        }}
        ref={ref}
        style={{
          transform: inView ? "none" : "translateX(1.5rem)",
          opacity: inView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}>
        <div>
          <div className="text-TertiaryColor font-[GilroySemiBold] text-9xl">
            FREELANCE
          </div>
          <div className="left-[8%] text-Black font-[GilroySemiBold] text-6xl pl-8 pt-2">
            SOFTWARE DEVELOPER
          </div>
        </div>
      </motion.div>

      {/* image */}
      <motion.div
        animate={{
        }}
        ref={ref}
        style={{
          transform: inView ? "none" : "translateX(1.5rem)",
          opacity: inView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}>
        <div className="flex items-center justify-center">
          <img src={Me} alt="Image" className="w-[95%] flex items-center justify-start" />
        </div>
        <p className="absolute bottom-[12%] text-sm text-center font-[GilroySemiBold] text-SecondaryColor pr-8">
          Welcome to my portfolio! I'm a versatile software developer specializing in creating powerful applications, sleek websites, and captivating designs. With a blend of technical expertise and a keen eye for aesthetics, I bring ideas to life with seamless functionality and striking visuals. Explore my portfolio to see how I can turn concepts into impressive digital solutions!
        </p>
      </motion.div >
    </div>

  )
}

export default AboutMe
