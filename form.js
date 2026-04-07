// const form = document.querySelector('#form');
// const date = document.querySelector('#start');
// const textArea = document.querySelector('textarea');
// const fullName = document.getElementById('firstName');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
//  const nameError = document.getElementById('nameError');
//  const emailError = document.getElementById('emailError');
//  const phoneError = document.getElementById('phoneError');
//  const finalResult = document.getElementById('result');
//  const dateError = document.getElementById('dateError');
//  const info = document.getElementById('info');
//  const infoError = document.getElementById('infoError');
//  const course = document.getElementById('course');
//  const end = document.getElementById('end')
 

//  //showError  
// function showError (param, message ) {
//      param.textContent = message;
// }

// //clear Error
// function clearError(param) {
//    param.textContent = "";
// }

// //full Name validation
// function validateName() {
//   let value = fullName.value.trim();
//   if (value.length < 3) {
//     showError(nameError, 'invalid name')
//     return false
//   } 
//   clearError(nameError);
//   return true
  
// }
// //date validation
// function  validateDate(){
//   let value = start.valueAsDate;
//         let date = new Date();
//         if (value  <= date) {
//           showError(dateError, 'enter a later date')
//           return false
//         } else{
//           clearError(dateError)
//           return true
//         }
// }

// //validate phone
// function validatePhone () {
//   let phoneValue = Number(phone.value);
//   if (phoneValue === '') {
//     showError(phoneError, 'enter a valid phone number')
//     return false
//   }
//    clearError(phoneError)
//    return true
// }

// // email validation
// function emailValidation () {
//   let emailValue = email.value.toLowerCase();
//   let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/
//   if (!emailRegex.test(emailValue)){
//     showError(emailError, 'invalid email')
//     return false
//   }
//   clearError(emailError)
//   return true
  
// }

// //validating the text Area
// function validateTextArea (){
//    if (textArea.value.length < 50) {
//     showError(infoError, `Give a detail information of where you are at the present in your
//        Quran knowledge and what you intend learning. 
//        Include your location as well`);
//        return false
//       } else {
//         clearError(infoError)
//         return true
//       }
//     }
// // validating all the above conditions

// function validateEverything () {
//   let okName = validateName();
//   let okEmail =  emailValidation();
//   let okPhone = validatePhone();
//   let okDate = validateDate();
//   let okTextArea = validateTextArea();

//   return okName &&  okEmail && okPhone && okDate && okTextArea;
// }



// form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         finalResult.innerHTML = "";
//    let output = validateEverything();
//    if(!output) {
//     finalResult.textContent = 'Registration not successful';
//     window.alert('Registration not completed')
//    } else{
//     finalResult.textContent = 'Registration complete';
//     window.alert('Registration successful')
//    }
//    fullName.value = "";
//    email.value= "";
//    phone.value = "";
//    textArea.value = "";
//    date.value = "";
//    course.value = "";
//    end.value = "";
   
// })
