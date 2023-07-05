
//higer function
function add(a,b){
    return a+b;
}
function manipulet(a,b, func){
    var c = a+b;
    var d = a-b;

    function multyply(){
        var m = func(a,b);
        return c*d*m;
    }
    return multyply;
}

var multyply = manipulet(3,4, add)
console.log(multyply())