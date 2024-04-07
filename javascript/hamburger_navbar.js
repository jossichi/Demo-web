document.addEventListener('DOMContentLoaded', (event) => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
            bar.style.display = 'none';
            close.style.display = 'block';
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
            close.style.display = 'none';
            bar.style.display = 'block';
        });
    }
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !bar.contains(event.target)) {
            nav.classList.remove('active');
        }
    });
});
