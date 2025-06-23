const links = document.querySelectorAll('.timeline-link');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.querySelector('.modal-close');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDate = document.querySelector('.modal-date');
const modalDescription = document.querySelector('.modal-description');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const modalId = this.getAttribute('data-modal-id');
        const timelineCard = document.querySelector(`[data-modal-id='${modalId}']`);

        const image = timelineCard.querySelector('.timeline-image').src;
        const title = timelineCard.querySelector('.timeline-title').innerText;
        const date = timelineCard.querySelector('.timeline-date').innerText;
        const description = timelineCard.querySelector('.timeline-description').innerText;

        modalImage.src = image;
        modalTitle.textContent = title;
        modalDate.textContent = date;
        modalDescription.textContent = description;

        modalOverlay.style.display = 'flex';
    });
});

modalClose.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});