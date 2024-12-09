import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './providers/AuthProvider'
import MockProvider from './providers/MockProvider.jsx'
import { ThemeProvider } from './providers/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<MockProvider>
				<AuthProvider>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</AuthProvider>
			</MockProvider>
		</Router>
	</StrictMode>,
)
