function addValue(){
    // get the operands value

    var rawnumber1 =
     document.getElementById('input_a').value;
     number1 = parseInt(rawnumber1, 10)
    var rawnumber2 = 
    document.getElementById('input_b').value;
    number2 = parseInt(rawnumber2, 10)

  

    

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation
    var ans = number1 + number2;
    // creating the text output
    var answer = [rawnumber1, '+',   rawnumber2, "=", ans];


    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = answer;
    console.log(answer)
}


function mulValue(){

    var rawnumber1 =
    document.getElementById('input_a').value;
    number1 = parseInt(rawnumber1, 10)
   var rawnumber2 = 
   document.getElementById('input_b').value;
   number2 = parseInt(rawnumber2, 10)

 

   

   // parse to integer. You can use: parseInt(input, 10);

   // perform operation
   var ans = number1 * number2;
   // creating the text output
   var answer = [rawnumber1, '*',   rawnumber2, "=", ans];


   // (if you want to check) print out in console

   // change the text area

    document.mycalculator.output.value = answer;
    console.log(answer)
}

function divValue(){
    var rawnumber1 =
    document.getElementById('input_a').value;
    number1 = parseInt(rawnumber1, 10)
   var rawnumber2 = 
   document.getElementById('input_b').value;
   number2 = parseInt(rawnumber2, 10)

 

   

   // parse to integer. You can use: parseInt(input, 10);

   // perform operation
   var ans = number1 / number2;
   // creating the text output
   var answer = [rawnumber1,  '/'  ,  rawnumber2,  "=" , ans];
   


   // (if you want to check) print out in console

   // change the text area

    document.mycalculator.output.value = answer;
    console.log(answer)
}
