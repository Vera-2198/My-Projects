let count = 0

twelveEl = document.getElementById("twelve-el")
function first() {
    twelveEl.textContent = count
    console.log("count")
}
first()
let countB = 0
fiveEl = document.getElementById("five-el")
function five() {
    fiveEl.textContent = countB
}
five()

let adds = "+1"
addEl = document.getElementById("adds")
function addis() {
    addEl.textContent = adds
    console.log("adds")
}
addis()

let two = "+2"
twoEl = document.getElementById("two")
function twos() {
    twoEl.textContent = two
    console.log("two")
}
twos()
let three = "+3"
threeEl = document.getElementById("three")
function threes() {
    threeEl.textContent = three
    console.log("three")
}
threes()
let fets = "+1"
firstEl = document.getElementById("first")
function firsts() {
    firstEl.textContent = fets
    console.log("first")
}
firsts()

let sec2 = "+2"
secondEl = document.getElementById("second")
function seconds() {
    secondEl.textContent = sec2
    console.log("second")
}
seconds()

let thr2 = "+3"
thirdEl = document.getElementById("third")
function thirds() {
    thirdEl.textContent = thr2
    console.log("third")
}
thirds()
let count2 = 0
countEl = document.getElementById("twelve-el")
function one() {
    count2 = count2 + 1
    countEl.textContent = count2
    console.log("button clicked")
}
countEl = document.getElementById("twelve-el")
function doc() {
    count2 = count2 + 2
    countEl.textContent = count2
    console.log("clicked")
}
countEl = document.getElementById("twelve-el")
function doc1() {
    count2 = count2 + 3
    countEl.textContent = count2
    console.log("clicked")
}
let count1 = 0
count2El = document.getElementById("five-el")
function doc2() {
    count1 = count1 + 1
    count2El.textContent = count1
    console.log("button clicked")
}
count2El = document.getElementById("five-el")
function doc3() {
    count1 = count1 + 2
    count2El.textContent = count1
    console.log("clicked")
}
count2El = document.getElementById("five-el")
function doc4() {
    count1 = count1 + 3
    count2El.textContent = count1
    console.log("clicked")
}

docEl = document.getElementById("btn")
function btns() {
    countEl.textContent = 0
    count2El.textContent = 0
    count2 = 0
    count1 = 0
    console.log("clicked")
}