

const UzivatelWage = prompt("Zadej hrubou mzdu v korunách za hodinu")
const UzivatelHours = prompt("Zadej počet odpracovanných hodin denně")
const UzivatelDays = prompt("Zadej počet odpracovaných dní")


const salary = (wage, hours, days) => {
    return Math.round (wage*hours*days)
}

const hrubaMzda = salary(UzivatelWage, UzivatelHours, UzivatelDays)
document.body.innerHTML += "Tvá hrubá měsíční mzda je: " + hrubaMzda + " Kč."

const tax = prompt('Zadej procenta zdanění')

const taxed = (mzda , taxed) => {
    return Math.round ((mzda* (100 - taxed))/100)
}

document.body.innerHTML += '<p>Tvá měsíční mzda po zdanění je: ' +taxed(hrubaMzda , tax) + 'Kč </p>'


const uzivatelNumber = prompt('Zadej číslo')
const uzivatelOperation = prompt('Zadej operaci (+,-,*,/)')
const uzivatelNumberTwo = prompt('Zadej číslo')

const  calculate = (number1, operation, number2) => {
    if (operation === '+') {
        return number1 + number2
    } 
    if (operation === '-') {
        return number1 - number2
    }
    if (operation === '*'){
        return number1 * number2
    }
    if (operation === '/'){
        return number1 / number2
    }

}

document.body.innerHTML += "<p>Výpočet " + uzivatelNumber + " " + uzivatelOperation + " " + uzivatelNumberTwo + " je: " + calculate(uzivatelNumber, uzivatelOperation, uzivatelNumberTwo) + ".</p>"



const  selectPlan = (planNumber) => {
    if(planNumber === 1){
        document.querySelector('#plan1').classList.add('plan--selected')
        document.querySelector('#plan2').classList.remove('plan--selected')
        document.querySelector('#plan3').classList.remove('plan--selected')
    }
    if(planNumber === 2){
        document.querySelector('#plan1').classList.remove('plan--selected')
        document.querySelector('#plan2').classList.add('plan--selected')
        document.querySelector('#plan3').classList.remove('plan--selected')
    }
    if(planNumber === 3){
        document.querySelector('#plan1').classList.remove('plan--selected')
        document.querySelector('#plan2').classList.remove('plan--selected')
        document.querySelector('#plan3').classList.add('plan--selected')
    }
}

