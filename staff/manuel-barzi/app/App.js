class App extends Component {
    constructor() {
        super(document.body)

        const title = new Heading(1)
        title.setText('Hola, App!')
        this.add(title)

        // const login = new Login
        // this.add(login)

        // const landing = new Landing
        // this.add(landing)

        // const register = new Register
        // this.add(register)

        const home = new Home
        this.add(home)
    }
}