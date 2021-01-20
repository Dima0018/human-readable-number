module.exports = function toReadable (number) {
    let numbersF = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen","seventeen", "eighteen", "nineteen"] ;
    let numbersDD = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number < 20){
        if (number ==0){
            return "zero";
        }
        return numbersF[number-1];
    }
    
    else if(number < 100 && number % 10 ==0){
        if (number == 10){
            return "ten";
        }
        return numbersDD[number/10 -2 ]
    }
    else if(number < 100){
        return numbersDD[Math.floor(number/10)%10-2] + " " + numbersF[number - Math.floor(number/10)*10 -1];
    }
    
    else if(number%100===0) {
        return numbersF[Math.floor(number/100)-1]  + " hundred"; 
    }
    else if(number%10===0) {
        if(number%100==10){
            return numbersF[Math.floor(number/100)-1]  + " hundred ten";
        }
        return numbersF[Math.floor(number/100)-1]  + " hundred " + numbersDD[Math.floor(number/10)%10-2]; 
    }
    else if(number%100<20){
        return numbersF[Math.floor(number/100)-1]  + " hundred " + numbersF[number%100-1]; 
    }
    else {
        return numbersF[Math.floor(number/100)-1]  + " hundred " + numbersDD[Math.floor(number/10)%10-2] + " " + numbersF[number - Math.floor(number/10)*10 -1]; 
      
    }

}
