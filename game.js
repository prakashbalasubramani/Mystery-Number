
var randomNumber = Math.round(Math.random()*10);
var SubmitButton = document.getElementById("Submit");
var message =document.getElementById("message");
var lives=document.getElementById("lives");
var msg;

SubmitButton.onclick = () =>{
    let inputNumber=document.getElementById("number-input").value;
    lives--;
    if(inputNumber==randomNumber)
    {
        location.href="win.html";

    }
    else if(inputNumber < randomNumber)
    {
        msg="oops ! You guess low"


    }
    else if(inputNumber > randomNumber)
    {
        msg="oops ! You guess high"


    }
    else if(lives==0)
    {
        location.href="loose.html"
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    lives.innerHTML=lives;
}