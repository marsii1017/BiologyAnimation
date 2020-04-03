$(document).ready(function () {
    $(".answer").draggable();
    $(".question").droppable({
        refreshPositions: true,
        over: function(event, ui) {
            $(this).css('background', 'orange');
        },
        out: function(event, ui) {
            $(this).css('background', 'cyan');
        },
        drop: function(event, ui) {
            $(this).css('background', 'orange');
            var $el = ui.draggable;
            var pid= $el.attr("id");
            $('#'+pid).draggable("disable");
            $(this).attr("id",pid);
        }
    });
    $( "#submit" ).click(function() {
        var correct =0;
        $('.question').each(function() {
            console.log($(this).attr("id"));
            if($(this).attr("id") == $(this).text()){
                correct=correct+1;
                $(this).css('background', 'green');
            }else{
                $(this).css('background', 'red');
                $('#hint').text('Hint: Go back and look at Cell Theory Slides');
                $('#hint').css('font', '12px');
            }
        });
       alert( "You got " + correct +" answers correct.\n");
    });
});
