// Normally we write code in javascript as
// var para1 = document.getElementById('para1');
// para1.innerHTML="Welcome"

// same thing using JQuery
$('#para2').html('Welcome');

// 9. Modifying CSS Using JQuery
//  If I want to change the color of the text 
$('#para1').css('color','red');

// If I want to apply this to all <p> then
$('p').css('color','red');

// If I want to change the fontSize of all text
$('p').css('fontSize','50px'); 

$("p").css({
    fontSize: "30px",
    color: "blue"

});

$("div").css({
    width:"100px",
    height:"100px",
    backgroundColor:"cyan"
})

$( 'p' ).css( "fontSize" );

// 10. Event Handling Using JQuery
// If I want show an alert message
// $('div').click(function(){
//     alert("Div Clicked");
// });

// There is another way to handle the event, on() - the syntax of this function is similar to addEventListener()
// $('div').on('click',function(){
//     alert("Div Clicked!!!");
// });

// $('a').on('click',function(){
//     alert("Anchor Tag Clicked!!!");
// });
// Bydefault anchor tag is taking me to google page if I want to suppress this default behaviour then use event.preventDafault()
// $('a').on('click',function(event){
//     event.preventDefault();
//     alert("Anchor Tag Clicked!!!");
// });

// If I want to increase the width of the div every time when I clicked the div
$('div').on('click',function(){
    var element = $(this);
    element.width(element.width() + 10 + "px")
    // alert("Div Clicked!!!");
});