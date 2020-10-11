/**
 * Exercise 1
 *
 * create an event listener which will show
 * a popup(add class "open" to "popup")
 * when you double click on ".trigger"
 */

const findTrigger = document.querySelector('.trigger');
findTrigger.addEventListener('dblclick', (event) => {
    const findPopUp = document.querySelector('.popup');
    findPopUp.classList.add('open');
}) ;

/**
 * Exercise 2
 *
 * create an event listener which will toggle
 * zoom class on image when you double click on
 * image container(".img")
 */

const findImage = document.querySelector('.img');
findImage.addEventListener('dblclick', (event) => {
    imageLocated = document.querySelector('.img img');
    let zoomOrNot = true;
    if(imageLocated.classList.contains('zoom') === true){
        imageLocated.classList.remove('zoom');
    } else{
        imageLocated.classList.add('zoom');
        }
}) ;

/**
 * Exercise 3
 *
 * create an event listener which will stop/start music player
 * when you switch tab/come back to the tab in the browser.
 * 
 * NOTE: to test please interact with the page, and switch tabs
 */

 document.addEventListener('visibilitychange', (event) => {
    const audioTrack = document.querySelector('source');
    audioTrack.pause});



// togglePlay = () => {
//     if (isPlaying) {
//         myAudio.pause();
//     } else {
//         myAudio.play();
//     }
// };

// myAudio.onplaying = function() {
//     isPlaying = true;
// };
// myAudio.onpause = function() {
//     isPlaying = false;
// };
