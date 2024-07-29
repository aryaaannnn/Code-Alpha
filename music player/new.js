document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const volumeControl = document.getElementById("volume");
    const playlist = document.getElementById("playlist");
    const tracks = playlist.getElementsByTagName("li");
  
    let currentTrackIndex = 0;
  
    const loadTrack = (index) => {
      const track = tracks[index];
      const src = track.getAttribute("data-src");
      audioPlayer.src = src;
      audioPlayer.load();
    };
  
    const playPauseTrack = () => {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
      } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
      }
    };
  
    const nextTrack = () => {
      currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
      loadTrack(currentTrackIndex);
      audioPlayer.play();
      playPauseButton.textContent = "Pause";
    };
  
    const prevTrack = () => {
      currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
      loadTrack(currentTrackIndex);
      audioPlayer.play();
      playPauseButton.textContent = "Pause";
    };
  
    playPauseButton.addEventListener("click", playPauseTrack);
    nextButton.addEventListener("click", nextTrack);
    prevButton.addEventListener("click", prevTrack);
    volumeControl.addEventListener("input", (event) => {
      audioPlayer.volume = event.target.value;
    });
  
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].addEventListener("click", () => {
        currentTrackIndex = i;
        loadTrack(currentTrackIndex);
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
      });
    }
  
    // Load the first track by default
    loadTrack(currentTrackIndex);
  });
  