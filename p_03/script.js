const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



///Functions//////
// 1- Toggle Video -Play and Pause Video
function toggleVideo() {

    if (video.paused) {
        video.play();
    }else{
        video.pause();
    }
}

// 2- UpdateIcon - Toggle between play and Pause Button
function updateIcon (){

    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>' 
    }
    else{
        play.innerHTML = ' <i class="fa fa-pause fa-2x"></i>'
    }
}

// 3 - Update Progress - Update the position of progress bar

function updateProgress() {

    //update progressBar
    progress.value = video.currentTime/video.duration*100;

    //round down the minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    //round down the second
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    timestamp.innerHTML = `${minutes}:${seconds}` ;
    
    
}

// 4 - stopvideo - stop the Video
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

// 5 - setProgress - update the video time based on manually clicking the bar
function setProgress() {

     //update progressBar
    video.currentTime = progress.value * video.duration / 100;
}


// Event Listners
// 1- Video Element - click to play or pause video
video.addEventListener('click',toggleVideo);

// 2- Video Element - pause to toggle play icon back to pause icon
video.addEventListener('pause',updateIcon);

// 3- Video Element - play to toggle pause icon back to play icon
video.addEventListener('play',updateIcon);

// 4- Video Element - Update progress bar and timestamp
video.addEventListener('timeupdate', updateProgress);

// 5- Play Button - click to play/pause video
play.addEventListener('click',toggleVideo);

// 6- Stop Button - Stopping the Video
stop.addEventListener('click', stopVideo);
video.addEventListener('ended',stopVideo);

// 7- Progress Bar - Change position to change time of playback
progress.addEventListener('change', setProgress);