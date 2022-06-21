let countHome = 0
let countGuest = 0

let countBoxEl = document.getElementById("countbox-el")
let guestBoxEl = document.getElementById("guestbox-el")
// console.log(countBoxEl)

function add1Point() {
    countHome += 1
    countBoxEl.textContent = countHome
}

function add2Point() {
    countHome += 2
    countBoxEl.textContent = countHome
}

function add3Point() {
    countHome += 3
    countBoxEl.textContent = countHome
}

function add1Points() {
    countGuest += 1
    guestBoxEl.textContent = countGuest
}

function add2Points() {
    countGuest += 2
    guestBoxEl.textContent = countGuest
}

function add3Points() {
    countGuest += 3
    guestBoxEl.textContent = countGuest
}