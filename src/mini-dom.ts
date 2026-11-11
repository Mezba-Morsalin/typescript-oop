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
const passwordInput = new Input("pass", "Password", "Your Password");


class Button extends UIelements {
    constructor (
        id : string,
        private label : string
    ) {super(id)}

    render() {
        return `<button type=${this.id}>${this.label}</button>`
    }
}

const buttonSubmit = new Button("btn" , "Button")


class Form extends UIelements {
    private children: UIelements[] = []

    appendChild(child : UIelements) {
        this.children.push(child)
    }

    render () {

        const formHtml = this.children.map(child => child.render()).join("\n")

        return `<form id=${this.id} >\n ${formHtml} \n</form>`
    }
}

const formELement = new Form("Login-form")

formELement.appendChild(emailInput)
formELement.appendChild(passwordInput)
formELement.appendChild(buttonSubmit);

console.log(formELement.render());


const rootElement = document.getElementById("root")

if (rootElement) {
    rootElement.innerHTML = formELement.render()
}

// console.log(emailInput);
// console.log(passwordInput);
// console.log(buttonSubmit);