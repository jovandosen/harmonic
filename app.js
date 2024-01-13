const app = document.getElementById("app");

for(let i = 1; i <= 360; i++) {

    let box = document.createElement("div");

    box.setAttribute("id", i + "-box");

    box.classList.add("box");

    box.style.transform = "rotate(" + (1 * i) + "deg)";

    let ball = document.createElement("div");

    ball.setAttribute("id", i + "-ball");

    ball.classList.add("ball");

    ball.innerHTML = i;

    ball.style.top = "385px";
    ball.style.left = "0px";

    box.appendChild(ball);

    app.appendChild(box);

}

let balls = document.getElementsByClassName("ball");

for(let i = 0; i < balls.length; i++) {
    startBallAnimation(balls[i], 1, i);
}

function startBallAnimation(ball, val, index) {

    // let timeouts = [250, 300, 350, 400, 450, 500];

    let timer = 1000 + (index * 1000);

    setTimeout(function() {

        let interval = setInterval(function() {

            let left = parseInt(ball.style.left);
    
            if(left >= 770) {
                clearInterval(interval);
                ball.style.left = left - 1 + "px";
                startBallAnimation(ball, -1, -1);
                return;
            }
    
            if(left <= 0) {
                clearInterval(interval);
                ball.style.left = left + 1 + "px";
                startBallAnimation(ball, 1, -1);
                return;
            }
    
            ball.style.left = left + val + "px";
    
        }, 1);

    }, timer); // timeouts[numberInRange(5, 0)]

}

/* create a function to get a random number between two numbers */
function numberInRange(max, min) {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
}