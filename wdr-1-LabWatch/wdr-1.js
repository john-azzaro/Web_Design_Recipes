// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const mainnav = document.getElementsByClassName('main-nav')[0];

// toggleButton.addEventListener('click', () => {
//     mainnav.classList.toggle('active')
// });





function handleBurgerNav() {
    $('header').on('click', '.toggle-button', function(event) {
        $('.main-nav').toggleClass('active');  
        console.log('burger click');          
    });
}

function setUpEventHandlers() {
    handleBurgerNav();
}

function initialize() {
    setUpEventHandlers();
}

$(initialize);

