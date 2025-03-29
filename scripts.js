const cards = document.querySelectorAll('.card');
const petButtons = document.querySelectorAll('.card-actions .btn-full');
const selectAllBtn = document.querySelector('#btn-select-all');
const unselectAllBtn = document.querySelector('#btn-unselect-all');
const selectFirstBtn = document.querySelector('#btn-select-first');
const selectPreviousBtn = document.querySelector('#btn-select-previous');
const selectNextBtn = document.querySelector('#btn-select-next');
const selectLastBtn = document.querySelector('#btn-select-last');
const bannerContent = document.querySelector('.banner-content');



petButtons.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
            icon.classList.replace('fa-regular', 'fa-solid');
        } else {
            icon.classList.replace('fa-solid', 'fa-regular');
        }
    });
});

selectAllBtn.addEventListener('click', function() {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.replace('fa-regular', 'fa-solid');
    });
});

unselectAllBtn.addEventListener('click', function() {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.replace('fa-solid', 'fa-regular');
    });
});

// function for cards
function updateSelectedCard(selectedCard) {
    cards.forEach(card => {
        card.classList.remove('active', 'card-selected');
    });
    selectedCard.classList.add('active', 'card-selected');
}

selectLastBtn.addEventListener('click', function() {
    updateSelectedCard(cards[cards.length - 1])
})

selectFirstBtn.addEventListener('click', function() {
    updateSelectedCard(cards[0]);
  });
  
selectNextBtn.addEventListener('click', function() {
    const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('active'));
    const nextIndex = (currentIndex + 1) % cards.length;
    updateSelectedCard(cards[nextIndex]);
});

selectPreviousBtn.addEventListener('click', function() {
    const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('active'));
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSelectedCard(cards[prevIndex]);
});

// animation for banner (ayaw po gumana sir huhuhu)
bannerContent.addEventListener('click', function() {
    bannerContent.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
        bannerContent.classList.remove('animate__animated', 'animate__bounce');
    }, 1000); 
}); 



