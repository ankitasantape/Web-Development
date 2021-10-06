function fetchRandomDogImage(){
    // First thing is that make a request, xhrRequest is the object
    var xhrRequest = new XMLHttpRequest(); 
    xhrRequest.onload = function (){
        console.log(xhrRequest.response);
        // So, output is string so convert this string into JSON object so the function that you have is
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src',imageUrl);
    };
    // To initialize the request, first call open() it will initialize the request for you
    // First thing you have to initialize is the get method next you have to specify is the link
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();
}

// Plain Vennila JSCode containing
// function fetchRandomDogImage(){
//     // First thing is that make a request, xhrRequest is the object
//     var xhrRequest = new XMLHttpRequest(); 
//     xhrRequest.onload = function (){
//         // console.log(xhrRequest.response);
//         // So, output is string so convert this string into JSON object so the function that you have is
//         var responseJSON = JSON.parse(xhrRequest.response);
//         var imageUrl = responseJSON.message;
//         $('#dog-image').attr('src',imageUrl);
//     };
//     xhrRequest.onerror = function(){
//         console.log("Request Failed");
//     };
//     // To initialize the request, first call open() it will initialize the request for you
//     // First thing you have to initialize is the get method next you have to specify is the link
//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
//     xhrRequest.send();
// } 

// jQuery request using Ajax
function fetchRandomDogImageUsingAjax(){
    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function(data){
            
    //             // var responseJSON = JSON.parse(xhrRequest.response);
    //             var imageUrl = data.message;
    //             $('#dog-image').attr('src',imageUrl);
            
    //     }
    // });

    // Below code gives error
    // $.ajax({
    //         url: 'https://dog.ceo/api/breeds/image/random',
    //         method: 'GET',
    //         success: function(data){
                
    //                 // var responseJSON = JSON.parse(xhrRequest.response);
    //                 var imageUrl = data.message;
    //                 $('#dog-image').attr('src',imageUrl);
                
    //         },
    //     }).fail(function(){
    //         console.log('error');
    // });

    $.get('https://dog.ceo/api/breeds/image/random',function(data){
            var imageUrl = data.message;
            $('#dog-image').attr('src',imageUrl);
     });
     
    //  Below code gives error
    // $.get('https://dog.ceo/api/breeds/image/random',function(data){
    //         var imageUrl = data.message;
    //         $('#dog-image').attr('src',imageUrl);
    //  }).fail(function(xhr, textStatus, errorThrow){
    //         console.log("Request Failed");
    //  }); 
}
// We have to handle the fetch of the button
// To handle this click you should pass the function


$('#fetch-dog-image-button').click(fetchRandomDogImage);
//Output: Raw JSON string {"message":"https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_151824.jpg","status":"success"}

// 13. jQuery request using Ajax
$('#fetch-dog-image-button').click(fetchRandomDogImageUsingAjax);