const input = document.querySelectorAll('.input')
const calculateBtn = document.querySelector('#calculate')
const showOutput = document.querySelector('#output')

function inputFormula(base ,height) {
    const areaOfTriangle = 0.5*base*height ;
    return areaOfTriangle
}


function calculateArea(){
   const areaOfTriangle = inputFormula(Number(input[0].value),Number(input[1].value))
   showOutput.innerText = "Area of a Triangle is "  +areaOfTriangle +" Units"
}


calculateBtn.addEventListener("click",calculateArea)