var a = 10;

var b;
console.log(a);
console.log(b);

b = 20;
console.log(c);

var c = 50;


//(var a; a = 10;   javascript read variable like this)
//variable Creational Phase(store  variable ,no print, no update any variable value in this phase )
//a = undefine
//b = undefine
//b = undefine

// Executional Phase
// a = 10;(upadate value print 10 )
// b = undefine (still not update before update have console log )
// b = 20(update value )
// c = undefine (still not update before update have console log )
// c = 50(update value )


//Whats is the result
// 10
// undefined
// undefined


