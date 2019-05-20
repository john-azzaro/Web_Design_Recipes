
function handleNavSlide() {
    $('header').on('click', '.burger', function(event) {
        $('.main-nav').toggleClass('nav-active');  
        console.log('burger click');          
    });
}

function setUpEventHandlers() {
    handleNavSlide();
}

function initialize() {
    setUpEventHandlers();
}

$(initialize);

