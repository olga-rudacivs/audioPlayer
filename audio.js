/*main*/
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const playNum = 0;

function isPlay() {
    if(audio.paused == true)
    {audio.play();}
    else if (audio.paused == false)
{audio.pause();}
}

function toggleBtn() {
    button.classList.toggle('pause');
  }
  button.addEventListener('click', toggleBtn);

/* pic */
