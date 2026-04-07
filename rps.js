let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#userscore");
let comp = document.querySelector("#compscore");


let User1 =0;
let Comp1 = 0;

Compchoice=()=>{
    let options =["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

drawgame=()=>{
    msg.innerText = "Game was drawn";
    msg.style.backgroundColor = "grey"; 


}

showwinner=(userwin,UserChoice,Compselect)=>{
    if(userwin==true){
        User1++;
        msg.innerText=`Your ${UserChoice} beats ${Compselect}`;
        msg.style.backgroundColor="green";
        user.innerText=`${User1}`
    }else{
        Comp1++;
        msg.innerText=`Your ${UserChoice} lost to ${Compselect}`;
        msg.style.backgroundColor="red";
        comp.innerText=`${Comp1}`;
    }

}
playgame=(UserChoice)=>{
    let Compselect= Compchoice();
    if(UserChoice==Compselect){
        drawgame();
        return;

    }
    let userwin = false;
    if(UserChoice=="rock" && Compselect=="scissors")userwin=true;
    if(UserChoice=="paper"&& Compselect=="rock")userwin=true;
    if(UserChoice=="scissors" && Compselect=="paper")userwin=true;

    showwinner(userwin,UserChoice,Compselect);


    
   
}




a=()=>{
    choice.forEach((ch)=>{
        ch.addEventListener("click",()=>{
         let UserChoice=  ch.getAttribute("id");
         console.log(UserChoice);
         playgame(UserChoice);

        })

    }

    )
}
a();

