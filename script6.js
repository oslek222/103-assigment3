




let point=1000;
let login=true;

if(points===1000){
    console.log("Yes");
}else{
    console.log("no");
}
if(login){
    console.log("welcome to the system");
}

let cash=500;
let card=false;
let paypal=false;
let total=600;
var cart=["laptop hp i7","Alexa dot","airpods","wallet"];

function transaction();
    
    for(var i=0;i<4;i++){
        
        document.write(`<p>the product number ${i+1}: ${cart[i]}</p>`);
}

if(cash>total){
    console.log("sucsessful transaction");
    transaction();
}
else if(card){
    console.log("Sucsessful transaction with credit/debit card");
    transaction
}
else{
    console.log("Fail!!");
}

const paymentMethod="cash";

switch(pamentMethod){
        case "cash":
            transaction();
        break;
        case "credt":
            transaction();
        break;
    default:
        document.write(`incorrect transaction`);
        break;
}