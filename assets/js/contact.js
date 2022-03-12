// some divs that will be used later
const formElem = document.getElementById('form');
const subtitleElem = document.getElementById('subtitle');
const errorContainerElem = document.getElementById('errorContainer');
const errorMessageElem = document.getElementById('errorMessage');

// get data from form fields
function extractFormData() {
    return {
        'name': document.getElementsByName('name')[0].value,
        'email': document.getElementsByName('email')[0].value,
        'subject': document.getElementsByName('subject')[0].value,
        'message': document.getElementsByName('message')[0].value,
        'hcaptcha_response': document.getElementsByName('h-captcha-response')[0].value,
    }
}

// hide an HTML element
function hideElement(element) {
    element.classList.add('is-hidden');
}

// unhide an HTML element
function unhideElement(element) {
    element.classList.remove('is-hidden');
}

// send form data to API
async function submitContactForm(APIEndpoint) {
    // send form to API
    const formData = extractFormData();
    const response = await fetch(APIEndpoint, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(formData)
    });
    // check response
    const responseJSON = await response.json();
    if (response.ok) {
        // form processed successfully. hide form, show home button and
        // success message.
        formElem.innerHTML = '<a class="button is-link" href="/">Homepage</a>';
        subtitleElem.innerHTML = responseJSON['message'];
        // log to console for the nerds
        console.log('Message submitted successfully!');
        console.log(responseJSON['message']);
    } else {
        // form returned errors. show error message.
        unhideElement(errorContainerElem);
        errorMessageElem.innerHTML = responseJSON['error'];
        // log to console for the nerds
        console.log('An error occurred!');
        console.log(responseJSON['error']);
    }
}

// on script load, show form
unhideElement(formElem);
