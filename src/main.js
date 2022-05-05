const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector("audio");

const songList = [
    {
        path: "Affair.mp3",
        songName: "Affair",
    },
    {
        path: "Duniyaa.mp3",
        songName: "Duniyaa - Luka Chuppi",
    },
    {
        path: "Brown_munde.mp3",
        songName: "Brown munde",
    },
    {
        path: "La_Calin.mp3",
        songName: "La Calin",
    },
    {
        path: "Patlamaya_Devam.mp3",
        songName: "Patlamaya Devam",
    },
    {
        path: "Born_to_shine.mp3",
        songName: "Born To Shine - Diljit Dosanjh",
    },
    {
        path: "khairiyat_Pucho.mp3",
        songName: "khairiyat Pucho - Sushant Singh Rajput",
    },
    {
        path: "Waalian.mp3",
        songName: "Waalian - Harnoor",
    },
    {
        path: "Thoda_Thoda_Pyaar.mp3",
        songName: "Thoda Thoda Pyaar - Stebin Ben",
    },
    {
        path: "Jitni_Dafa.mp3",
        songName: "Jitni Dafa",
    },
];
let song_Playing = false;

// play song
function playSong() {
    song_Playing = true;
    audio.play();
    playPause.classList.add("active");

    // change icon
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

// pause song
function pauseSong() {
    song_Playing = false;
    audio.pause();
    playPause.classList.remove("active");

    // change icon
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// play or pause song on click
playPause.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));

// load song
function loadSong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;
}

// current song
let i = 0;

//On load - select first song from song list
loadSong(songList[i]);

// previous song
function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);

// next song
function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);
