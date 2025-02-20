import logic from '../logic'
import { errors } from 'com'

const { CredentialsError, SystemError } = errors

function Login({ onUserLoggedIn, onRegisterClicked }) {
    console.log('Login -> render')

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => {
                    if (error instanceof CredentialsError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, try again later.')
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleRegisterLinkClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    return <main className="main">
        <h2 className="text-orange">Login</h2>

        <form className="form" onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input className="input" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="input" type="password" id="password" />

            <button className="button" type="submit">Login</button>
        </form>

        <a className="underline" href="" onClick={handleRegisterLinkClick}>Register</a>
    </main>
}

export default Login