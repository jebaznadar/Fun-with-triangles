const input = document.querySelectorAll('.input')
const hypoBtn = document.querySelector('#calculate-hypotenuse')
const showOutput = document.querySelector('#output')


function calculateHypotenuse( height , base){
    const hypotenuseLength = Math.sqrt(height*height + base*base)
    return hypotenuseLength ;


}


function isHypotenuse(){
    // const sum = calculateHypotenuse(Number(input[0].value) , Number(input[1].value))
 const hypotenuseLength  =  calculateHypotenuse(Number(input[0].value),Number(input[1].value))
 showOutput.innerText = "The length of hypotenuse is " + hypotenuseLength ;
  
}



hypoBtn.addEventListener("click", isHypotenuse );