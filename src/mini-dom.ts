// Mini Dom

abstract class UIelements {
    constructor(
        protected id : string) {}

    abstract render() : string
}

class Input extends UIelements{
    constructor (
        id : string,
        private type : string,
        private placeholder : string
    ) {super(id)}

    render() {
        return `<input id=${this.id} name=${this.id} type=${this.type} placeholder=${this.placeholder} />`
    }
}

const emailInput = new Input("email", "email", "Email Address")
const passwordInput = new Input("pass", "Password", "Your Password")

console.log(emailInput);
console.log(passwordInput);