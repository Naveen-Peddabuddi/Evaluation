
document.querySelector("#form").addEventListener('click',submit)
function submit(event){
  event.preventDefault();
    setTimeout( function (){
     alert("Order Placed Successfully")
     setTimeout( function (){
        alert("Your Order is Accepted ")
        setTimeout( function (){
            alert("Your Order is being Cooked")
            setTimeout( function (){
                alert("Your Order is Ready")
                setTimeout( function (){
                    alert("Order Out for Delivery")
                    setTimeout ( function (){
                        alert("Order Delivered")
                    },1000)
                   },12000)
               },10000)
           },8000)
       },3000)
    },3000)
    
}