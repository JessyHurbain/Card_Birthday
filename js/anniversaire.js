$(function() {

    $('h4').one('click', function() {
        $('div').append('<p>' + " You're a great friend " + '</p>');
        $("p:first").css("background-color", "#1abc9c");


        $("p:first").one("click", function() {
            $('div').append('<p>' + " Today your's birthday " + '</p>');
            $("p:eq(1)").css("background-color", "#c0392b");


            $("p:eq(1)").one("click", function() {
                $('div').append('<p>' + " Wishing you all the best " + '</p>');
                $("p:last").css("background-color", "#bdc3c7");


                $("p:last").one("click", function() {
                    $("body").css("background", "url(assets/birthday-1208233_1920.jpg)");
                    $("body").css("background-size", "100% auto");
                    $('p:first').text(" Happy Birthday ! ");
                    $('p:eq(1)').text(" Happy Birthday ! ");
                    $('p:last').text(" Happy Birthday ! ");
                    $('#son')[0].play();
                });
            });
        });
    });
});
