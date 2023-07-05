// function something (greet,  name){
//     function sayHi(){
       
//         console.log(greet,name)
//     }

//     sayHi()
// }

// something('good Morning', 'saheb')

// 
function something (greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
       
    }
var massage = greet + " " + getFirstName()
console.log(massage)

   
}

something('GoodMorning', 'Saheb  Ali');
