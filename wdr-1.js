// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.main-nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         console.log('button clicked')
//     });     
// }

// $(navSlide);







function handleNavSlide() {
    $('.main-header').on('click', '.burger', function(event) {
        $('.main-nav-links').toggleClass('main-nav-active');  
        console.log('clicked burger');          
    });
}

function setUpEventHandlers() {
    handleNavSlide();
}

function initialize() {
    setUpEventHandlers();
}

$(initialize);

