var popup = document.querySelector('.popup-contact');
var overlay = document.querySelector('.popup-overlay')
var popupBtn = document.querySelector('.hero-btn');
var popupCloseBtn = popup.querySelector('.popup-contact-btn')
var input = popup.querySelector('input')

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-contact-open');
    overlay.classList.add('show');
    input.focus();
})

popupCloseBtn.addEventListener('click', function(){
    popup.classList.remove('popup-contact-open');
    overlay.classList.remove('show');
})

window.addEventListener('keydown', function(evt) {
    if (evt.code === "Escape") {
        if(popup.classList.contains('popup-contact-open')) {
            popup.classList.remove('popup-contact-open');
            overlay.classList.remove('show');
        } 
    } 
})
