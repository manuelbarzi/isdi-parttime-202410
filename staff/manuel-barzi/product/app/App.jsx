import { useEffect, useState } from 'react'

import logic from './logic'

import Landing from './view/Landing'
import Login from './view/Login'
import Register from './view/Register'
import Home from './view/Home'

import Alert from './view/components/Alert'
import Confirm from './view/components/Confirm'

import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'

import { AppContext } from './context'

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    let viewInPath = location.pathname.slice(1)
    if (viewInPath !== 'landing' && viewInPath !== 'register' && viewInPath !== 'login')
        viewInPath = 'landing'

    const [view, setView] = useState(logic.isUserLoggedIn() ? 'home' : viewInPath)
    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')
    // WARN does not work (state changes to undefined when trying to setConfirmCallback with a function)
    // const [confirmCallback, setConfirmCallback] = useState(null)

    console.log('App -> render')

    const handleRegisterClick = () => setView('register')

    const handleLoginClick = () => setView('login')

    const handleUserLoggedIn = () => setView('home')

    const handleUserRegistered = () => setView('login')

    const handleUserLoggedOut = () => setView('login')

    useEffect(() => {
        switch (view) {
            case 'landing':
                navigate('/landing')
                break
            case 'register':
                navigate('/register')
                break
            case 'login':
                navigate('/login')
                break
            case 'home':
                navigate('/')
                break
        }
    }, [view])

    const handleAcceptAlert = () => setAlertMessage('')

    const handleAcceptConfirm = () => {
        // confirmCallback(true)
        App.confirmCallback(true)

        setConfirmMessage('')
        // setConfirmCallback(null)
        App.confirmCallback = null
    }

    const handleCancelConfirm = () => {
        // confirmCallback(false)
        App.confirmCallback(false)

        setConfirmMessage('')
        // setConfirmCallback(null)
        App.confirmCallback = null
    }

    const alert = message => setAlertMessage(message)

    const confirm = (message, callback) => {
        setConfirmMessage(message)
        // setConfirmCallback(callback)
        App.confirmCallback = callback
    }

    return <AppContext.Provider value={{ alert, confirm }}>
        <Routes>
            <Route path="/landing" element={
                logic.isUserLoggedIn() ? <Navigate to="/" /> : <Landing onRegisterClicked={handleRegisterClick} onLoginClicked={handleLoginClick} />
            } />

            <Route path="/login" element={
                logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClicked={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} />
            } />

            <Route path="/register" element={
                logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClicked={handleLoginClick} onUserRegistered={handleUserRegistered} />
            } />

            <Route path="/*" element={
                logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/landing" />
            } />
        </Routes>

        {alertMessage && <Alert message={alertMessage} onAccept={handleAcceptAlert} />}
        {confirmMessage && <Confirm message={confirmMessage} onAccept={handleAcceptConfirm} onCancel={handleCancelConfirm} />}
    </AppContext.Provider>
}

export default App