import Dart from "../../assets/images/dart_image_black.png";
import Bloc from "../../assets/images/bloc_image.png";
import Flutter from "../../assets/images/flutter_image_black.png";
import Hive from "../../assets/images/hive_image_black.png";
const Skills = () => {
    const skillChangingButton = [
        {
            "name": "APP DEVELOPMENT",
            "image": <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                <path d="M20 21l2 -2l-2 -2" />
                <path d="M17 17l-2 2l2 2" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
            </svg>,
        },
        {
            "name": "WEB DEVELOPMENT",
            "image": <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
                <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                <path d="M16 9h2" />
            </svg>,
        },
        {
            "name": "DESIGN",
            "image": <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>,
        },
    ];

    const appDevelopmentTechnologies = [
        {
            "name": "DART",
            "image": Dart,
        },
        {
            "name": "FLUTTER",
            "image": Flutter,
        },
        {
            "name": "BLOC",
            "image": Bloc,
        },
        {
            "name": "HIVE",
            "image": Hive,
        }
    ];
    return (
        <div>
            <div className="pt-8 pr-8 grid grid-cols-4">
                <div className="col-span-3">
                    <div className="text-TertiaryColor font-[GilroySemiBold] text-9xl">
                        TECHNOLOGIES
                    </div>
                    <p className="w-[80%] pt-8 text-sm font-[GilroySemiBold] text-SecondaryColor">Explore my technical prowess—a collection of programming languages, frameworks, and tools meticulously crafted for robust applications, websites and stunning web designs. Dive into my skill set, where innovation meets precision in every line of code, shaping digital solutions for tomorrow's world.</p>
                    <div className="w-[80%] flex mt-8">
                        {
                            skillChangingButton.map((Item, Index) => {
                                return <div key={Index} className="w-full h-12 flex justify-center items-center border bg-Black text-White font-Urbanist tracking-widest cursor-pointer hover:shadow-xl hover:bg-TertiaryColor transition-all duration-300">
                                    {Item.name} <span className="ml-2">{Item.image}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className="h-[80vh] flex items-center justify-center overflow-x-auto">
                        {appDevelopmentTechnologies.map((item, index) => (
                            <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center p-4 border border-TertiaryColor rounded-md cursor-pointer hover:rounded-none font-[Urbanist] text-lg shadow-xl hover:shadow-none transition-all duration-300 mr-4">
                                <div className="flex items-center justify-center">
                                    <img src={item.image} alt="IMAGE" className="w-32 h-32 object-contain" />
                                </div>
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills


