let video = document.querySelector("video");

let constraints = {
    video: true,
    audio: false
}

// navigator is the property of window object you can write it like this also
// window.navigator.mediaDevices.getUserMedia(constraints)
// .then((stream) => {
       
// })


// navigator -> global object, browser info
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {

  video.srcObject = stream;
})
