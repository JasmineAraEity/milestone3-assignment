// Problem1

function feetToMile(feet){
    if(feet>=1){

        var mile= feet / 5280;
        return mile;
    }
    else{
        return "distance can't be negative";
    }
}
var result= feetToMile(100);
console.log(result);


// Problem2

function woodCalculator(chair, table, bed){
    var chairCount= chair * 1;
    var tableCount= table * 3;
    var bedCount= bed * 5;

    var totalWood = chairCount+ tableCount+ bedCount;
    return totalWood;

}
var result= woodCalculator(200, 100, 100);
console.log(result);

// Problem3

function bricCalculator(height){

    if(height<=10){
       var total= height*15*1000;

       return total;
    }

    else if(height>10 && height<=20){
        var total1= 10*15*1000;
        var total2= (height-10)*12* 1000;
        var total= total1+total2;

        return total;
    }
    else {
        var total1= 10*15*1000;
        var total2= 10*12*1000;
        var total3= (height-20)*10*1000;
        var total= total1+total2+ total3;

        return total;
    }
}
    
var result= bricCalculator(40);
console.log(result);

// Problem4

function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}

var output = tinyFriend([4, 'seven', 2, 'three', 'sam', 'jasmine', 'safia']);
console.log(output);
