const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const menuButton = document.querySelector('.menuButton')

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

function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    
    emailjs.send("service_uvypnm9", "template_3mb35ve", params).then(alert("Email Sent!!!"))
    


}


















