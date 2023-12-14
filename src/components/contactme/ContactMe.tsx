import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ContactMe = () => {

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
                            REACH ME
                        </div>
                        <p className="pt-8 text-sm font-[GilroySemiBold] text-SecondaryColor">Let's bridge the gap and collaborate! The contact page is your gateway to reaching out directly. Whether you have an exciting project in mind, a collaboration proposal, or simply want to say hello, this is the place to do it.
                            Feel free to drop me a line with your thoughts, inquiries, or any other matter you'd like to discuss. I'm always open to new opportunities, engaging conversations, and building meaningful connections. Looking forward to hearing from you soon!</p>

                    </div>
                </motion.div>

                <div className="p-16">
                    <motion.div
                        animate={{
                        }}
                        ref={ref}
                        style={{
                            transform: inView ? "none" : "translateX(1.5rem)",
                            opacity: inView ? 1 : 0,
                            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                        }}>
                        <div className="w-full h-[60vh] border border-TertiaryColor bg-TertiaryColor p-8 shadow-xl hover:shadow-none transition-all duration-300">
                            <label className="font-Urbanist text-White" htmlFor="">NAME</label>
                            <input className="mb-8 w-full border border-PrimaryColor rounded-md p-1 focus:outline-none focus:ring-0 bg-PrimaryColor" type="text" required />
                            <label className="font-Urbanist text-White" htmlFor="">E-MAIL</label>
                            <input className="mb-8 w-full border border-PrimaryColor rounded-md p-1 focus:outline-none focus:ring-0 bg-PrimaryColor" type="text" required />
                            <label className="font-Urbanist text-White" htmlFor="">MESSAGE</label>
                            <textarea className="mb-16 w-full border border-PrimaryColor rounded-md p-1 focus:outline-none focus:ring-0 bg-PrimaryColor" required />
                            <div className="w-full flex justify-end">
                                <button className="flex items-center px-8 py-2 hover:px-10 border bg-PrimaryColor hover:bg-SecondaryColor font-[GilroySemiBold] shadow-White transition-all duration-300">
                                    SEND
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 icon icon-tabler icon-tabler-send" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#221c16" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 14l11 -11" />
                                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div >
    )
}

export default ContactMe
