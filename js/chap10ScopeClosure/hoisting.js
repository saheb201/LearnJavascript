var  a = 100;
newPrint(a)

print(10)
var newPrint = print
newPrint(45)

function print(a){
    console.log(a)
}

print(a)



//Creational Phase
// a = undefined
// newprint skip
//print skip
// newPrint = undefine
// print store function refarence
// print skip


//Executional Phase
// a = 100(update value)
// newPrint ( error)
// print (print the value)
// newPrint update refarence
// newPrint (print the value)
// print (print the value)


// result in terminal
// error 
// 10
//45
//100