

let score = 0;
//**********************************************score************************************ */
function updateScore() {
    let showScore = document.body.getElementsByClassName("score")[0];
    showScore.textContent = score;
}
//*************************************on click************************************************** */
function onClickDuck(event) {
    console.log("click " + event.target.id);
    score += 10;
    updateScore();
    event.target.removeEventListener("click", onClickDuck);
}

//*************************************creacion de patos********************************************* */
function createDucks(qty, container, tag) {

    for (let i = 0; i < qty; i++) {
        let tmp = document.createElement("div");
        tmp.classList.add("duck");
        tmp.id = tag + i;
        tmp.addEventListener("click", onClickDuck);

        container.appendChild(tmp);
        let containerWidth = container.style.width;
        container.style.width = (i + 1) * 120 + "px";
    }

}
/*
function animateduck() {
    let move=document.getElementById('duck-path');
    gsap.to(".duck", {
        duration: 5,
         motionPath: {
            path: move,
            align: move,
            autoRotate: true,
            alignOrigin: [0.2, 0.2]
        },
        onComplete: function () {
            gsap.to(".duck", {
               
                onComplete: function () {
                    animateduck();
                }
            });
        }
    });
}*/
//*************************************top-ducks************************************************** */
function animatioDuckTop() {
    let pos1 = document.body.getElementsByClassName("top-ducks")[0];
    gsap.to(pos1, {
        duration: 18,
        repeat: 10,
        left: 400,
       
    });
}

//*************************************bottom-ducks************************************************** */
function animationDuckBottom() {
    let pos2 = document.body.getElementsByClassName("bottom-ducks")[0];
    gsap.to(pos2, {
        duration: 18,
        repeat: 10,
        left: 550,
       

        
       
    });

}


 //*************************************iniciar event************************************************** */ 
document.addEventListener('DOMContentLoaded', (event) => {

    updateScore();
    animatioDuckTop();
    animationDuckBottom();

    let topDucks = document.body.getElementsByClassName("top-ducks")[0];
    createDucks(10, topDucks, "t");

    let bottomDucks = document.body.getElementsByClassName("bottom-ducks")[0];
    createDucks(10, bottomDucks, "b");


});