const $calcul1 = $("[name='calcul1']")
const $calcul2 = $("[name='calcul2']")
const $operator = $("[name='operator']")
const $formInscription = $("[name='inscription']")
const $formCalculette = $("[name='calculette']")

const updateValues = function () {
  const calcul1Value = parseInt($calcul1.val())
  const calcul2Value = parseInt($calcul2.val())
  const operatorValue = $operator.val()

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

    $("#result").text(result)
  }
}

$calcul1.on("keyup", updateValues)
$calcul2.on("keyup", updateValues)
$operator.on("change", updateValues)

const isEmpty = function (value) {
  return value.length === 0
}

const createElementError = function (message) {
  return $("<div />").addClass("error").text(message)
}

const removeErrorsMessage = function () {
  $(".error").remove()
}

const processForm = function (e) {
  e.preventDefault()
  const form = e.target

  removeErrorsMessage()

  const $name = $(form.name)
  const $email = $(form.email)

  if (isEmpty($name.val())) {
    $name.after(createElementError("Veuillez saisir votre nom"))
    $name.focus()
  } else if (isEmpty($email.val())) {
    $email.after(createElementError("Veuillez saisir votre adresse e-mail"))
    $email.focus()
  } else {

    $formInscription.hide()
    $formCalculette.show()
    const md5mail = $.md5($.toLowerCase($.trim($email.val())))
  }
}

$formInscription.on("submit", processForm)
