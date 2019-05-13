// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.main-nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         console.log('this ran')
//     }); 
    
// }

// $(navSlide);







function handleNavSlide() {
    $('header').on('click', '.burger', function(event) {
        console.log('sucessful burger click');
        $('.main-nav-links').addClass('.nav-active');
      
    });
}

function setUpEventHandlers() {
    handleNavSlide();
}

function initialize() {
    setUpEventHandlers();
}

$(initialize);

