// Iteration 1: Declare variables required for this game
let gamebody = document.getElementById("game-body")
let lives  = document.getElementById('lives')
let seconds = document.getElementById('timer').textContent
let zombieId = 0;
// Iteration 1.2: Add shotgun sound
const shotgun = new Audio('./assets/shotgun.wav')
gamebody.onclick = () =>{
    shotgun.pause()
    shotgun.currentTime=0
    shotgun.play()
}
// Iteration 1.3: Add background sound
const bgSound = new Audio('./assets/bgm.mp3')
bgSound.play()
bgSound.loop = true;
// Iteration 1.4: Add lives
let xlives = 5;
// Iteration 2: Write a function to make a zombie
function getRandomimg(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const img = [
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
]
createZombie()
function createZombie(){
let randomImg = img[getRandomimg(0, img.length)]  
gamebody.innerHTML += `<img src='./assets/${randomImg}'
class="zombie-image" id="zombie${zombieId}">`

let zombie = document.getElementById(`zombie${zombieId}`)
zombie.style.transform = `translateX(${getRandomimg(15,75)}vw)`
zombie.onclick = () =>{
    zombieDestruct(zombie)
}
}
// Iteration 3: Write a function to check if the player missed a zombie
function check(zombie){
    if(zombie.getBoundingClientRect().top<=0){
        xlives--;
        return true;
        console.log(xlives)
    }
    return false;   
}
// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function zombieDestruct(zombie){
    zombie.style.display = 'none'
    zombieId++
    createZombie()
    lesser()
}
// Iteration 5: Creating timer
let timer = setInterval(function(){
    seconds--;
    document.getElementById("timer").textContent = seconds
    let zombie = document.getElementById(`zombie${zombieId}`)
    if(check(zombie)==true){
        zombieDestruct(zombie)
        if(xlives==0){
            clearInterval(timer)
            location.href='./game-over.html'
        }
    }
    if(seconds ==0){
        clearInterval(timer)
        location.href='./win.html'
    }

},1000)

function lesser(){
let decreaseBar = document.getElementById("max-lives")
    decreaseBar.style.width = `${xlives*25}vw`
    // xlives--
}
// Iteration 6: Write a code to start the game by calling the first zombie
makeZombie(zombieId);
// Iteration 7: Write the helper function to get random integer
function getRandomimg(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }