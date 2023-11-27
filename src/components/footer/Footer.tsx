
const Footer = () => {
    return (
        <div className="absolute bottom-0 font-[GilroyMedium] tracking-tight">
            <hr style={{
                color: '#D5D2D0',
                height: '1px',
            }} />
            <div className="flex items-center py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 icon icon-tabler icon-tabler-location-filled" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z" stroke-width="0" fill="currentColor" />
                </svg>
                INDIA, KERALA
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-8 mr-2 icon icon-tabler icon-tabler-phone-calling" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#030303" fill="030303" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7l0 .01" />
                    <path d="M18 7l0 .01" />
                    <path d="M21 7l0 .01" />
                </svg>
                +91 6238 54 3663
            </div>
        </div>
    )
}

export default Footer
