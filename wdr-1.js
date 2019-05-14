
function handleNavSlide() {
    $('.main-header').on('click', '.burger', function(event) {
        $('.main-nav-links').toggleClass('main-nav-active');  
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

