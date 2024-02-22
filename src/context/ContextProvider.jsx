import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const login = name => {
		setUser(name)
		setIsLoggedIn(true)
	}
	const logout = () => {
		setUser('')
		setIsLoggedIn(false)
	}

	const contextValue = {
		login,
		logout,
		user,
		isLoggedIn,
	}

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
