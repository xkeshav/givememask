document.body.style.backgroundColor="red";

$('a').css({'background-color': 'yellow'});

$(document).on('click', 'img', function() {
    alert(this.src);
});