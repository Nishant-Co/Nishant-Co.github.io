

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscribeForm');
    const modal = document.getElementById('thankYouModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('subscribe.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            thankYouMessage.textContent = data;
            modal.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

