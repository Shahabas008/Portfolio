
const Header = () => {
    return (
        <div>
            <div className="pl-8 flex justify-between h-[8vh]">
                <div className="font-Urbanist flex items-center font-bold text-3xl">SHAHABAS PARAMBAN</div>
                <div className="flex items-center bg-Black  text-White font-Urbanist font-semibold tracking-widest pl-8 pr-4 cursor-pointer">
                    HIRE ME
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right " width="30" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 7l-10 10" />
                        <path d="M8 7l9 0l0 9" />
                    </svg>
                </div>
            </div>
            <hr className="ml-8" style={{
                color: '#a6a6a6',
                height: '1px',
            }} />
        </div>
    )
}

export default Header
