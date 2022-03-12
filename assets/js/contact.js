// get data from form fields
async function extractFormData() {
    return {
        "name": document.getElementsByName("name")[0].value,
        "email": document.getElementsByName("email")[0].value,
        "subject": document.getElementsByName("subject")[0].value,
        "message": document.getElementsByName("message")[0].value,
        "hcaptcha_response": document.getElementsByName("h-captcha-response")[0].value,
    }
}

// send form data to API
async function submitContactForm(APIEndpoint) {
    const formData = await extractFormData();
    console.log(formData);
    const response = await fetch(APIEndpoint, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(formData)
    });
    return response.json();
}
