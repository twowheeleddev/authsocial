import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

// Mock user data
const mockUser = {
	id: 1,
	name: 'John Doe',
	email: 'johndoe@example.com',
	role: 'admin', // Or any role required for your app
}

// Create a context for user
const UserContext = createContext(null)

// Hook to use the UserContext
export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUser must be used within a MockProvider')
	}
	return context
}

const MockProvider = ({ children }) => {
	// Check if it's development mode using environment variables
	if (import.meta.env.MODE !== 'development') {
		return <>{children}</> // Do not wrap in production
	}

	return (
		<UserContext.Provider value={mockUser}>{children}</UserContext.Provider>
	)
}

// PropTypes validation
MockProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default MockProvider
