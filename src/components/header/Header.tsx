
const Header = () => {
    return (
        <div>
            <div className=" flex justify-between h-[8vh]">
                <div className="font-[GilroyBold] tracking-tight text-Black flex items-center text-2xl cursor-pointer">SHAHABAS PARAMBAN</div>
                <div className="flex items-center bg-Black text-White font-Urbanist tracking-widest pl-8 pr-4 cursor-pointer hover:shadow-xl hover:pl-10 hover:pr-6 transition-all duration-300">
                    HIRE ME
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right " width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 7l-10 10" />
                        <path d="M8 7l9 0l0 9" />
                    </svg>
                </div>
            </div>
            <hr style={{
                color: '#D5D2D0',
                height: '1px',
            }} />
        </div>
    )
}

export default Header
