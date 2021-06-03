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
