var a = 10;

function a(){
    var b = 12;
     function b(){
        var c = 15;
        console.log(c)
     }
     function c(){
        var d = 56;
        console.log(d)
     }
     console.log(b)
     d()
     b()
     c()
}
function d(n){
    return n +a;
}


// scope define
// function a =  a,b  b() c()d()
// function b =  a,b, c b() c() d()
// function c =  a,b,d  b() c() d()
// function d =  a,n (a)