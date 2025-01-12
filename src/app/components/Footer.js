import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer(){
    return(
        <footer id="contact" className = "bg-[#F4F5FF] bg-cover h-50 flex border-t-2 border-gray-800 text-[#1e3a8a] flex flex-col justify-center items-center">
            <h1 className = "relative text-l font-serif ml-50">Contact</h1>
            <h1 className = "mb-10 relative text-l font-serif px-10"> <a href="mailto:chloetdube@gmail.com" className="text-xl font-serif px-10 text-[#1e3a8a]">chloetdube@gmail.com</a></h1>
           <ul className = "flex flex-row justify-center items-center space-x-4">
            <li>
            <a href="https://github.com/chloe900" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github h-8 w-8 text-m text-[#1e3a8a]"></i>
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/chloe-dube-75a61a257/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin h-8 w-8 text-m text-[#1e3a8a]"></i>
            </a>
            </li>
            
           </ul>
            <p className = "text-gray-800 relative text-xs font-serif px-10">Website Made by: Chloe Dube</p>
        </footer>
    )
}