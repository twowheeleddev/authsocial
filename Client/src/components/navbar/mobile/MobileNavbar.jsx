import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../../../providers/ThemeProvider'
import { logo } from '../../../assets/index'
import { useUser } from '../../../providers/MockProvider'
import ThemeToggle from '../../ThemeToggle'

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { isDarkMode } = useTheme()
	const user = useUser()

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className="relative z-50 flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
			{/* Logo */}
			<Link to="/">
				<img src={logo} alt="Social Shelters Logo" className="h-10" />
			</Link>

			{/* Welcome Message */}
			{user && (
				<p className="text-sm font-medium text-gray-600 dark:text-gray-300">
					Welcome, {user.name}!
				</p>
			)}

			{/* Dropdown Menu Button */}
			<button
				onClick={toggleMenu}
				className="text-2xl text-gray-800 dark:text-gray-200"
				aria-label="Toggle Menu"
			>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div
					className={`absolute top-16 right-4 w-48 bg-${
						isDarkMode ? 'gray-800' : 'white'
					} rounded-lg shadow-lg border border-gray-300 dark:border-gray-700`}
				>
					<ul className="flex flex-col space-y-4 p-4">
						<li>
							<Link
								to="/"
								onClick={toggleMenu}
								className="block text-lg text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								onClick={toggleMenu}
								className="block text-lg text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								onClick={toggleMenu}
								className="block text-lg text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								onClick={toggleMenu}
								className="block text-lg text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/donate"
								onClick={toggleMenu}
								className="block text-lg text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
							>
								Donate
							</Link>
						</li>
						<li>
							<ThemeToggle />
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default MobileNavbar
