var move=0;
var cardList=["shinchan","dora","doraemon","mickey","peppa","lion","spongebob","jerry"];
var board=[];
var cardSet;
var rows=4;
var columns=4;
var card1;
var card2;
window.onload=function(){
    shuffle();
    start_game();
}
function shuffle(){
    cardSet=cardList.concat(cardList);
    console.log(cardSet);
    for(let i=0;i<cardSet.length;i++)
    {
        let j=Math.floor(Math.random()*cardSet.length);
        let temp=cardSet[i];
        cardSet[i]=cardSet[j];
        cardSet[j]=temp;
    }
    console.log(cardSet); 
}

function start_game(){
    for(let r=0;r<rows;r++)
    {
        var row=[];
        for(let c=0;c<columns;c++)
        {
            let cardImg=cardSet.pop();
            row.push(cardImg);

            //HTML
            let card=document.createElement("img");
            card.id=r.toString()+"-"+c.toString();
            card.src=cardImg+".png";
            card.classList.add("card");
            card.addEventListener("click",select_cards);
            document.getElementById("board").append(card);
        }
        
        board.push(row);
    }console.log(board);
    
    //setTimeout(hide_cards,1000);
    hide_cards();
}
function hide_cards(){
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<columns;c++)
        {
            let card=document.getElementById(r.toString()+"-"+c.toString());
            card.src="bg.jpg";
            
        }
    }
}
function select_cards(){
    if(this.src.includes("bg"))
    {
        if(!card1)
        {
            card1=this;
            let position=card1.id.split("-");
            let r=parseInt(position[0]);
            let c=parseInt(position[1]);

            card1.src=board[r][c]+".png";
            console.log(card1.src);
        }
        else if(!card2 && this !=card1)
        {
            card2=this;
            let position=card2.id.split("-");
            let r=parseInt(position[0]);
            let c=parseInt(position[1]);

            card2.src=board[r][c]+".png";
            console.log(card1.src);
            setTimeout(check,500)
        }
    }
}
function check(){
    if(card1.src!=card2.src)
    {
        card1.src="bg.jpg";
        card2.src="bg.jpg";
        move+=1;
        console.log(move);
        document.getElementById("moves").innerText=move;
    }
    card1=null;card2=null;
}

let restart=document.getElementById("restart");
restart.addEventListener("click",fresh);
function fresh(){
hide_cards();
card1=null;card2=null;move=0;document.getElementById("moves").innerText=move;
}