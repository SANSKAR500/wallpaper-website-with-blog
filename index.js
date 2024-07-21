document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const formSection = document.querySelector('.form-section');
    const signupBox = document.querySelector('.signup-box');
    const slider = document.querySelector('.slider');

    loginBtn.addEventListener('click', function() {
        formSection.style.display = 'block';
        signupBox.style.display = 'none';
        slider.style.left = '0';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    signupBtn.addEventListener('click', function() {
        formSection.style.display = 'none';
        signupBox.style.display = 'block';
        slider.style.left = '50%';
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });
});

