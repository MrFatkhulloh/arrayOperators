//  --------1st----------
var a = ["Jazz", "Blues"];
console.log(a);

//  --------2nd----------
var r = "Rock-n-roll";
a.push(r);
console.log(a);

//  --------3rd----------
var c = "Classics";
if(a.length%2) {
    a.splice((a.length+1)/2 - 1, 1, c);
}else {
    a.splice(a.length/2 - 1, 1, c);
}
console.log(a);

//  --------4th----------
a.shift();
console.log(a);

//  --------5th----------
a.unshift("Rap", "Reggae");

console.log(a);