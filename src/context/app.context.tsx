import { userInfo } from 'os'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { getAccessTokenFromLocalStorage, getProfileFromLocalStorage } from 'src/utils/auth'

interface AppContextInterface {
  showSideBar: boolean
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
  showSideBar2xl: boolean
  setShowSideBar2xl: React.Dispatch<React.SetStateAction<boolean>>
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  showSearchMobie: boolean
  setShowSearchMobie: React.Dispatch<React.SetStateAction<boolean>>
  isVerify: '0' | '1' | '2'
  setIsVerify: React.Dispatch<React.SetStateAction<'0' | '1' | '2'>>
}
const initialAppContext: AppContextInterface = {
  showSideBar: false,
  setShowSideBar: () => null,
  showSideBar2xl: true,
  setShowSideBar2xl: () => null,
  theme: localStorage.getItem('theme') || 'Light',
  setTheme: () => null,
  showSearchMobie: false,
  setShowSearchMobie: () => null,
  isVerify: getAccessTokenFromLocalStorage() !== '' ? '2' : getProfileFromLocalStorage() ? '1' : '0',
  setIsVerify: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showSearchMobie, setShowSearchMobie] = useState<boolean>(initialAppContext.showSearchMobie)
  const [showSideBar, setShowSideBar] = React.useState<boolean>(initialAppContext.showSideBar)
  const [showSideBar2xl, setShowSideBar2xl] = React.useState<boolean>(initialAppContext.showSideBar2xl)

  const [theme, setTheme] = React.useState<string>(initialAppContext.theme)
  const element = document.documentElement

  const [isVerify, setIsVerify] = useState<'0' | '1' | '2'>(initialAppContext.isVerify)

  useEffect(() => {
    switch (theme) {
      case 'Light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'Light')
        break
      case 'Dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'Dark')
        break
      default:
        element.classList.remove('Dark')
        break
    }
  }, [theme, element.classList])

  return (
    <AppContext.Provider
      value={{
        setShowSideBar,
        showSideBar,
        setShowSideBar2xl,
        showSideBar2xl,
        theme,
        setTheme,
        showSearchMobie,
        setShowSearchMobie,
        isVerify,
        setIsVerify
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
