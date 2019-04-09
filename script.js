$('.Q').hide();
$('.YouR').hide();
$('.Walden').hide();
$('.Wubbzy').hide();
$('.Daizy').hide();
$('.Widget').hide();

$(".virus").click(function() {
    $('body').css('background-image', 'url(https://i2.wp.com/www.titanui.com/wp-content/uploads/2016/07/17/Gradient-Painting-Vector-Background.png)');
    $('.later').hide();
    $('.Q').show();
});



$(".Sub").click(function() {
    var age = $(".years").val();
    var cheater = $(".cheat").val();
    var cheated = "have an unfaithful partner";
    var cheat = "be unfaithful";
    
    if ( age <= 18 &&  cheater === cheated) {
        $('.YouR').show();
        $('.Daizy').show();
        $('.Walden').hide();
        $('.Wubbzy').hide();
        $('.Widget').hide();
    } else if ( age > 18 &&  cheater === cheated) {
        $('.YouR').show();
        $('.Walden').show();
        $('.Wubbzy').hide();
        $('.Daizy').hide();
        $('.Widget').hide();
    } else if ( age > 18 &&  cheater === cheat) {
        $('.YouR').show();
        $('.Widget').show();
        $('.Walden').hide();
        $('.Wubbzy').hide();
        $('.Daizy').hide();
    } else if ( age <= 18 &&  cheater === cheat) {
        $('.YouR').show();
        $('.Wubbzy').show();
        $('.Walden').hide();
        $('.Daizy').hide();
        $('.Widget').hide();
    }
});
