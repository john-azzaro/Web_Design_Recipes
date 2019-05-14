
function handleNavSlide() {
    $('.section-header').on('click', '.burger', function(event) {
        $('.nav-links').toggleClass('main-nav-active');  
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

