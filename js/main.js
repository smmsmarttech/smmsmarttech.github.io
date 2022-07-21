
function aler(){
     var  select = document.getElementById("selectbox");
   value = select.options[select.selectedIndex].value;
   var mon = money();
     var LINK = document.getElementById ("link").value;                                                                                   
     var data = {'id':value,'amount':mon,'link':LINK};
       localStorage.setItem("object_name",JSON.stringify(data));
     document.getElementById("charge").value = "₹"+mon+" INR";


     if(value == 1){
          document.getElementById("paynow").href = "https://rzp.io/l/a8tj6aZ5";////https://rzp.io/l/T41fDod9K6
     }else if(value == 2){
          document.getElementById("paynow").href = "https://rzp.io/l/K1XZe4R";
     }
     else if(value == 3){
          document.getElementById("paynow").href = "https://rzp.io/l/1z56Ba1";
     }
     else if(value == 4){
          document.getElementById("paynow").href = "https://rzp.io/l/T41fDod9K6";
     }
     else if(value == 5){
          document.getElementById("paynow").href = "ttps://rzp.io/l/OhV5tn4B";
     }

     else if(value == 6){
          document.getElementById("paynow").href = "https://rzp.io/l/4kGxqssoH";
     }
     else if(value == 7){
          document.getElementById("paynow").href = "https://rzp.io/l/5X4fYRI6F";
     }
     else if(value == 8){
          document.getElementById("paynow").href = "https://rzp.io/l/vr4MDfOyO";
     }
     else if(value == 9){
          document.getElementById("paynow").href = "https://rzp.io/l/tDdc9jL4X";
     }
     


     else if(value == 10){
          document.getElementById("paynow").href = "https://rzp.io/l/qbar37Qa";
     }
     else if(value == 11){
          document.getElementById("paynow").href = "https://rzp.io/l/sQEbuJ0wp";
     }
     else if(value == 12){
          document.getElementById("paynow").href = "https://rzp.io/l/0coIrDyz";
     }
     else if(value == 13){
          document.getElementById("paynow").href = "https://rzp.io/l/d7n8lDYB";
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
   else if(value == 5){
     return 1000;

   }
   else if(value == 6){
     return 1800;

   }
   else if(value == 7){
     return 2300;

   }
   else if(value == 8){
     return 120;

   }
   else if(value == 9){
     return 190;

   }
   else if(value == 10){
     return 250;

   }
   else if(value == 11){
     return 220;

   }
   else if(value == 12){
     return 300;

   }
   else if(value == 12){
     return 160;

   }
   
   
}
//https://api.whatsapp.com/send?phone=9390558027&text=Hi
