//This is used to check if the roblox name you would like is available,try using //the name call23re. ;D
//To use it just go to http://www.roblox.com and paste it in the console.
name = prompt("What username would you like?");
if (name=="call23re") {
alert (name + " is amazing.");
}
$.get("http://web.roblox.com/UserCheck/DoesUsernameExist?username="+name).success(function(r){
if (r.success==false) {
console.log("true");
alert ("The username: " + name + " is currently available.");
return;
}
if (r.success==true) { 
console.log("false");
alert ("The username: " + name + " has been taken.");
}
});
//call23re
