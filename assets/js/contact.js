// some divs that will be used later
const formElem = document.getElementById('form');
const subtitleElem = document.getElementById('subtitle');
const errorContainerElem = document.getElementById('errorContainer');
const errorMessageElem = document.getElementById('errorMessage');

// grab API endpoint url from data-api-endpoint tag on <script>
const APIEndpoint = document.getElementById('contactJS').getAttribute('data-api-endpoint');

// hide an HTML element
function hideElement(element) {
    element.classList.add('is-hidden');
}

// unhide an HTML element
function unhideElement(element) {
    element.classList.remove('is-hidden');
}

// toggle dark mode for captcha based on browser color scheme
function setHcaptchaColorScheme() {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const hCaptcha = document.getElementById("h-captcha");
    if (hCaptcha != null && darkMode) {
        document.getElementById("h-captcha").setAttribute("data-theme", "dark");
    }
}

// send form data to API
async function submitContactForm() {
    // get data from form fields
    const formData = {
        'name': document.getElementsByName('name')[0].value,
        'email': document.getElementsByName('email')[0].value,
        'subject': document.getElementsByName('subject')[0].value,
        'message': document.getElementsByName('message')[0].value,
        'h_captcha_response': document.getElementsByName('h-captcha-response')[0].value,
    };
    // send form to API
    var response;
    try {
        // try to send response
        response = await fetch(APIEndpoint, {
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
    } catch (error) {
        // if error occurs, show error and stop
        console.error('An error occurred!\n' +
                      'Please see the error message above for more information.');
        unhideElement(errorContainerElem);
        errorMessageElem.innerHTML = 'An error occurred! Please try again later.';
        return;
    }
    // check response
    const responseJSON = await response.json();
    const responseMsg = responseJSON['message'];
    if (response.ok) {
        // form processed successfully. hide form, show home button and
        // success message.
        formElem.innerHTML = '<a class="button is-link" href="/">Homepage</a>';
        subtitleElem.innerHTML = responseMsg;
        // log to console for the nerds
        console.log('Message submitted successfully!');
        console.log(responseMsg);
    } else {
        // form returned errors. show error message.
        unhideElement(errorContainerElem);
        errorMessageElem.innerHTML = responseMsg;
        // log to console for the nerds
        console.error('An error occurred!\n' + responseMsg);
    }
}

// on script load, add onsubmit event handler to form
formElem.onsubmit = function() {
    submitContactForm();
};
// then set color scheme and show form
setHcaptchaColorScheme();
unhideElement(formElem);
