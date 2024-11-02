"use strict";
//primitive types
let a = 12; //number
let b = true; //boolean
let c = "Moti"; //string
console.log(c);
let arr = []; //blank array
const abc = [1, 2, 3, 4]; //fill array
//tuples
let data = [89, "Moti"];
//enums
var UserData;
(function (UserData) {
    UserData["ADMIN"] = "admin";
    UserData["GUEST"] = "guest";
    UserData["SUPER_ADMIN"] = "super_admin";
})(UserData || (UserData = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = "kalua kalua kalua 500";
    StatusCode["NOT_FOUND"] = "404 not_found";
})(StatusCode || (StatusCode = {}));
StatusCode.NOT_FOUND;
//any , unknown
// let d;
// let a: unknown;
// a = 12;
// a = "Moti";
let z;
z = 12;
z = "Moti";
if (typeof z == "string")
    z.toUpperCase();
//void
function xyz() {
    console.log("Your name is Kalua");
}
//never
function zyx() {
    while (true) { }
}
zyx();
console.log("hello");
