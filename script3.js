function hello(name){
    console.log("Hello function"+name);
}

hello("matt");

function sum(arg1,arg2){
    console.log(arg1+arg2);
}
sum(5,4);


function login(){
    var userName=prompt("enter your name:");
    document.write(`<p>welcome to the system ${userName}</p>`);
}
