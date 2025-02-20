import logic from '../logic'
import { errors } from 'com'

const { DuplicityError, SystemError } = errors

import { useAppContext } from '../context'

function Register({ onUserRegistered, onLoginClicked }) {
    console.log('Register-> render')

    const { alert } = useAppContext()

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => {
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, try again later.')

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleLoginLinkClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    return <main className="main">
        <h2 className="text-orange">Register</h2>

        <form className="form" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input className="input" type="text" id="name" />

            <label htmlFor="email">E-mail</label>
            <input className="input" type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input className="input" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password" />

            <button className="button" type="submit">Register</button>
        </form>

        <a className="underline" href="" onClick={handleLoginLinkClick}>Login</a>
    </main >
}

export default Register