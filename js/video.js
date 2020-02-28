var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
    video.play();
    let vol = document.querySelector("#volume");
    vol.innerHTML = video.volume * 100 + "%";
    console.log("Play Video");
} 

function pauseVid() { 
    video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
    video.playbackRate *= 0.8;
    console.log("Speed is " + video.playbackRate + "%");
} 

function increaseSpeed() {
    video.playbackRate *= 1.25;
    console.log("Speed is " + video.playbackRate + "%");
} 

function skipAhead() {
    
    if (video.currentTime < (video.duration - 60)) {
        video.currentTime += 60;
        console.log("Current location is " + video.currentTime);
    }
    else {
        console.log("Restart Video");
        video.currentTime = 0;
        video.playbackRate = 1;
        video.play();
    }
    
} 

function mute() {
    
    if (video.muted)
    {
        let muteButton = document.querySelector("#mute");
        muteButton.innerHTML = "Mute";
        console.log("Changing to Unmuted");
        video.muted = false;
        
    }
    else
    {
        let muteButton = document.querySelector("#mute");
        muteButton.innerHTML = "Unmute";
        console.log("Changing to Muted");
        video.muted = true;  
    }
}

function changeVolume() {
    var slider = document.getElementById("volumeSlider");
    console.log("volume is " + slider.value + "%");
    video.volume = slider.value / 100
    let vol = document.querySelector("#volume");
    vol.innerHTML = video.volume * 100 + "%";
}
       

function gray() { 
    
    video.classList.add("grayscale");
    console.log("In grayscale")
}

function color() {
    video.classList.remove("grayscale");
	console.log("In color") 
}
