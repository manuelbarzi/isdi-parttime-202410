const root = ReactDOM.createRoot(document.querySelector('#root'))

const Component = React.Component

class App extends Component {
    constructor(props) {
        console.log('App -> constructor')

        super(props)

        this.state = {
            feedback: null,
            assertions: [],
            fails: 0
        }
    }

    render() {
        console.log('App -> render')

        return <main>
            <h1 style={{ backgroundColor: 'tomato', color: 'golden' }}>Hangman</h1>

            <form onSubmit={
                event => {
                    event.preventDefault()

                    const form = event.target
                    const input = form.char
                    const char = input.value
                    form.reset()

                    const word = this.props.guess

                    const assertions = this.state.assertions.concat()

                    word.split('').forEach((wordChar, index) => {
                        if (wordChar === char)
                            assertions[index] = char
                    })

                    const assertionsBeforeCount = this.state.assertions.reduce((accum, char) => {
                        if (char) return accum + 1

                        return accum
                    }, 0)

                    const assertionsAfterCount = assertions.reduce((accum, char) => {
                        if (char) return accum + 1

                        return accum
                    }, 0)

                    if (assertionsBeforeCount === assertionsAfterCount) {
                        this.setState({ feedback: this.state.fails === 5 ? 'lost' : 'failed', fails: this.state.fails + 1 })
                    } else
                        this.setState({ feedback: assertionsAfterCount === word.length ? 'won' : 'asserted', assertions })
                }
            }>
                <label htmlFor="char">Char</label>
                <input type="text" id="char" />
                <button type="submit">Try</button>
            </form>

            <p>{this.props.player}: {this.state.feedback} (fails: {this.state.fails})</p>
            <p>assertions: {this.state.assertions.join('')}</p>
        </main>
    }
}

root.render(<App player="manu" guess={'camarero'} />)