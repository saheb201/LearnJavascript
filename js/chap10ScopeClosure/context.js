//Execution Context

function a(){
    b()
    console.log('I am Function a')
}

function b(){
    d()
    console.log('I am Function b')
}

function c(){
    
    console.log('I am Function c')
}

function d(){
    c()
    console.log('I am Function d')
}

var x = 100;
a()
console.log('I am global')


//  Execution contex Stack(wait)
//Execution of c  function Contex // 5
//Execution of d function Contex // 4
//Execution of b function Contex // 3
//Execution of a function Contex // 2
//Execution of global contex // 1


// how to  Execut last in fast out
//Execution of c  function Contex // 1
//Execution of d function Contex // 2
//Execution of b function Contex // 3
//Execution of a function Contex // 4
//Execution of global contex // 5

