const playIcon = document.getElementById('play');
const pauseIcon = document.getElementById('pause');
const volume = document.getElementById('volume1');


/* just change the mp3 url for another music you prefer */
var rainAudio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

rainAudio.loop = true;

const setAudio = () =>{
    rainAudio.play();
}

const pauseAudio = () =>{
    rainAudio.pause();
}

pauseIcon.addEventListener('click', ()=>{
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
    volume.style.display  = 'none';
})

playIcon.addEventListener('click', ()=>{
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    volume.style.display  = 'block';
})

const setVolume = () => {
    rainAudio.volume = document.getElementById("volume1").value;
};
