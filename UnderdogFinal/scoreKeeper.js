const dog_result = document.getElementById("dog_result");
const db = document.getElementById("db");
const music = new Audio('https://youtu.be/ojULkWEUsPs');

db.addEventListener('click', getRandomDog)

function getRandomDog() {
    fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(data => {
        if(data.url.includes('.mp4')){
            getRandomDog()
        } else {
        
        dog_result.innerHTML = `<img src="${data.url}"/>`
        }
    });

}


music.play();
music.loop =true;
music.playbackRate = 2;
music.pause();qqazszdgfbgtyj