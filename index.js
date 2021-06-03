//Name Pool
const namePool = []

//function to generate the number of inputs

const generateNumberOfInputs = () => {
  //Get input number
  const inputNumber = document.querySelector("#generate-number input").value

  //create input names

  //get input list form from the Document
  const inputListForm = document.querySelector("#input-list")

  // Attach inputs to the form
  for (let i = 0; i < inputNumber; i++) {
    const inputName = document.createElement("div")
    inputName.classList.add("input-group", "mb-3", "col-12")
    inputName.innerHTML = `<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />`
    inputListForm.appendChild(inputName)
  }

  //stop showing numbers form and start showing input for names
  inputListForm.style.display = "block"
  document.querySelector("#generate-number").style.display = "none"
}

// function to push names to the array

const submitNames = () => {
  const inputNamesList = document.querySelectorAll("#input-list input")

  for (let i = 0; i < inputNamesList.length; i++) {
    const inputName = inputNamesList[i]
    namePool.push(inputName.value)
    console.log(namePool)
  }
}

//window on load

window.onload = () => {
  //generate Button
  const generateButton = document.querySelector("#generate-number button")
  generateButton.addEventListener("click", generateNumberOfInputs)

  //Submit Button
  const submitButton = document.querySelector("#input-list button")
  submitButton.addEventListener("click", submitNames)
}
