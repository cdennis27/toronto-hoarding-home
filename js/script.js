const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const menuButton = document.querySelector('.menuButton')
const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const errorElement = document.getElementById('error')

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleButton.classList.toggle('close');
    menuButton.classList.toggle('close');
    console.log(menuButton.classList);
    const isOpened = menuButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        menuButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('aria-expanded', 'true');
    }
    else {
        menuButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-expanded', 'false');
    }
});

function sendMail() {

    console.log("email info" + name.value, email.value, subject.value, message.value)

    if (email.value === "" || name.value === "" || subject.value === "" || message.value === "") {
        errorElement.innerText = ("Please fill out all fields")
        return
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        console.log("email is invalid")

        errorElement.innerText = ("Please enter a valid email address")
        alert("Please enter a valid email address, form will be reset.")
        return
    }





    let params = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    console.log(params)
    console.log(params.name, params.email, params.subject)

    //emailjs.send("service_uvypnm9", "template_3mb35ve", params).then(alert("Email Sent!!!"))
    console.log(params)


}


















