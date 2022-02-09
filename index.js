console.log(`meow :3
　／l、
ﾞ（ﾟ､ ｡ ７
　l、ﾞ ~ヽ
　じしf_, )ノ
`)

function play() {
    const audio = document.querySelector("audio");
    audio.volume = 0.5;
    audio.paused ? audio.play() : audio.pause();
    }