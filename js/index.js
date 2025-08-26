// write a bim calculator



function bir(){
    let Weight = document.getElementById("name").value;
    let Height = document.getElementById("email").value;
    // let BIR = Weight / (Height * Height); 
// Underweight: BMI less than 18.5.
// Healthy weight: BMI between 18.5 and 24.9.
// Overweight: BMI between 25 and 29.9.
// Obese: BMI of 30 or higher. 
//     if(BIR <= 18.5){

    // }

    // function BIRC(){
    //     if(BIR >= 30){
    //         return "Obese"
    //     }
    //     else if(BIR >= 25){
    //         return "OverWeight"
    //     }
    //     else if(BIR >= 18.5){
    //         return " Healthy"
    //     }
    //     else if(BIR >=10){
    //         return "Underweight"
    //     }
    //     else{
    //         return "R.I.P ⚰️"
    //     }
    // }
   
    // console.log(BIR.toFixed(2));
    // console.log(Weight,Height)
    document.getElementById('out').innerText= "your name is " + Weight + " your email is " + Height;
}