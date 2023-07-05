var arr1 = [
    {
       nam: "saheb",
       age: 20
    },
    {
        nam: "ali",
        age: 30
     },
     {
        nam: "alikhan",
        age: 25
     },
     {
        nam: "khan",
        age: 35
     }
   
   
          ]


var arr = [ 2, 4, 8, 3, 8, 9, 44, 45, -8, -4, -9]
arr.sort()
console.log(arr)

arr.sort(function(a,b){
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }else{
        return 0
    }
})
console.log(arr)

arr1.sort(function(a,b){
    if(a.age > b.age){
        return 1;
    }
    else if(a.age < b.age){
        return -1;
    }else{
        return 0
    }
})
console.log(arr1)