var x = 50; //(this is global variable you can acess fron any where)
function text(){
    var a= 10;
     var x = 10;//(this is function scop variable  you can acess just this scope)
    console.log(x)
}
text()
// you can take variable acess  your preant scope but you con't take acess your child scope variable

console.log(a)


