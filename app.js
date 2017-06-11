const calcul1 = document.getElementsByName("calcul1")[0]
const calcul2 = document.getElementsByName("calcul2")[0]
const operator = document.getElementsByName("operator")[0]

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

    console.log(result)
  }
}

calcul1.addEventListener("keyup", updateValues)
calcul2.addEventListener("keyup", updateValues)
operator.addEventListener("change", updateValues)
