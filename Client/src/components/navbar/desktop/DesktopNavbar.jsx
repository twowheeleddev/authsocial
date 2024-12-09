import { Link } from 'react-router-dom'
import ThemeToggle from '../../ThemeToggle'
import { useUser } from '../../../providers/MockProvider'
import XmasBorder from '../../borders/XmasBorder'

const DesktopNavbar = () => {
	const user = useUser()

	return (
		<nav
			className="relative flex items-center justify-between p-4 bg-light dark:bg-gray-900 transition-colors duration-300"
			aria-label="Desktop Navigation"
		>
			{/* Christmas Borders */}
			<XmasBorder />

			{/* Social Shelters Title */}
			<div className="text-xl font-bold text-dark-text dark:text-light-text">
				<Link to="/">Social Shelters</Link>
			</div>

			{/* Centered Welcome Message */}
			{user && (
				<div
					className="absolute left-1/2 transform -translate-x-1/2 font-bold text-dark-text dark:text-light-text"
					aria-label="Welcome User"
				>
					Welcome, {user.name}!
				</div>
			)}

			{/* Navigation Links */}
			<div className="flex gap-6 ml-auto">
				{[
					{ to: '/', label: 'Home' },
					{ to: '/shelters', label: 'Shelters' },
					{ to: '/about', label: 'About' },
					{ to: '/contact', label: 'Contact' },
					{ to: '/services', label: 'Services' },
					{ to: '/donate', label: 'Donate' },
				].map((link) => (
					<Link
						key={link.to}
						to={link.to}
						className="text-dark-text dark:text-light-text hover:text-accent dark:hover:text-dark-accent transition-colors"
					>
						{link.label}
					</Link>
				))}
			</div>

			{/* Theme Toggle */}
			<ThemeToggle />
		</nav>
	)
}

export default DesktopNavbar
