



var data = localStorage.getItem("object_name");
localStorage.clear(); //clean the localstorage
var id = JSON.parse(data).id;
var amount = JSON.parse(data).amount;
var link = JSON.parse(data).link;


function wasend(){
    window.open("https://api.whatsapp.com/send?phone=9390558027&text="+"Send The Details For Fast Work  ,"+"Order Id == "+ id + " , "+ " Amount == "  + amount + " , " +" Link(imp) :- " + link)
}






