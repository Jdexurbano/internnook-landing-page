interface RegistrationInput {
    type: 'text'| 'number' | 'email' | 'password'
    label: string,
    value: string | number 
    name: string
    placeholder: string

}

export default RegistrationInput;