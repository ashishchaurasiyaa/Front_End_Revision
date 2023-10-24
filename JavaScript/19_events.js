// console.log("Events")
// const btn = document.querySelector("button")

// function random(number) {
//     console.log(number)
//     return Math.floor(Math.random() * (number + 1))
// }

// function changeBackground() {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);
// // btn.removeEventListener("click", changeBackground);

// const controller = new AbortController();

// btn.addEventListener("click", () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// }, {
//     signal: controller.signal
// });

// controller.abort();

// const form = document.querySelector("form");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const para = document.querySelector("p");

// form.addEventListener("submit", (e) => {
//     if (fname.value === "" || lname === "") {
//         e.preventDefault();
//         para.textContent = "You need to fill in both names!";
//     }
// });

// const output = document.querySelector("#output");

// function handleClick(e) {
//     output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.addEventListener("click", handleClick);

// container.addEventListener("click", handleClick);

// button.addEventListener("click", handleClick);

// const btns = document.querySelector("button");
// const box = document.querySelector("div")
// const video = document.querySelector("video");

// btns.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click"), () => video.play());
// box.addEventListener("click", () => box.classList.add("hidden"))

// document.getElementById('owl').onclick = function() {
//     alert("owl clicked")
// }

// document.getElementById('owl').addEventListener('click', function() {
//     alert("owl cikc")
// }, false)

//attachment(), jQuery,
// type, timestamp, defaultPrevented target,
// toElement, srcElement, currentTarget, client,
// clienty, screenX, screenY altkey, ctrlkey,
// shiftkey, keyCode


// bubbling mode
// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log('clicked inside the ul');
// }, false)

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log("owl clicked");
//     e.stopPropagation()
// }, false)

// when use stopPropagation then don't go upper stop


// Capturing mode
// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log('clicked inside the ul');
// }, true)

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log("owl clicked");
// }, true)

// // Prevent default example

// document.getElementById('images').addEventListener('click', function(e) {
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log("owl clicked");
//     e.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener('click', function(e) {
//     console.log('google clicked')
//     console.log(e)
//     e.preventDefault()
//     e.stopPropagation()
// }, false)

// example

document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.parentNode);
    if (e.target === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    // removeIt.parentNode.removeChild(removeIt)
}, false)