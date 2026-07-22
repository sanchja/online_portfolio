
console.log("on loaded message");

let infoMessage = document.getElementById("errorMessage");
const check = document.querySelector("#check");
let activateBtn = document.querySelector(".submit-btn");
let closeBtn = document.querySelector("#close-btn");
let modalClose = document.querySelector(".close-btn");
const activation = document.querySelector("#activation")
const successfulCardActivation = document.querySelector("#successfulCardActivation");
const accountNumberField1 = activationForm.elements["accountNumber1"];
const accountNumberField2 = activationForm.elements["accountNumber2"];
const accountNumberField3 = activationForm.elements["accountNumber3"];
const accountNumberField4 = activationForm.elements["accountNumber4"];
const allFields = [accountNumberField1, accountNumberField2, accountNumberField3, accountNumberField4];

let counter = [];
activateBtn.disabled = true;
infoMessage.innerText = "Enter your 16-digit account number to activate card.";


const TestCardActivation = () => {
  const sendMessage = (message) => {
    console.log(`### Sending postMessage ${message.messageType} to parent of iframe`);
    window.parent.postMessage(JSON.stringify(message), '*');
  };

  const handleDismiss = () => {
    const message = {
      success: true,
      flowType: 'CardActivation',
      messageType: 'Dismissed',
      message: {
        text: 'CardActivation Dismissed',
      },
      data: {},
    };
    sendMessage(message);
  };

  const handleSuccess = () => {
    const message = {
      success: true,
      flowType: 'CardActivation',
      messageType: 'Success',
      message: {
        text: 'CardActivation Success!',
      },
      data: {},
    };
    sendMessage(message);
  };
  // Close Modal and post message to iframe
  modalClose.addEventListener("click", ()=> handleDismiss());
  // 
  closeBtn.addEventListener("click", ()=> handleSuccess());
};

// Check invalid inputs
function checkInvalidInputs(){
  if(accountNumberField1.value.length < 4 || accountNumberField2.value.length < 4 || accountNumberField3.value.length < 4 || accountNumberField4.value.length < 4){
    infoMessage.innerText = "This PAN is invalid, please check again."
    infoMessage.style.color = "red";
    check.className = "unsuccessful";
  }
}

// Check length of Inputs
function checkLengthOfInputOne() {
  if (accountNumberField1.value.length === 4) {
    counter.push(accountNumberField1.value.length);
    console.log(counter);
  }else {
    checkInvalidInputs();
  }
}
// Length Check
function checkLengthOfInputTwo() {
  if (accountNumberField2.value.length === 4) {
    counter.push(accountNumberField2.value.length);
    console.log(counter);
  }else {
    checkInvalidInputs();
  }
}
function checkLengthOfInputThree() {
  if (accountNumberField3.value.length === 4) {
    counter.push(accountNumberField3.value.length);
    console.log(counter);
  }else {
    checkInvalidInputs();
  }
}
function checkLengthOfInputFour() {
  if (accountNumberField4.value.length === 4) {
    counter.push(accountNumberField4.value.length);
    console.log(counter);
  }else {
    checkInvalidInputs();
  }
}

// Enable Activate button
function removeDisable(){
  activateBtn.disabled = false;
  activateBtn.setAttribute("class", "submit-btn-active");
  check.className = "success";
  check.removeEventListener("click", clearForm);
  infoMessage.innerText = "Account successfully entered.";
  infoMessage.style.color = "green";
  // show Successful Activation Card
  activateBtn.addEventListener("click", function (e){ 
    e.preventDefault();
    TestCardActivation();
    activation.style.display = "none";
    successfulCardActivation.classList.add('animate__animated', 'animate__fadeIn');
    console.log("clicked from inside");
  })
}

// fadeOut Form
closeBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  successfulCardActivation.style.display = "none";
  activateBtn.disabled = true;
  check.className = "idle";
  check.addEventListener("click", clearForm);
  infoMessage.innerText = "Enter your 16-digit account number to activate card.";
  infoMessage.style.color = "black";
  activateBtn.setAttribute("class", "submit-btn");
  closeBtn.addEventListener("click", ()=> {
    handleSuccess();
  });
  clearForm();
  // reset Activation Card
  successfulCardActivation.style.display = "block";
  successfulCardActivation.classList.remove('animate__animated', 'animate__fadeOut');
  activation.style.display = "block";
  activation.classList.add('animate__animated','animate__fadeIn');
})

// clear form
check.addEventListener("click", clearForm);
  function clearForm() {
  document.getElementById("omaha-card-activation-form").reset();
  infoMessage.innerText = "Enter your 16-digit account number to activate card.";
  infoMessage.style.color = "black";
  check.className = "idle";
}