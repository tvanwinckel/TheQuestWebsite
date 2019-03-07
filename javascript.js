function play(sample) {
    __resetSelectionColor();
    __addSelectionColor(sample);
    __addAudioSampleToPlayer(sample);
}

function __resetSelectionColor() {
    var fragments = document.getElementsByClassName("audio-fragment");
    fragments["0"].style.backgroundColor = "rgb(85,117,71)";
    fragments["1"].style.backgroundColor = "rgb(85,117,71)";
    fragments["2"].style.backgroundColor = "rgb(85,117,71)"; 
}

function __addSelectionColor(sample) {
    var selectedFragment = document.getElementById(sample);
    selectedFragment.style.backgroundColor = "purple";    
}

function __addAudioSampleToPlayer(sample) {
    var playerElement = document.getElementById("music-player");
    playerElement.setAttribute("src", sample + ".mp3");
    playerElement.setAttribute("autoplay", "autoplay");
}