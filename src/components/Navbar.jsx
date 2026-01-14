import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="w-full sticky top-0 z-50 px-6 py-4">
            <ul className="flex justify-end items-center space-x-8 list-none text-sm md:text-base">
                <li>
                    <Link to="/" className="text-gray-800 hover:text-black no-underline">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-gray-800 hover:text-black no-underline">About</Link>
                </li>
                <li>
                    <Link to="/works" className="text-gray-800 hover:text-black no-underline">Works</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
