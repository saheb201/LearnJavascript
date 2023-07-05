// search array video 47
var arr = [2, 5, 8, 88, 7, 99, 5]
  var find = 99;
  var isFound = false;
  for (var i=0; i < arr.length; i++){
    if(arr[i] == find){
        console.log("data Found at index" , i)
        isFound = true;
        break;
    }
  }if(!isFound){
    console.log('data not found')
  }