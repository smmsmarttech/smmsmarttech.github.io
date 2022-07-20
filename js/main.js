
function aler(){
     var  select = document.getElementById("selectbox");
   value = select.options[select.selectedIndex].value;
   var mon = money();
     var LINK = document.getElementById ("link").value;                                                                                   
     var data = {'id':value,'amount':mon,'link':LINK};
       localStorage.setItem("object_name",JSON.stringify(data));
     document.getElementById("charge").value = "₹"+mon+" INR";


     if(value == 1){
          document.getElementById("paynow").href = "https://rzp.io/l/JlVcHq9";
     }else if(value == 2){
          document.getElementById("paynow").href = "https://rzp.io/l/K1XZe4R";
     }
     else if(value == 3){
          document.getElementById("paynow").href = "https://rzp.io/l/1z56Ba1";
     }
     else if(value == 4){
          document.getElementById("paynow").href = "https://rzp.io/l/T41fDod9K6";
     }
     
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
