// video 38
// var str = 'saheb' // string literal
// var str2 = String ('saheb'); // string conestractore
// var str3 = 10 + "";
// var n = 10;
// var str4 = n.toString();


// console.log(str4);
// console.log(str3);
// console.log(str2);
// console.log(str);


// //************** escape natation
// var str = 'saheb ali \'khan\''//\'' use coutetion
// console.log(str)
// var str2 = 'saheb ali\n khan'// \n new line
// console.log(str2)

// var str3 = 'saheb ali\t khan'// \t use tabe
// console.log(str3)

// var str3 = 'saheb ali\\ khan'// \ backslace
// console.log(str3)


// // comparasation string
// var a = 'saheb'
// var b = 'ali'
// console.log(a > b);


// //string mathod

// var a = "I am "
// var b = "Saheb Ali khan"
// var c = a.concat(b) //  concate variable
// console.log(c);


// var a = "I am "
// var b = "Saheb Ali khan"
// var c = a.concat(' ',b) //  concate variable
// console.log(c);

// //sub concate
var a = "I am"
var b = "Saheb Ali khan"
var c = a.concat(' ',b) //  concate variable
// console.log(c.substring(5, 10));
// console.log(c.substring(5, 10));
// console.log(c);
// console.log(c.charAt(0));
// console.log(c.startsWith("I"));
// console.log(c.endsWith('khan'));
// console.log(c.toUpperCase());
// console.log(c.toLocaleLowerCase());
// console.log(c.indexOf("Ali"));
// console.log("   saheb   ".trim());
// console.log(c.split(" "));

//string lenght
var str = 'saheb'
console.log(str.charAt(0));
var str = "saheb Ali khan"
var lenght = 0;
while(true){
    if(str.charAt(lenght) == ''){
        
     break;
    }else{
        lenght++;
    }
}
console.log(lenght);


console.log(str.length);
