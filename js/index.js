const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const errorDivs = document.querySelectorAll('div.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Saves the valid status of each input
    let valid = [];

    //Saves the invalid inputs
    let invalidInput = [];

    //Saves the Divs that have to appear.
    let errorDivsToAppear = [];
    
    for (let i = 0; i < inputs.length; i++) {
        // If the validity of HTML is done...
        if (inputs[i].validity.valid) {
            //And the input is the email...
            if (i === 2 && inputs[i].value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
                //If the input already has been analyzed...
                if (inputs[2].classList.contains('invalid')) {
                    //Remove the class invalid.
                    inputs[2].classList.remove('invalid');
                    //Remove the text error.
                    errorDivs[2].innerText = '';
                }    
                //In any case, save the true status to valid variable.
                valid.push(true);
            } 
            // If the input is not email and his validity is true...
            else if (i !== 2 && inputs[i].validity.valid) {
                //Save the true status in valid variable
                valid.push(true);
                //In any case, if the input has already been analyzed...
                if (inputs[i].classList.contains('invalid')) {
                    //Remove the error class
                    inputs[i].classList.remove('invalid');
                    //And remove the error text
                    errorDivs[i].innerText = '';
                }
            } 
        } else {
            //If input not valid, save the false status
            valid.push(false);
            //Invalid input saved
            invalidInput.push(inputs[i]);
            //Error div that will have to appear saved
            errorDivsToAppear.push(errorDivs[i]);
        }
    }

    //If every input is valid...
    if (valid.every(val => val)) {
        //
    } else {
        //If there is some invalid input, iterate on the invalidInput array
        for (let i = 0; i < invalidInput.length ; i++) {
            //Check each invalid input and the equality with the original inputs.
                //If there's some equality, add the invalid class and the error message.
            switch (invalidInput[i]) {
                case inputs[0]:
                    inputs[0].classList.add('invalid');
                    errorDivs[0].innerText = 'Please introduce a valid name';
                    break;

                case inputs[1]:
                    inputs[1].classList.add('invalid');
                    errorDivs[1].innerText = 'Please introduce a valid name';
                    break;

                case inputs[2]:
                    inputs[2].classList.add('invalid');
                    errorDivs[2].innerText = 'Please introduce a valid email';
                    break;

                case inputs[3]:
                    inputs[3].classList.add('invalid');
                    errorDivs[3].innerText = 'Please introduce a valid password';
                break;
            }
        }
    }
})