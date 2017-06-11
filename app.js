const calcul1 = document.getElementsByName("calcul1")[0]
const calcul2 = document.getElementsByName("calcul2")[0]
const operator = document.getElementsByName("operator")[0]
const formInscription = document.getElementsByName("inscription")[0]

const updateValues = function () {
  const calcul1Value = parseInt(calcul1.value)
  const calcul2Value = parseInt(calcul2.value)
  const operatorValue = operator.value

  if (calcul1Value && calcul2Value) {
    let result
    switch (operatorValue) {
      case "+":
        result = calcul1Value + calcul2Value
        break
      case "-":
        result = calcul1Value - calcul2Value
        break
      case "*":
        result = calcul1Value * calcul2Value
        break
      case "/":
        result = calcul1Value / calcul2Value
        break
      case "%":
        result = calcul1Value % calcul2Value
        break
    }

    document.getElementById("result").innerText = result
  }
}

calcul1.addEventListener("keyup", updateValues)
calcul2.addEventListener("keyup", updateValues)
operator.addEventListener("change", updateValues)

const isEmpty = function (value) {
  return value.length === 0
}

const createElementError = function (message) {
  const element = document.createElement("div")
  element.classList.add("error")
  element.innerText = message

  return element
}

const removeErrorsMessage = function () {
  const errors = document.getElementsByClassName("error")
  if (errors.length) {
    for (let i = 0; i < errors.length; i++) {
      const element = errors[i]
      const parent = element.parentNode
      parent.removeChild(element)
    }
  }
}

const processForm = function (e) {
  e.preventDefault()
  const form = e.target

  removeErrorsMessage()

  if (isEmpty(form.name.value)) {
    form.name.after(createElementError("Veuillez saisir votre nom"))
    form.name.focus()
  } else if (isEmpty(form.email.value)) {
    form.email.after(createElementError("Veuillez saisir votre adresse e-mail"))
    form.email.focus()
  } else {
    console.log("Formulaire envoyé")
  }
}

formInscription.addEventListener("submit", processForm)
