const calcul1 = document.getElementsByName("calcul1")[0]
const calcul2 = document.getElementsByName("calcul2")[0]

const updateValues = function () {
  console.log("Ma fonction est appelée")
}

calcul1.addEventListener("keyup", updateValues)
calcul2.addEventListener("keyup", updateValues)
