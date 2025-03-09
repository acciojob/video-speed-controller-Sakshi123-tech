// Select elements
const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volumeSlider = player.querySelector('input[name="volume"]');
const speedSlider = player.querySelector('input[name="playbackRate"]');
const rewindButton = player.querySelector('.rewind');
const skipButton = player.querySelector('.skip');

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Handle volume control
function handleVolume() {
  video.volume = this.value;
}

// Handle playback speed
function handlePlaybackSpeed() {
  video.playbackRate = this.value;
}

// Handle rewinding
function rewind() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle skipping
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle progress bar update
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub through video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

volumeSlider.addEventListener('input', handleVolume);
speedSlider.addEventListener('input', handlePlaybackSpeed);

rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);

let isMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
progress.addEventListener('mousedown', () => (isMouseDown = true));
progress.addEventListener('mouseup', () => (isMouseDown = false));
