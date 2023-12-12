let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")

let awayStoreEl = document.getElementById("away-score")

let homeScore = 0
let awayScore = 0


// Highlight the winning team at the moment
function highlight(){
       if (homeStoreEl.textContent > awayStoreEl.textContent){
            homeStoreEl.classList.add("winning")
            awayStoreEl.classList.remove("winning")
       }
       else if (homeStoreEl.textContent < awayStoreEl.textContent) {
            awayStoreEl.classList.add("winning")
            homeStoreEl.classList.remove("winning")
       }
       else {
            homeStoreEl.classList.remove("winning")
            awayStoreEl.classList.remove("winning")
       }
}

// Count the points from the home team and the away team
function homeScore1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
    highlight()
}

function homeScore2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
    highlight()
}

function homeScore3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
    highlight()
}

function awayScore1(){
    awayScore += 1
    awayStoreEl.textContent = awayScore
    highlight()
}

function awayScore2(){
    awayScore += 2
    awayStoreEl.textContent = awayScore
    highlight()
}

function awayScore3(){
    awayScore += 3
    awayStoreEl.textContent = awayScore
    highlight()
}

// make a new game button
function restart() {
  let txt;
  if (confirm("Are you sure you wanna restart the game?")) {
    homeScore = 0
    awayScore = 0
    homeStoreEl.textContent = homeScore
    awayStoreEl.textContent = awayScore
  }
}
