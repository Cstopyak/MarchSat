/*
multi comment

console.log("whatever you want to see " variables)

Date Types:


*/

// single comment

var  myNum= 6;
console.log(myNum);

//Strings:
var myString="Whats up ya'll";
console.log(myString);


//Arrays:

var myArray= [6,4,3,5,3,2,5];
  //myArray =[0,1,2,3,4,5,6];

console.log(myArray[2]);


//== vs ===

if(5 === "5"){
    console.log("Hey this is Correct!")
} else{
    console.log("Wrong data type!")
}



function sum(array){
    //inside the two brackets is what we are going to execute
    var sumOfAll = 0;
    for(var i =0; i < array.length; i++){
        // console.log(i);
        sumOfAll += array[i];
    }

    return sumOfAll;
}
sum([6,4,3,5,3,2,5])
console.log(sum([6,4,3,5,3,2,5]));

//hey we are done with the demo