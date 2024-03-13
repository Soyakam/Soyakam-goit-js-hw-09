window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const { email, message } = JSON.parse(storedData);
        emailInput.value = email;
        messageInput.value = message;
    }
});

form.addEventListener('input', event => {
    const { target } = event;
    if (target.matches('#email, #message')) {
        const formData = {
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Будь ласка, заповніть всі поля форми.');
        return;
    }

    console.log('Form submitted:', {
        email: emailInput.value,
        message: messageInput.value
    });

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
});
