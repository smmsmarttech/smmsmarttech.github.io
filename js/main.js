
function fun(){
   var  select = document.getElementById("selectbox");
   value = select.options[select.selectedIndex].value
   var mon = money()
   document.getElementById("charge").value = "₹"+mon+" INR";
}
function money(){
    if(value == 1){
         return 50;
    }else if(value == 2){
        return 90;
   }else if(value == 3){
        return 200;
    }else if(value == 4){
        return 90;
   }
}
//https://api.whatsapp.com/send?phone=9390558027&text=Hi
function wasend(){
     window.open("https://api.whatsapp.com/send?phone=9390558027&text="+"Order Id == "+value,'_self')
}
function watest(){
     window.alert("Hello")
}