var slideIndex = 0;
let images = [ "images/brokilon.jpg", "images/monsters.jpg", "images/siren.jpg" ];
$(function() {
    $("#nav-company").click(function(){
        $.scrollTo( ' #company-div', 800);
    });

    $("#nav-news").click(function(){
        $.scrollTo( ' #news-div', 800);
    });

    $("#nav-services").click(function(){
        $.scrollTo( ' #services-div', 800);
    });

    $("#nav-real").click(function(){
        $.scrollTo( ' #real-div', 800);
    });

    $("#nav-fleet").click(function(){
        $.scrollTo( ' #fleet-div', 800);
    });

    $("#nav-contact").click(function(){
        $.scrollTo( ' #contact-div', 800);
    });

    $("#main-pic").animate({
        width: '100%',
        height: '100%'
    }, "slow");
});

window.onload = slides();

function slides() {
    slideIndex++;
    if (slideIndex > images.length) { slideIndex = 0 }

    $( "#slider" ).attr("src", images[slideIndex]);

    setTimeout(slides, 2000);
}