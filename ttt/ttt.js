let n = 1;
let sp1 = 0;
let sp2 = 0;
var current = "😍";
// when player looses plays d audio

var audio = new Audio('game3.mp3');
// Function is called whenever player tab on any box
function mainFunction(fill) {
    // check dis function whether x is winner on not
    //The innerHTML property sets or returns the HTML content (inner HTML) of an element
    player();
    if (n <= 9) {
        if (fill.innerHTML == "") {
            fill.innerHTML = (current == "😍") ? "😍" : "😉";
            n++;
            changeplayer();

            if (checkWinner()) {
                if (fill.innerHTML == "😍") {
                    document.getElementById('win').innerHTML = "X is Winner 🥳";

                    score1();
                    audio.play();

                } else {
                    document.getElementById('win').innerHTML = "O is Winner 🥳";

                    score2();
                    audio.play();

                }
            }
        }
    }

    if (n >= 10) {
        document.getElementById('win').innerHTML = "try again😥";
        audio.play();
    }
}
/* Player turn space */
function player() {

    if (n % 2 == 0) {
        document.getElementById("player").innerHTML = "Player: X Turn 😍!";
    } else {
        document.getElementById("player").innerHTML = "Player: O Turn 😉!";
    }
}

function getdata(pra) {
    return document.getElementById(pra).innerHTML;
}

function checkCondition(d1, d2, d3) {
    if (getdata(d1) != "" && getdata(d2) != "" && getdata(d3) != "" && getdata(d1) == getdata(d2) && getdata(d2) == getdata(d3)) {
        return true;
    }
}

function checkWinner() {
    if (checkCondition('d1', 'd2', 'd3') || checkCondition('d4', 'd5', 'd6') || checkCondition('d7', 'd8', 'd9') || checkCondition('d1', 'd4', 'd7') ||
        checkCondition('d2', 'd5', 'd8') || checkCondition('d3', 'd6', 'd9') || checkCondition('d1', 'd5', 'd9') ||
        checkCondition('d3', 'd5', 'd7')) {
        return true;
    }
}

/* Reset Button */
function reset() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("d" + i).innerHTML = "";
        document.getElementById('win').innerHTML = "";
        current = "😍";
        document.getElementById('player').innerHTML = "player X turn 😍";

    }
    n = 1;
}

function demo() {
    let no, ho;

    no = document.getElementById("demo1").value;
    console.log(no);
    localStorage.setItem("name1", no);
    ho = document.getElementById("demo2").value;
    console.log(ho);
    localStorage.setItem("name2", ho);
}

function changeplayer() {
    current = (current == "😍") ? "😉" : "😍";
}

function score1() {
    document.getElementById('box1').innerHTML = sp1 + 1;
    sp1 += 1;
}

function score2() {
    document.getElementById('box2').innerHTML = sp2 + 1;
    sp1 += 1;
}