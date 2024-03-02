import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto text-white">
            <h1 className="w-full text-3xl font-bold text-[white] m-4"><Link to="/">Neversoft</Link></h1>
            <ul className="hidden md:flex">
                <li className="p-4 hover:text-blue-500"><Link to="/">Accueil</Link></li>
                <li className="p-4 hover:text-blue-500"><Link to="/team">Team</Link></li>
                <li className="p-4 hover:text-blue-500"><Link to="/inscription">Inscription</Link></li>
                <li className="p-4 hover:text-blue-500"><Link to="/tarifs">Tarifs</Link></li>
                <li className="p-4 hover:text-blue-500"><Link to="/contact">Contact</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 " : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-[white] m-4"><Link to="/">Neversoft</Link></h1>
                <ul className="uppercase p-4">
                <li className="p-4 border-b border-gray-600"><Link to="/">Accueil</Link></li>
                <li className="p-4 border-b border-gray-600"><Link to="/team">Team</Link></li>
                <li className="p-4 border-b border-gray-600"><Link to="/inscription">Inscription</Link></li>
                <li className="p-4 border-b border-gray-600"><Link to="/tarifs">Tarifs</Link></li>
                <li className="p-4"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar