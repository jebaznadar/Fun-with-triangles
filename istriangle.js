const input = document.querySelectorAll('.input');
const isTiangleBtn = document.querySelector('#triangle-btn');
const showOutput = document.querySelector('#output');

function calculateSumOfTrianles(Angle1 , Angle2 ,Angle3 ){
   const sumOfTriangles = Angle1 + Angle2 + Angle3;
    return sumOfTriangles ; 

}
function isTriangle(){
const sumOfTriangles = calculateSumOfTrianles(Number(input[0].value) ,Number(input[1].value),Number(input[2].value))

if(sumOfTriangles===180){
    showOutput.innerText = "yay, the angles form a triangle !!!"
}else{
    showOutput.innerText = "Oh Oh! The angle doesn't form a triangle"
}
}
isTiangleBtn.addEventListener("click", isTriangle );