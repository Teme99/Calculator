class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand =''
        this.operation = undefined

    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if(number === '-' && this.currentOperand.includes('.'))
        this.currentOperand = this.currentOperand + number.toString()

    }
    chooseOperation(operation){
        if(this.currentOperand === '')return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
    }
    coompute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const urrent = parseFloat(this.currentOperand)
        if (isNAN(prev || isNAN(current))return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return 
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1])
        let integerDisplay
        if(isNAN(integerDigits)){
            integerDislpay = ''
        }else{
            integerDisplay integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if(decimalDigits != null){
            return '$(integerDisplay).$(decimalDigits)'
        }else{
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        if(this.operation != null){
            this.previousOperandTextElement.innetText = 
            '$(this.previousOperand) $(this.operation)'
        }else{
            this.previousOperand.innetText = ''
        }
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => () {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => () {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calulator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calulator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calulator.delete()
    calculator.updateDisplay()
})
