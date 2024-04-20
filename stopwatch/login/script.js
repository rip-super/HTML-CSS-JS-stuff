document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.btn');
    const content = document.getElementById('content');

    function animate() {
        content.classList.remove('slide-in-animation');
        content.classList.add('slide-out-animation');
    }

    function confirmCredentials() {
        // Connect to database and confirm credentials
    }

    loginButton.addEventListener('click', () => {
        document.getElementById('username-field').value = '';
        document.getElementById('password-field').value = '';
        animate();
        confirmCredentials();
        //ik i could do the same thing with function() {location.reload();}
        //but arrow functions are "more consise" 🤓🤓👇👇
        setTimeout(() => {location.reload();}, 750);
    });
});