// Перевіряємо чи є збережені дані в локальному сховищі
window.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const { email, message } = JSON.parse(storedData);
        emailInput.value = email;
        messageInput.value = message;
    }
});

// Зберігаємо дані у локальне сховище під час введення у поля форми
form.addEventListener('input', () => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Скидаємо дані у локальному сховищі під час відправки форми
form.addEventListener('submit', event => {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
    console.log('Form submitted:', {
        email: emailInput.value,
        message: messageInput.value
    });
});