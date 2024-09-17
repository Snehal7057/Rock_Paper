let userScore=0;
let computerscore=0;

const choises=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

const gencomputerchoice=() => {
    const options = ["rock","paper","scissors"];  
    const randIdx= Math.floor(Math.random()*3);   
    return options[randIdx];
};
 const drawgame=()=>{
       console.log("game was draw.");
       msg.innerText = "Game Was Draw! Plz Play Again......";
       msg.style.backgroundColor="#081b31";
 }
 const showwinner=(userwin ,userchoice , computerchoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        compScorepara.innerText = computerscore;
        console.log("you lose");
        msg.innerText = `You lose!${computerchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
 };

const playgame=(userchoice) =>{
    console.log("user choice=",userchoice);
    //generate comp choice
    const computerchoice=gencomputerchoice();
    console.log("comp choice=",computerchoice);
    if(userchoice === computerchoice){
        drawgame();

    }else{
        let userwin=true;
        if(userchoice==="rock"){
        userwin= computerchoice === "paper" ? false:true;
        }else if(userchoice === "paper"){
        userwin = computerchoice === "scissors" ? false :true;
        }else{
            userwin= computerchoice==="rock"?false:true;
        }
        showwinner(userwin , userchoice , computerchoice);
    }
};

choises.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    console.log("choice was clicked",userchoice);
    playgame(userchoice);
    });
});