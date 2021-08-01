//loops
var tmp="";
//for loop
for(var i=0;i<=10;i++){//i+=1 i++
tmp +=`<p class="bordered">Description ${i}</
p>`;
console.log(tmp);
}

document.getElementById('grid-container').
innerHTML=tmp;
console.log("continue...");
var numberKids="2";
var parentName="john";
var geoLocation="home";
var jobTitle="plumber";

document.write(`
    <p>"you will be a ${jobTitle}, in ${geoLocation}, and partnered with
    ${partnerName} with ${numberKids} kids"</p>
`)