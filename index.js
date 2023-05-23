const popUpForm = document.getElementById("popup-form")
const declineBtn = document.getElementById("decline-btn")
const buttonsDiv = document.getElementById("buttons-div")
let closeBtn = document.getElementById("close-btn")
const popUp = document.getElementById("pop-up")
const loadingArea = document.getElementById("loading-area")
let closeBtnStatus = false

function renderPopUp() {
  popUp.classList.add("active")
}

setTimeout(renderPopUp, 4000)

declineBtn.addEventListener("mouseover", function() {
  buttonsDiv.classList.toggle("button-switch")
});



popUpForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const popUpFormData = new FormData(popUpForm)
  const fullName = popUpFormData.get('fullName')
 
  loadingArea.innerHTML = `
  <div class="form-render1">
    <p>Uploading your data to the dark web... </p>
    <img  class="loading-gif" src="loading.gif"   alt="loading gif"/>
  </div
  `

  setTimeout(function() {
    loadingArea.innerHTML = `
  <div class="form-render1">
    <p>Making the sale... </p>
    <img  class="loading-gif" src="loading.gif"   alt="loading gif"/>
  </div
  `
  }, 3000)

  setTimeout(function() {
    loadingArea.innerHTML = `
  <div class="form-render2">
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you idiot! </h2>
        <p>We just sold your data to the dark web. You can now close this window.</p>
    <img  class="laughing-gif" src="laughing.gif"   alt="loading gif"/>
  </div
  `
  
  closeBtn.addEventListener("click", function() {
  popUp.style.display = "none"
  }); 

  popUpForm.style.display = "none"
  closeBtnStatus = true

  }, 6000)
})

