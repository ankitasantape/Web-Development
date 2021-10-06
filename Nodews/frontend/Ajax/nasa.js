function displayImage(data){
    // $('<img>',{
    //      src: data.url,
    //      height: '50%',
    //      width: '50%'
    // }).appendTo('#image-container');

    var img = $(document.createElement('img'));
    img.attr('src',data.url);
    img.appendTo('#image-container');

}
$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=UIiXCaSWIKCe0YUrdM8KhmwXnVog3IC0l7PFilir&date=2018-06-02',
    method: 'GET',
    success: displayImage
    
});