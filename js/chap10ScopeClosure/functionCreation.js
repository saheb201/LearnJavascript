// function abc(){
//     console.log(' I am Function Abc')
// }

// abc()

//function Creational Phase
//abc (store function refarence)
//skip function call


// Executional Phase
// abc  (check refarence check and execut)


// result
// print "I am Function Abc"


// abc()

// function abc(){
//     console.log(' I am Function Abc')
// }

// abc()


//function Creational Phase
//skip function call
//abc (store function refarence)
//skip function call


// Executional Phase
// abc  (check refarence check and execut)
//abc  (check refarence check and execut)


// result
// print "I am Function Abc"
// print "I am Function Abc"





abc()
// newAbc()

function abc(){
    console.log(' I am Function Abc')
}
var newAbc = function (){
    console.log(' I am Function new Abc')
}
newAbc()

//function Creational Phase
//abc skip function call
//newAbc skip function call
//abc = ref (function refarance assine)
// newAbc = undifined( becaue use variable )



// Executional Phase
//abc Execut (we hvae refarance )
//newAbc errore( still not update value )
//newAbc Execut (now we hvae refarance )




// result
// I am Function Abc
// I am Function new Abc



