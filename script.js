const hero = document.querySelector(".hero");
const startBtn = document.getElementById("startBtn");

const envelopeScene = document.getElementById("envelopeScene");
const envelope = document.querySelector(".envelope");
const typed = document.getElementById("typedMessage");

const message = `Happy Girlfriend's Day ❤️

Dear Renu,

Every heartbeat whispers your name.

Thank you for making every ordinary day feel extraordinary.

Your smile is my favourite place.

May our love keep blooming forever.

Happy Girlfriend's Day ❤️

Forever Yours,
Priyanshu ❤️`;

startBtn.addEventListener("click", () => {

    hero.style.display = "none";

    envelopeScene.classList.add("active");

});

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    typeMessage();

});

function typeMessage(){

    typed.innerHTML="";

    let i=0;

    const interval=setInterval(()=>{

        typed.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(interval);

        }

    },40);

}
startBtn.addEventListener("click", () => {
    hero.style.display = "none";
    envelopeScene.classList.add("active");
});