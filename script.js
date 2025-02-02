const video = document.getElementById('video');
const playButton = document.getElementById('player__button');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progress__filled');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const fastForwardButton = document.getElementById('fast-forward');

let isPlaying = false;

// Play/pause the video
playButton.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playButton.textContent = '►'; // play icon
    } else {
        video.play();
        playButton.textContent = '❚ ❚'; // pause icon
    }
    isPlaying = !isPlaying;
});

// Update progress bar as the video plays
video.addEventListener('timeupdate', () => {
    const progressPercentage = (video.currentTime / video.duration) * 100;
    progress.value = progressPercentage;
    progressFilled.style.width = `${progressPercentage}%`;
});

// Click on progress bar to seek
progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * video.duration;
    video.currentTime = seekTime;
});

// Control volume
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Control playback speed
playbackSpeedControl.addEventListener('input', () => {
    video.playbackRate = playbackSpeedControl.value;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Fast forward 25 seconds
fastForwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});
