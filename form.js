
const errorMessage = document.querySelector('#errorMessage');
const form = document.querySelector('#form');
const date = document.querySelector('#start');
const textArea = document.querySelector('textarea');
form.addEventListener('submit', (e) => {
        e.preventDefault();
        const {firstName, email, phone, start, end, info } = form.elements;
        errorMessage.textContent = "";
        if (!firstName.value.trim()) {
                displayError("Name is required");
                firstName.focus()
                return
        }
        let value = start.valueAsDate;
        let date = new Date();
        if (value  <= date) {
                displayError('Enter a later date, please!');
                date.focus()
                return
        }
        if (textArea.value.length < 50) {
                displayError('Enter a message of fifty minimum words. Pls include your location')
                textArea.focus();
                return
        }
        // window.location.href = '/'; 
        window.alert('Message sent');
        window.setTimeout(() => {
                form.elements.firstName.value = "";
                form.elements.email.value = "";
                form.elements.phone.value = "";
                form.elements.start.value = "";
                form.elements.end.value = "";
                form.elements.info.value = "";
        }, 4000)


});
function displayError(error) {
        errorMessage.textContent = `${error}`;
}

