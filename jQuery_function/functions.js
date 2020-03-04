$(document).ready(function(){
    $('button').click(function(){
        alert('You are going to the next page!')   
    });

    $('a').click(function(){
        $(this).hide();
    });

    $('h1').click(function(){
        $('a').show();
    });

    $('main').click(function(){
        $('hr').toggle();
    });

    // $('p').hover(function(){
    //     $('hr').fadeIn();
    // },function(){alert('Good day!') });

    $('a').click(function(){
        $('h1').fadeIn();
    });

    $('bottom').slideToggle(function(){
        $('p').fadeIn();
    });

    $('top').click(function(){
        $('.bottom').text('I am happy')
    });

    $('button').hover(function(){
        $('h1').append('How are you today?');

    });
});