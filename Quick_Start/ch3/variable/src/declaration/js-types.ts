let myBoolean = true;               // boolean타입
let myNumber = 10;                  // number 타입
let myString = "hello";             // string 타입
let myUnderfined;                    // underfined 타입
let myNull = null;                  // null 타입 (객체 타입이 비어 있다면)
let myObject = { name: "happy" };   // 객체 타입(객체 리터럴)
let myObject2 = [1, 2, 3];          // 객체 타입(배열)
let myFunction = function (a) { return a; };    // 함수 타입

console.log("boolean : " + typeof myBoolean);
console.log("number : " + typeof myNumber);
console.log("string : " + typeof myString);
console.log("underfined : " + typeof myUnderfined);
console.log("null : " + typeof myNull, myNull === null);
console.log("object : " + typeof myObject, typeof myObject2);
console.log("function : " + typeof myFunction);
console.log("underfined == null : " + (underfined == null));
console.log("underfined === null : " + (underfined === null));